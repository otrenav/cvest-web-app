
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { DisaggregatedObservation } from '../classes';
import { AssetsService } from '../assets.service';
import { Overview } from './overview';
import { Asset } from '../classes';


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
            'btc_1h': this.percentChange(d['assets'], 'btc', '1h'),
            'btc_1d': this.percentChange(d['assets'], 'btc', '1d'),
            'btc_1w': this.percentChange(d['assets'], 'btc', '1w'),
            'btc_1m': this.percentChange(d['assets'], 'btc', '1m'),
            'btc_1y': this.percentChange(d['assets'], 'btc', '1y'),
            'usd_1h': this.percentChange(d['assets'], 'usd', '1h'),
            'usd_1d': this.percentChange(d['assets'], 'usd', '1d'),
            'usd_1w': this.percentChange(d['assets'], 'usd', '1w'),
            'usd_1m': this.percentChange(d['assets'], 'usd', '1m'),
            'usd_1y': this.percentChange(d['assets'], 'usd', '1y')
        };
    }

    private percentChange(
        assets: Asset[], base: string, interval: string): number {
        // Normally, if we wanted to know percentage change we would do
        // (sum(BTC_2) - sum(BTC_1)) / sum(BTC_1), for the assets' values within
        // each timestamp. To optimize workload on the back end, we use only the
        // last observation in the `disaggregatedObservations` object, which
        // contains the BTC and USD amounts for each asset, as well as the
        // percentage change for each of them. To get the percent change, we
        // use: (sum(BTCi) - PV) / PV, where PV := sum(BTCi / (1 + pi / 100)) is
        // the present value (seen from T1) for BTC2 (percentage changes (pi)
        // are expressed as 10% not 0.1, therefore we adjust by 100). This
        // method uses only data from the last observation, and is exactly
        // equivalent to: (sum(BTC2pi) - sum(BTC1i)) / sum(BTC1i), if we had the
        // BTC1 data available in the observations we're using.
        const PV = assets.reduce((sum, asset) => {
            return sum + this.presentValue(asset, base, interval);
        }, 0);
        return (assets.reduce((s, a) => s + a[base], 0) - PV) / PV * 100;
    }

    private presentValue(asset, base, interval): number {
        return asset[base] / (1 + asset[base + '_' + interval] / 100);
    }
}
