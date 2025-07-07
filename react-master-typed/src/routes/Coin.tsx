import {useParams} from "react-router";

const Coin = () => {

    interface RouteParams {
        coinId : string;
    }

    const { coinId } = useParams<RouteParams>();
    return <h1>Coin: {coinId}</h1>;
}

export default Coin;