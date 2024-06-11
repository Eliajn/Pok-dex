import React from "react";
import "./PokeFilter.css";

const PokeFilter = () => {
  return (
    <>
      <div className="poke-filter-container">
        Poke-Filter
        <div className="filter-title">Name or Number</div>
        <div className="input-field">
          <input placeholder="enter" type="text" />
          <div>search icon</div>
        </div>
      </div>

      <div>Advance filtering</div>
    </>
  );
};

export default PokeFilter;
