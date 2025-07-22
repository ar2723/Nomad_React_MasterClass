import {useQuery} from "@tanstack/react-query";
import {fetchCoinHistory} from "../api/api";
import ReactApexChart from "react-apexcharts";

interface ChartProps {
    coinId: string;
}

interface IHistorical {
    time_open: number;
    time_close: number;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
    market_cap: number;
}

function Chart(props: ChartProps) {
    const {isLoading, data} = useQuery<IHistorical[]>(
        { queryKey: ["ohlcv", props.coinId ], queryFn: () => fetchCoinHistory(props.coinId)}
    );
    return (
        <div>
            {isLoading ? "Loading chard..."
                : <ReactApexChart
                    type="line"
                    series={[
                        {
                            name: "sales",
                            data: data?.map(price => Number(price.close)) ?? [],
                        }
                    ]}
                    options={{
                        theme: {
                            mode: "dark"
                        },
                        chart: {
                            height: 300,
                            width: "100%",
                            toolbar: {
                                show: false
                            },
                            background: "transparent",
                        },
                        grid: {
                            show: false
                        },
                        stroke: {
                            curve: "smooth",
                            width: 4,
                        },
                        yaxis: {
                            show: false
                        },
                        xaxis: {
                            axisTicks: {
                                show: false
                            },
                            labels: {
                                show: false
                            },
                            axisBorder: {
                                show: false
                            }
                        }
                    }}
                />
            }
        </div>
    )
}

export default Chart;