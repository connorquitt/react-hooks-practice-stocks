import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({setStocks, stocks}) {
  const [port, setPort] = useState([])
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
