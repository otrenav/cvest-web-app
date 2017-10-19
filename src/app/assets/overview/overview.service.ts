
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { DisaggregatedObservation } from '../classes';
import { AssetsService } from '../assets.service';
import { Overview } from './overview';


@Injectable()
export class OverviewService {

    constructor(private service: AssetsService) { }

    public Overview(): Observable<Overview> {
        return this.service
            .disaggregatedObservations()
            .map(dobs => {
                const lastObservation = dobs[dobs.length - 1];
                return this.aggregateObservation(lastObservation);
            });
    }

    private aggregateObservation(d: DisaggregatedObservation): Overview {
        return {
            'timestamp': d['timestamp'],
            'btc': d['assets'].reduce((sum, asset) => sum + asset['btc'], 0),
            'usd': d['assets'].reduce((sum, asset) => sum + asset['usd'], 0),
            'btc_1h': this.aggregateChange(d['assets'], 'btc', '1h'),
            'btc_1d': this.aggregateChange(d['assets'], 'btc', '1d'),
            'btc_1w': this.aggregateChange(d['assets'], 'btc', '1w'),
            'btc_1m': this.aggregateChange(d['assets'], 'btc', '1m'),
            'btc_1y': this.aggregateChange(d['assets'], 'btc', '1y'),
            'usd_1h': this.aggregateChange(d['assets'], 'usd', '1h'),
            'usd_1d': this.aggregateChange(d['assets'], 'usd', '1d'),
            'usd_1w': this.aggregateChange(d['assets'], 'usd', '1w'),
            'usd_1m': this.aggregateChange(d['assets'], 'usd', '1m'),
            'usd_1y': this.aggregateChange(d['assets'], 'usd', '1y')
        };
    }

    private aggregateChange(assets, base, interval) {
        // Normally, if we wanted to know percentage change we would do
        // ( BTC_2 - BTC_1 ) / BTC_1. However, to optimize workload on
        // the back end, aggregating data is done in the front end. To
        // optimize we use only the last observation in the `disaggregated
        // Observations` object, which contains the BTC and USD amounts for
        // each asset, as well as the percentage change for each of them.
        // To get the change in aggregate BTC or USD, we use the following
        // formula: sum(pi * BTCi / (1 + pi)) / sum(BTCi / (1 + pi), which
        // is exactly equivalent to: (sum(BTC2pi) - sum(BTC1i)) / sum(BTC1i),
        // where p corresponds to either one hour, day, week, month or year,
        // and `previous()` computes BTCi / (1 + pi) for the i-th asset.
        return (
            assets.reduce((s, a) => s + this.change(a, base, interval), 0) /
            assets.reduce((s, a) => s + this.previous(a, base, interval), 0)
        );
    }

    private change(asset, base, interval) {
        return asset[base + '_' + interval] * this.previous(asset, base, interval);
    }

    private previous(asset, base, interval) {
        return asset[base] / (1 + asset[base + '_' + interval]);
    }
}
