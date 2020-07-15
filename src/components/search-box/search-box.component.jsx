import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ searchMonster }) => {
  return (
    <div>
      <input className="search" type="search" placeholder="search monster" onChange={searchMonster} />
    </div>
  );
};
