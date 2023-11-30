import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, port, setStocks, setPort }) {
  function handleClick(event){
    //moves port to stock
    const updateStocks = port.filter((e) => e.name === event.target.textContent)
    setStocks(stocks.concat(updateStocks))
    //removes stock from port
    const updatedPort = port.filter((e) => e.name != event.target.textContent)
    setPort(updatedPort)
    
  }
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        <Stock stocks={port} handleClick={handleClick}/>
      }
    </div>
  );
}

export default PortfolioContainer;
