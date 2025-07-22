import {useQuery} from "@tanstack/react-query";
import {IHistorical, RouteParams} from "../interface/coinInterface";
import {fetchCoinHistory} from "../api/api";
import {Loader} from "../component/Layout";
import ReactApexChart from "react-apexcharts";

function Price(props:RouteParams) {
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
                theme: {mode: "dark"},
                grid: {show: false},
                xaxis: {type: "datetime", axisTicks: {show: false}},
                yaxis: {show:false},
                tooltip: {
                    custom: function({ series, seriesIndex, dataPointIndex, w }) {
                        const ohlc = w.globals.initialSeries[seriesIndex].data[dataPointIndex].y;
                        const label = w.globals.categoryLabels[dataPointIndex];
                        const [open, high, low, close] = ohlc;

                        const format = (v:number) => new Intl.NumberFormat ('en-US',
                            {
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            }
                        ).format(v);

                        return `
                            <div style="padding: 8px;">
                                <div><strong>${label}</strong></div>
                                <div>Open: ${format(open)}</div>
                                <div>High: ${format(high)}</div>
                                <div>Low: ${format(low)}</div>
                                <div>Close: ${format(close)}</div>
                            </div>
                        `;
                    }
                }
            }}
        />
    )
}

export default Price;