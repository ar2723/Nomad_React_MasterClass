import {useEffect, useState} from "react";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [coinInfo, setCoinInfo] = useState({ price: 0, symbol: "" });
    const onChange = (e) => {
        const selectedCoin = coins.find(coin => coin.id === e.target.value);
        if (!selectedCoin) return;

        setCoinInfo({
            price: (20 / selectedCoin.quotes.USD.price).toFixed(4),
            symbol: selectedCoin.symbol,
        })
    }
    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
            .then(res => res.json())
            .then(data => {
                setCoins(data)
                setLoading(false);
            });
    }, [])
    return (
        <div>
            <hr/>
            <h1>The Coins! ({coins.slice(0, 100).length})</h1>
            {loading ? <strong>Loading...</strong> :
                <div>
                    <h2>You have $20</h2>
                    <select onChange={onChange}>
                        {coins.slice(0, 100).map((coin, index) => (
                            <option key={index} value={coin.id}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>
                        ))}
                    </select>
                    <div>
                        You have <input type="text" value={coinInfo.price} readOnly={true}/> {coinInfo.symbol}
                    </div>
                </div>
            }
        </div>
    )
}

export default App;