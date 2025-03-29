import { _useState } from "react";
import Home from "./components/Home";
import "./App.css";
import Money from "./components/Money";

function App() {
  return (
    <>
      <Home />
      <footer style={{fontFamily: "sans-serif", marginTop: "20px", marginBottom: "30px"}}>© Lucas Yamada</footer>
    </>
  );
}

export default App;
