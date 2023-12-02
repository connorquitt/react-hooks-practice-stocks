import React from "react";

function SearchBar({ setStocks, stocks }) {

  function handleChange(event){
    if(event.target.value === "Alphabetically"){
      const alphabetically = (stocks.sort(function(a, b){
        if(a.name < b.name){
          return -1
        }else if(a.name > b.name){
          return 1
        }else{
          return 0
        }
      }))
      return alphabetically
    }else if(event.target.value === "Price"){
      const price = stocks.sort(function(a, b){
        if(a.price < b.price){
          return -1
        }else if(a.price > b.price){
          return 1
        }else{
          return 0
        }
      })
      return price
    }
    return setStocks(stocks)
  }
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={handleChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handleChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
