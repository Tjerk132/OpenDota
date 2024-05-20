import { LineChartProps, chartsTooltipClasses } from "@mui/x-charts";
import { SeriesValueFormatterContext } from "@mui/x-charts/models/seriesType/common";
import { AdvantageGraphProps } from "./AdvantageGraph/AdvantageGraphProps";
import dayjs from "dayjs";

export const useTeamAdvantages = (data: number[]) => {
    const djs = dayjs();

    const formatMinute = (minute: number) => {
        if (minute === 0) return minute.toString();
        
        return djs.minute(minute).format("mm:00");
    }
    
    const formatAmount = (amount: number) => {
        if (amount === 0) return amount.toString();
        
        return `${amount / 1000}K`;
    }

    const minutes = data.map((_, index) => index);

    const lineChart = (id: string, data: number[]) => ({
        width: 380,
        height: 300,
        xAxis: [
            {
                max: minutes.length - 1,
                data: minutes,
                hideTooltip: true,
                valueFormatter: (minute: number) => formatMinute(minute)
            }
        ],
        yAxis: [
            {
                colorMap: {
                    type: 'piecewise',
                    thresholds: [0],
                    colors: ['red', 'green'],
                },
                valueFormatter: (amount: number) => formatAmount(amount)
            }
        ],
        series: [
            {
                data: data,
                area: true,
                id: id,
                showMark: false,
                valueFormatter: (amount: number | null, context: SeriesValueFormatterContext) => {
                    if (amount != null) {
                        const teamAdvantage = (amount > 0)
                            ? 'Radiant advantage'
                            : 'Dire advantage';
    
                        const advantageAmount = amount > 0 ? amount : amount * -1;
                        const minute = formatMinute(context.dataIndex);
                        return `${teamAdvantage} at ${minute}: ${advantageAmount}`;
                    }
                    return '';
                },
            },
        ],
        slotProps: {
            popper: {
                sx: {
                    [`& .${chartsTooltipClasses.root}`]: {
                        padding: 0,
                    },
                    [`& .${chartsTooltipClasses.markCell}`]: {
                        display: "none",
                    },
                    [`& .${chartsTooltipClasses.cell}`]: {
                        padding: 0,
                    },
                    [`& .${chartsTooltipClasses.valueCell}`]: {
                        padding: 1,
                    },
                },
            }
        },
        axisHighlight: { y: "none" },
        grid: { horizontal: true, vertical: true },
    }) as LineChartProps;

    const advantageGraph = {
        data: data,
        chart: lineChart('advantage-graph', data)
    } as AdvantageGraphProps;

    return {
        advantageGraph,
    }
}