
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { DisaggregatedObservation } from '../classes';
import { AssetsService } from '../assets.service';
import { Performance } from './classes';


@Injectable()
export class PerformanceService {

    constructor(private service: AssetsService) { }

    public aggregatedPerformance(): Observable<Performance> {
        return this.service
            .disaggregatedObservations()
            .map(dobs => this.setupAggregatedPerformance(dobs));
    }

    private setupAggregatedPerformance(
        dobs: DisaggregatedObservation[]): Performance {
        return {
            timestamps: dobs.map(d => d['timestamp']),
            asset_keys: ['btc', 'usd'],
            assets: {
                btc: dobs.map(d => d['assets'].reduce((s, a) => s + a['btc'], 0)),
                usd: dobs.map(d => d['assets'].reduce((s, a) => s + a['usd'], 0))
            }
        };
    }
}
