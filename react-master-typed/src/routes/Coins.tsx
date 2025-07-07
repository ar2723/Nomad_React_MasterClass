import styled from "styled-components";
import {Link} from "react-router-dom";
import {Container, Loader, Title, Header, Coin, CoinList, Img} from "../component/Layout";
import {fetchCoins} from "../api/api";
import {useQuery} from "@tanstack/react-query";
import {ICoin} from "../interface/coinInterface";

const Coins = () => {
    const { isLoading, data } = useQuery<ICoin[]>({ queryKey: ["allCoins"], queryFn: fetchCoins});
    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {isLoading ? (
                <Loader>"Loading..."</Loader>
            ) : (
                <CoinList>
                    {data?.slice(0, 100).map(coin =>
                        <Coin key={coin.id}>
                            <Link to={{
                                pathname:`/${coin.id}`,
                                state: { name: coin.name},
                            }}>
                                <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}/>
                                {coin.name} &rarr;
                            </Link>
                        </Coin>
                    )}
                </CoinList>
            )}
        </Container>
    )
}

export default Coins;