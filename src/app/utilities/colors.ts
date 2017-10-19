
import { environment } from '../../environments/environment';

export class Colors {

    private static selectedColors(): object {
        return {
            btc: { red: '85', green: '225', blue: '251' },
            usd: { red: '246', green: '96', blue: '105' }
        };
    }

    private static randomColors(): object {
        // TODO: Add more colors for theme
        return [
            { red: '85', green: '225', blue: '251' },
            { red: '246', green: '96', blue: '105' }
        ];
    }

    public static rgba(key: string, transparency = 1): string {
        let color = {};
        if (Colors.selectedColors().hasOwnProperty(key)) {
            color = Colors.selectedColors()[key];
        } else {
            // color = Colors.randomColors()[
            //     Math.round(Math.random() * (Colors.randomColors.length - 1))
            // ];
            color = Colors.randomColors()[0];
        }
        return (
            'rgba(' +
            color['red'] + ', ' +
            color['green'] + ', ' +
            color['blue'] + ', ' +
            transparency + ')'
        );
    }

    public static customColor(value: number): string {
        return value > 0 ? environment.colors.positive :
            value < 0 ? environment.colors.negative :
                environment.colors.neutral;
    }
}
