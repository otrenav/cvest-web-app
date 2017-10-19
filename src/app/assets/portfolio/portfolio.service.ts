

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { DisaggregatedObservation } from '../classes';
import { AssetsService } from '../assets.service';
import { Asset } from '../classes';


@Injectable()
export class PortfolioService {

    constructor(private service: AssetsService) { }

    public portfolio(): Observable<Asset[]> {
        return this.service
            .disaggregatedObservations()
            .map(dobs => dobs[dobs.length - 1]['assets']);
    }
}
