import styled from "styled-components";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {Container, Loader, Title, Header, Coin, CoinList} from "../common/Layout";
import {ICoinInterface} from "../interface/CoinInterface";

const Img = styled.img`
    width: 35px;
    height: 35px;
    margin-right: 10px;
`;

const Coins = () => {
    const [coins, setCoins] = useState<ICoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async() => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0, 100));
            setLoading(false);
        })();
    }, [])
    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {loading ? (
                <Loader>"Loading..."</Loader>
            ) : (
                <CoinList>
                    {coins.map(coin =>
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