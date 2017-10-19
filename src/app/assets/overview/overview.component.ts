
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { OverviewService } from './overview.service';
import { Colors } from '../../utilities/colors';
import { Overview } from './overview';


@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css'],
    providers: [OverviewService]
})
export class OverviewComponent implements OnInit, OnDestroy {

    private overview: Overview = new Overview();
    private subscription: Subscription;

    constructor(private service: OverviewService) { }

    ngOnInit() {
        this.subscribeOverview();
    }

    ngOnDestroy() {
        // TODO: Check this works
        this.subscription.unsubscribe();
    }

    private subscribeOverview(): void {
        this.subscription = this.service
            .Overview()
            .subscribe(o => this.overview = o);
    }

    private customColor(value: number): string {
        return Colors.customColor(value);
    }
}
