import {useParams} from "react-router";
import {ICoin, IInfoData, IPriceData, RouteParams, RouteState} from "../interface/coinInterface";
import {Link, Route, Switch, useLocation, useRouteMatch} from "react-router-dom";
import {Container, Description, Header, Loader, Overview, OverviewItem, Tab, Tabs, Title} from "../component/Layout";
import Chart from "./Chart";
import Price from "./Price";
import {useQuery} from "@tanstack/react-query";
import {fetchCoinInfo, fetchCoinTickers} from "../api/api";

const Coin = () => {
    const { coinId } = useParams<RouteParams>();
    const { state } = useLocation<RouteState>();
    const priceMatch = useRouteMatch("/:coinId/price");
    const chartMatch = useRouteMatch("/:coinId/chart");
    const { isLoading: infoLoading, data: coinInfo} = useQuery<IInfoData>(
        {
            queryKey: ["info", coinId],
            queryFn: () => fetchCoinInfo(coinId)
        }
    );
    const { isLoading: tickersLoading, data: priceInfo} = useQuery<IPriceData>(
        {
            queryKey: ["tickers", coinId],
            queryFn: () => fetchCoinTickers(coinId)
        }
    );
    const loading = infoLoading || tickersLoading;
    return (
        <Container>
            <Header>
                <Title>
                    {state?.name ? state.name : loading ? "Loading..." : coinInfo?.name}
                </Title>
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : (
                <>
                    <Overview>
                        <OverviewItem>
                            <span>Rank:</span>
                            <span>{coinInfo?.rank}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Symbol:</span>
                            <span>${coinInfo?.symbol}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Open Source:</span>
                            <span>{coinInfo?.open_source ? "Yes" : "No"}</span>
                        </OverviewItem>
                    </Overview>
                    <Description>{coinInfo?.description}</Description>
                    <Overview>
                        <OverviewItem>
                            <span>Total Suply:</span>
                            <span>{priceInfo?.total_supply}</span>
                        </OverviewItem>
                        <OverviewItem>
                            <span>Max Supply:</span>
                            <span>{priceInfo?.max_supply}</span>
                        </OverviewItem>
                    </Overview>

                    <Tabs>
                        <Tab $isActive={chartMatch !== null}>
                            <Link to={`/${coinId}/chart`}>Chart</Link>
                        </Tab>
                        <Tab $isActive={priceMatch !== null}>
                            <Link to={`/${coinId}/price`}>Price</Link>
                        </Tab>
                    </Tabs>
                    <Switch>
                        <Route path={`/:coinId/price`}>
                            <Price />
                        </Route>
                        <Route path={`/:coinId/chart`}>
                            <Chart coinId={coinId}/>
                        </Route>
                    </Switch>
                </>
            )}
        </Container>
    );
}

export default Coin;