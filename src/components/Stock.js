import React from "react";

function Stock({ stocks, setStocks, setPort, port, handleClick }) {
  const stockList = stocks.map((e) => {
    return (
      <div key={e.id} onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{e.name}</h5>
          <p className="card-text">{e.price}</p>
        </div>
      </div>
    </div>
    )
  })
  return stockList
}

export default Stock;