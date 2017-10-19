
import { environment } from '../../environments/environment';

import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { ExternalError } from '../utilities/external-error';
import { TimerService } from '../utilities/timer.service';
import { DisaggregatedObservation } from './classes';
import { UserService } from '../user/user.service';


@Injectable()
export class AssetsService {

    private url = environment.backend + '/assets/time-series';
    private DOBS = new BehaviorSubject<DisaggregatedObservation[]>(
        [new DisaggregatedObservation()]);

    constructor(
        private http: HttpClient,
        private user: UserService,
        private timer: TimerService
    ) {
        this.disaggregatedObservationsOnTimer();
    }

    public disaggregatedObservations(): Observable<DisaggregatedObservation[]> {
        return this.DOBS;
    }

    private disaggregatedObservationsOnTimer(): void {
        this.timer.time.subscribe(() => this.getDisaggregatedObservations());
    }

    private getDisaggregatedObservations(): void {
        const params = new HttpParams().set('user_id', this.user.id());
        this.http.get<DisaggregatedObservation[]>(this.url, { params })
            .subscribe(resp => {
                return this.DOBS.next(<DisaggregatedObservation[]>resp['data']);
            }, (error: HttpErrorResponse) => {
                ExternalError.http(error);
            });
    }
}
