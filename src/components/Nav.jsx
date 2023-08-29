import { Link } from "react-router-dom";

const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    color: 'white',
    padding: '15px',
    fontSize: '2em',
  }
  
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  }

export default function Nav() {
  return (
    <div className="nav" style={navStyle}>
      <Link to="/" style={linkStyle}>
        <div>CRYPTO PRICES</div>
      </Link>
      <Link to="/currencies" style={linkStyle}>
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
}
