
export class Asset {
    name: string = null;
    symbol: string = null;
    location: string = null;
    total: number = null;
    available: number = null;
    btc: number = null;
    btc_1h: number = null;
    btc_1d: number = null;
    btc_1m: number = null;
    btc_1w: number = null;
    btc_1y: number = null;
    usd: number = null;
    usd_1h: number = null;
    usd_1d: number = null;
    usd_1m: number = null;
    usd_1w: number = null;
    usd_1y: number = null;
    address: string = null;
}

export class AggregatedObservation {
    timestamp: string = null;
    btc: number = null;
    usd: number = null;
}

export class DisaggregatedObservation {
    timestamp: string = null;
    assets: Asset[] = [];
}
