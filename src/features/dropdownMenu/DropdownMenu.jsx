import React from "react";
import "./dropdownMenu.css";
import { useSelector, useDispatch } from "react-redux";
import { slected } from "./dropdownMenuSlice";
import { useState } from "react";

function DropdownMenu() {
  const category = useSelector((state) => state.menu.category);
  const dispatch = useDispatch();

  let categories = [
    "",
    "business",
    "health",
    "sports",
    "entertainment",
    "general",
    "science",
    "technology",
  ];

  return (
    <div className="dropdownMenu">
      <button className="dropbtn">Select News</button>
      <div className="dropdown-content">
        {categories.map((cat) => (
          <div
            className="dropdownMenu__items"
            onClick={() => {
              dispatch(slected(cat));
            }}
          >
            {cat ? cat : "All"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
