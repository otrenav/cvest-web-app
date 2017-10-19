
export class Overview {

    timestamp: string = null;
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

    constructor(obj: object = null) {
        if (obj) {
            this.timestamp = obj['timestamp'];
            this.btc = obj['btc'];
            this.btc_1h = obj['btc_1h'];
            this.btc_1d = obj['btc_1d'];
            this.btc_1m = obj['btc_1m'];
            this.btc_1w = obj['btc_1w'];
            this.btc_1y = obj['btc_1y'];
            this.usd = obj['usd'];
            this.usd_1h = obj['usd_1h'];
            this.usd_1d = obj['usd_1d'];
            this.usd_1m = obj['usd_1m'];
            this.usd_1w = obj['usd_1w'];
            this.usd_1y = obj['usd_1y'];
        }
    }
}
