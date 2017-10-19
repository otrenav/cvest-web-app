
import { Component, ViewChild, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

import { PortfolioService } from './portfolio.service';
import { Colors } from '../../utilities/colors';
import { Asset } from '../classes';


@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css'],
    providers: [PortfolioService]
})
export class PortfolioComponent implements OnInit {

    private dataSource: PortfolioDataSource;
    private displayedColumns = [
        'name', 'symbol', 'location', 'total', 'btc',
        'usd', 'btc_1h', 'btc_1d', 'btc_1w', 'btc_1m'
    ];

    constructor(private service: PortfolioService) {
        this.dataSource = new PortfolioDataSource(this.service);
    }

    ngOnInit() { }

    private customColor(value: number): string {
        return Colors.customColor(value);
    }
}


export class PortfolioDataSource extends DataSource<any> {

    private portfolio: Asset[];
    private subscription: Subscription;

    constructor(private service: PortfolioService) {
        super();
    }

    connect(): Observable<Asset[]> {
        return this.service.portfolio().map(p => p);
    }

    disconnect() { }
}
