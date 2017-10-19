
export class Performance {

    timestamps: string[] = [];
    asset_keys: string[] = [];
    assets: object = null;

    constructor(obj: object) {
        if (obj) {
            this.timestamps = obj['timestamps'];
            this.asset_keys = obj['asset_keys'];
            this.assets = obj['assets'];
        }
    }
}

//
// Example of disaggregated observation:
//
// [
//     {
//         timestamp: '2023-23-23-23-23'
//         assets: [
//             {
//                 address: "0x19B5Bb3b9Aa168ba9D126f3E8DADE47E2dAA0500",
//                 available: 0.237929810429,
//                 btc: 0.013319834233398364,
//                 btc_1d: null,
//                 btc_1h: null,
//                 btc_1m: null,
//                 btc_1w: null,
//                 btc_1y: null,
//                 location: "Wallet",
//                 name: "Ether",
//                 symbol: "ETH",
//                 total: 0.237929810429,
//                 usd: 74.32475211162144,
//                 usd_1d: null,
//                 usd_1h: null,
//                 usd_1m: null,
//                 usd_1w: null,
//                 usd_1y: null
//             },
//             ...
//         ]
//     }
// ]

export class GraphDataSet {

    data: number = null;
    label: string = null;
    yAxisID: string = null;
    pointsBackgroundColor: string = null;
    backgroundColor: string = null;
    borderColor: string = null;
    pointRadius = 1;
    borderWidth = 1;
    fill: false;

    constructor(obj: object) {
        if (obj) {
            this.data = obj['data'];
            this.label = obj['label'];
            this.yAxisID = obj['yAxisID'];
            this.pointsBackgroundColor = obj['pointBackgroundColor'];
            this.backgroundColor = obj['backgroundColor'];
            this.borderColor = obj['borderColor'];
            if (obj['pointRadius']) {
                this.pointRadius = obj['pointRadius'];
            }
            if (obj['borderWidth']) {
                this.borderWidth = obj['borderWidth'];
            }
            if (obj['fill']) {
                this.fill = obj['fill'];
            }
        }
    }
}

// export let data = {
//     labels: [],
//     datasets: [
//         {
//             data: [],
//             label: 'BTC',
//             yAxisID: 'BTC',
//             pointBackgroundColor: 'rgba(85, 255, 251, 1)',
//             backgroundColor: 'rgba(85, 255, 251, 0.1)',
//             borderColor: 'rgba(85, 255, 251, 1)',
//             pointRadius: 1,
//             borderWidth: 1,
//             fill: false
//         },
//         {
//             data: [],
//             label: 'USD',
//             yAxisID: 'USD',
//             pointBackgroundColor: 'rgba(246, 96, 105, 1)',
//             backgroundColor: 'rgba(246, 96, 105, 0.1)',
//             borderColor: 'rgba(246, 96, 105, 1)',
//             pointRadius: 1,
//             borderWidth: 1,
//             fill: false
//         }
//     ]
// };
