import {useQuery} from "@tanstack/react-query";
import {IChartProps, IHistorical} from "../interface/coinInterface";
import {fetchCoinHistory} from "../api/api";
import {Loader} from "../component/Layout";
import ReactApexChart from "react-apexcharts";
import {currencyFormatter} from "../utils/util";

function Price(props:IChartProps) {
    const {isLoading, data} = useQuery<IHistorical[]>(
        {
            queryKey: ["ohlcv", props.coinId ],
            queryFn: () => fetchCoinHistory(props.coinId),
            // refetchInterval: 10000
        }
    );
    return isLoading ? (
        <Loader>"Loading price..."</Loader>
    ) : (
        <ReactApexChart
            type="candlestick"
            series={[
                {
                    data: data?.map(price => ({
                        x: new Date(price.time_close * 1000).toUTCString(),
                        y: [
                            Number(price.open),
                            Number(price.high),
                            Number(price.low),
                            Number(price.close)
                        ]
                    })) ?? []
                }
            ]}
            options={{
                chart: {
                    type: "candlestick",
                    height: 500,
                    width: "100%",
                    background: "transparent",
                    zoom: {enabled: true},
                    toolbar: {show: false},
                },
                theme: {mode: props.isDark ? "dark" : "light"},
                grid: {show: false},
                xaxis: {type: "datetime", axisTicks: {show: false}},
                yaxis: {show:false},
                tooltip: {
                    custom: function({ seriesIndex, dataPointIndex, w }) {
                        const ohlc = w.globals.initialSeries[seriesIndex].data[dataPointIndex].y;
                        const label = w.globals.categoryLabels[dataPointIndex];
                        const [open, high, low, close] = ohlc;

                        return `
                            <div style="padding: 8px;">
                                <div><strong>${label}</strong></div>
                                <div>Open: ${currencyFormatter(open)}</div>
                                <div>High: ${currencyFormatter(high)}</div>
                                <div>Low: ${currencyFormatter(low)}</div>
                                <div>Close: ${currencyFormatter(close)}</div>
                            </div>
                        `;
                    }
                }
            }}
        />
    )
}

export default Price;