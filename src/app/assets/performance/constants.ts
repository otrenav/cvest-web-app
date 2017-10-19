
import { environment } from '../../../environments/environment';

export let dataTemplate = {
    labels: [],
    datasets: []
};

export let options = {
    legend: {
        labels: {
            fontColor: environment.colors.neutral
        }
    },
    scales: {
        yAxes: [
            {
                id: 'BTC',
                type: 'linear',
                position: 'left',
                ticks: {
                    fontColor: environment.colors.neutral
                }
            },
            {
                id: 'USD',
                type: 'linear',
                position: 'right',
                ticks: {
                    fontColor: environment.colors.neutral
                }
            }
        ],
        xAxes: [
            {
                ticks: {
                    fontColor: environment.colors.neutral
                }
            }
        ]
    }
};
