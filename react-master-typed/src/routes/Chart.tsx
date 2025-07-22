import {useQuery} from "@tanstack/react-query";
import {fetchCoinHistory} from "../api/api";
import ReactApexChart from "react-apexcharts";
import {IChartProps, IHistorical} from "../interface/coinInterface";
import {Loader} from "../component/Layout";

function Chart(props: IChartProps) {
    const {isLoading, data} = useQuery<IHistorical[]>(
        {
            queryKey: ["ohlcv", props.coinId ],
            queryFn: () => fetchCoinHistory(props.coinId),
            // refetchInterval: 10000
        }
    );
    return isLoading ? (
        <Loader>"Loading chard..."</Loader>
        ) : (
            <ReactApexChart
                type="line"
                series={[
                    {
                        name: "sales",
                        data: data?.map(price => Number(price.close)) ?? []
                    }
                ]}
                options={{
                    theme: {mode: props.isDark ? "dark" : "light"},
                    chart: {
                        height: 300,
                        width: "100%",
                        toolbar: {show: false},
                        background: "transparent",
                    },
                    grid: {show: false},
                    stroke: {
                        curve: "smooth",
                        width: 4,
                    },
                    yaxis: {show: false},
                    xaxis: {
                        type: "datetime",
                        axisTicks: {show: false},
                        // labels: {show: false},
                        // axisBorder: {show: false},
                        categories: data?.map(price => new Date(price.time_close * 1000).toUTCString()),
                    },
                    fill: {
                        type: "gradient",
                        gradient: {
                            gradientToColors: ["#0be881"],
                            stops: [0, 100],
                        }
                    },
                    colors: ["#0fbcf9"],
                    tooltip: {
                        y: {formatter: (value) => `$${value.toFixed(2)}`}
                    }
                }}
            />
        )
    }

export default Chart;