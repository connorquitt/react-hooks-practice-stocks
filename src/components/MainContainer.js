import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import App from "./App";

function MainContainer() {
  const [port, setPort] = useState([])
  const [stocks, setStocks] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(data => setStocks(data))
  }, [])

  useEffect(() => {
    console.log('ive been clicked')
  }, [SearchBar])
  
  return (
    <div>
      <SearchBar stocks={stocks} setStocks={setStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer setStocks={setStocks} stocks={stocks} setPort={setPort} port={port} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={stocks} port={port} setStocks={setStocks} setPort={setPort}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
