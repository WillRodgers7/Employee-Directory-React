import React from "react";
import HomePage from "./components/HomePage";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <HomePage />
      </Wrapper>
    </div>
  );
}

export default App;
