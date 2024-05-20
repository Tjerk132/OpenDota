import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';

import { AdvantageGraphProps } from "./AdvantageGraphProps";
import { useGradient } from '../useGradient';

export const AdvantageGraph: React.FC<AdvantageGraphProps> = (props) => {

    const { data, chart } = props;

    const { value } = useGradient(data, 0);

    return <LineChart
        {...chart}
        sx={{
            [`& .${lineElementClasses.root}`]: {
                strokeWidth: 2,
            },
            '& .MuiAreaElement-series-advantage-graph': {
                fill: "url('#advantageGradient')",
            }
        }}
    >
        <defs>
            <linearGradient id="advantageGradient" gradientTransform="rotate(90)">
                <stop offset="0%" stopColor="lightgreen" />
                <stop offset={`${value}%`} stopColor="green" />
                <stop offset={`${value}%`} stopColor="red" />
                <stop offset="100%" stopColor="darkred" />
            </linearGradient>
        </defs>
    </LineChart>
}