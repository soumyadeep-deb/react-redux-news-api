import { useState } from "react";
import "./App.css";
import DropdownMenu from "./features/dropdownMenu/DropdownMenu";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const category = useSelector((state) => state.menu.category);

  return (
    <div className="App">
      <DropdownMenu />
      <h1>
        https://newsapi.org/v2/top-headlines/sources?{category}
        apiKey=03040e2bb8f04361beda92c70cfb1db5
      </h1>
    </div>
  );
}

export default App;
