import { Link } from "react-router-dom";

const currStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
};
const msgStyle = { flexBasis: "100%", textAlign: "center", fontSize: "18px" };
const linkStyle = {
  display: "flex",
  flexBasis: "50%",
  textDecoration: "none",
  color: "inherit",
  alignSelf: "center",
};
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

export default function Currencies() {
  return (
    <div className="currencies" style={currStyle}>
      <p style={msgStyle}>
        Clicking on a currencies will show you it&lsquo;s current value
      </p>
      {currencies.map((coin, i) => {
        const { name, symbol } = coin;

        return (
          <Link to={`/price/${symbol}`} key={i} style={linkStyle}>
            <h2 style={{width: '100%', textAlign: 'center'}}>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
