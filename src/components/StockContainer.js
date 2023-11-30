import React, {useEffect} from "react";
import Stock from "./Stock";

function StockContainer({ setStocks, stocks, setPort, port }) {
  function handleClick(event){
    console.log("ive been clicked")
    //moves stock to portfolio
    const portStock = stocks.filter((e) => e.name === event.target.textContent)
    setPort(port.concat(portStock))
    //removes stock from stocks
    const updateStocks = stocks.filter((e) => e.name != event.target.textContent)
    setStocks(updateStocks)
  }

  return (
    <div>
      <h2>Stocks</h2>
      {<Stock setStocks={setStocks} stocks={stocks} setPort={setPort} port={port} handleClick={handleClick}/>}
    </div>
  );
}

export default StockContainer;