
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class TimerService {

    private min = 0.5;
    private sec = 60;
    private msec = 1000;
    private interval = this.msec * this.sec * this.min;

    time: Observable<number>;

    constructor() {
        this.time = Observable.timer(0, this.interval);
    }
}
