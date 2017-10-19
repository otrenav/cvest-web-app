
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PerformanceService } from './performance.service';
import { Performance, GraphDataSet } from './classes';
import { dataTemplate, options } from './constants';
import { Colors } from '../../utilities/colors';

// ChartJS
declare var Chart: any;


@Component({
    selector: 'app-performance',
    templateUrl: './performance.component.html',
    styleUrls: ['./performance.component.css'],
    providers: [PerformanceService]
})
export class PerformanceComponent implements OnInit, OnDestroy {

    private aggregatedPerformance: Performance;
    private subscription: Subscription;

    constructor(private service: PerformanceService) { }

    ngOnInit() {
        this.subscribeAggregatedPerformances();
    }

    ngOnDestroy() {
        // TODO: Check this works
        this.subscription.unsubscribe();
    }

    private subscribeAggregatedPerformances(): void {
        this.subscription = this.service
            .aggregatedPerformance()
            .subscribe(ap => {
                this.aggregatedPerformance = ap;
                this.aggregatedPerformanceGraph();
            });
    }

    private aggregatedPerformanceGraph(): void {
        const data = dataTemplate;
        const canvas = document.getElementById('aggregated-performance-graph');
        data.labels = this.aggregatedPerformance.timestamps;
        data.datasets = this.buildGraphDataSets();
        const graph = new Chart(canvas, {
            options: options,
            type: 'line',
            data: data
        });
    }

    private buildGraphDataSets(): GraphDataSet[] {
        return this.aggregatedPerformance['asset_keys']
            .map(key => this.buildGraphDataSet(key));
    }

    private buildGraphDataSet(key: string): GraphDataSet {
        return {
            data: this.aggregatedPerformance.assets[key],
            label: key.toUpperCase(),
            yAxisID: key.toUpperCase(),
            pointsBackgroundColor: Colors.rgba(key),
            backgroundColor: Colors.rgba(key, 0.1),
            borderColor: Colors.rgba(key),
            pointRadius: 1,
            borderWidth: 1,
            fill: false
        };
    }
}
