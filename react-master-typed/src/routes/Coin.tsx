import {useParams} from "react-router";
import {Container, Loader, Title, Header, Coin} from "../common/Layout";
import {useEffect, useState} from "react";
import {Link, Route, Switch, useLocation, useRouteMatch} from "react-router-dom";
import styled from "styled-components";
import Price from "./Price";
import Chart from "./Chart";
import {IInfoData, IPriceData, RouteParams, RouteState} from "../interface/CoinInterface";

const CoinDetail = () => {

    const Overview = styled.div`
        display: flex;
        justify-content: space-between;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 20px;
        border-radius: 10px;
    `;
    const OverviewItem = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        
        span:first-child {
            font-size: 10px;
            font-weight: 400;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
    `;
    const Description = styled.p`
        margin: 20px 0px;
    `;

    const Tabs = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin: 25px 0px;
        gap: 10px;
    `;

    const Tab = styled.span<{ isActive: boolean }>`
        text-align: center;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 400;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 7px 0px;
        border-radius: 10px;
        color: ${(props) => props.isActive ? props.theme.accentColor : props.theme.textColor};
        a {display: block;}
    `;

    const [loading, setLoading] = useState(true);
    const { coinId } = useParams<RouteParams>();
    const { state } = useLocation<RouteState>();
    const [info, setInfo] = useState<IInfoData>();
    const [priceInfo, setPriceInfo] = useState<IPriceData>();

    const priceMatch = useRouteMatch("/:coinId/price");
    const chartMatch = useRouteMatch("/:coinId/chart");

    useEffect(() => {
        (async() => {
            const infoData = await (
                await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
            ).json();

            const priceData = await (
                await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
            ).json();

            setInfo(infoData);
            setPriceInfo(priceData);

            setLoading(false);
        })();
    }, [coinId]);

    return (
        <Container>
            <Header>
                <Title>
                    {state?.name ? state.name : loading ? "Loading..." : info?.name}
                </Title>
            </Header>
            {loading ? (
                <Loader>"Loading..."</Loader>
                ) : (
                    <>
                        <Overview>
                            <OverviewItem>
                                <span>Rank:</span>
                                <span>{info?.rank}</span>
                            </OverviewItem>
                            <OverviewItem>
                                <span>Symbol:</span>
                                <span>${info?.symbol}</span>
                            </OverviewItem>
                            <OverviewItem>
                                <span>Open Source:</span>
                                <span>{info?.open_source ? "Yes" : "No"}</span>
                            </OverviewItem>
                        </Overview>
                        <Description>{info?.description}</Description>
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
                            <Tab isActive={chartMatch !== null}>
                                <Link to={`/${coinId}/chart`}>Chart</Link>
                            </Tab>
                            <Tab isActive={priceMatch !== null}>
                                <Link to={`/${coinId}/price`}>Price</Link>
                            </Tab>
                        </Tabs>

                        <Switch>
                            <Route path={`/${coinId}/price`}>
                                <Price/>
                            </Route>
                            <Route path={`/${coinId}/chart`}>
                                <Chart/>
                            </Route>
                        </Switch>
                    </>
                )
            }
        </Container>
    )
}

export default CoinDetail;