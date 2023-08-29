import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const currencies = [
  { name: "Bitcoin", symbol: "BTC" },
  { name: "Litecoin", symbol: "LTC" },
  { name: "Ethereum", symbol: "ETH" },
  { name: "Ethereum Classic", symbol: "ETC" },
  { name: "Stellar Lumens", symbol: "XLM" },
  { name: "Dash", symbol: "DASH" },
  { name: "Ripple", symbol: "XRP" },
  { name: "Zcash", symbol: "ZEC" },
];

export default function Price() {
  const apiKey = "6E89F208-99A1-43CE-91A3-17C5F41AE8FE";
  const { symbol } = useParams();
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;
  const [coin, setCoin] = useState("null");

  const getCoin = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getCoin();
  }, []);

  const loaded = () => {
    return (
      <div
        className="Coin"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{currencies.find((coin) => coin.symbol === symbol).name}</h1>
        <h3>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h3>
        <h3>{coin.rate}</h3>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return coin && coin.rate ? loaded() : loading();
}
