import { Route, Routes } from "react-router-dom";
import Currencies from "./Pages/Currencies";
import Main from "./Pages/Main";
import Price from "./Pages/Price";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/currencies" element={<Currencies />} />
          <Route path="/price/:symbol" element={<Price/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
