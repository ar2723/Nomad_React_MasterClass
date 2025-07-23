import {Link} from "react-router-dom";
import {Container, Loader, Title, Header, Coin, CoinList, Img} from "../component/Layout";
import {fetchCoins} from "../api/api";
import {useQuery} from "@tanstack/react-query";
import {ICoin} from "../interface/coinInterface";
import React from "react";
import {Helmet} from "react-helmet-async";
import {useSetRecoilState} from "recoil";
import {isDarkAtom} from "../atoms";

const Coins = () => {
    const setDartAtom = useSetRecoilState(isDarkAtom);
    const toggleDarkAtom = () => setDartAtom(prev => !prev);
    // react-query hook
    // 불러온 데이터를 캐시에 저장해두기 때문에 다른 페이지를 갔다와도 다시 로딩이 되지 않음
    const { isLoading, data } = useQuery<ICoin[]>({ queryKey: ["allCoins"], queryFn: fetchCoins });

    return (
        <Container>
            <Helmet><title>코인</title></Helmet>
            <Header>
                <Title>코인</Title>
                <button onClick={toggleDarkAtom}>Toggle Mode</button>
            </Header>
            {isLoading ? (
                <Loader>"Loading..."</Loader>
            ) : (
                <CoinList>
                    {data?.slice(0, 100).map(coin =>
                        <Coin key={coin.id}>
                            <Link to={{pathname:`/${coin.id}`, state: {name: coin.name}}}>
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