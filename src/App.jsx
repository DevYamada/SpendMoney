import { useState } from "react";
import Home from "./components/Home";
import "./App.css";
import Money from "./components/Money";

function App() {
  return (
    <>
    <input type="button" value="Reset" className="btn btn-success" onClick={(e) => {localStorage.setItem('money', 300000000000)}} />
      <Home />
    </>
  );
}

export default App;
