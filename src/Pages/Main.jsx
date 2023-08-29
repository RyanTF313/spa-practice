const mainStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export default function Main() {
  return (
    <>
      <div className="main" style={mainStyle}>
        <h1>Welcome to Crypto Prices!</h1>
        <p>Clicking on Currencies will allow you to view a list of currencies.</p>
        <p>Clicking on Crypto Prices will bring you to back here.</p>
      </div>
    </>
  );
}
