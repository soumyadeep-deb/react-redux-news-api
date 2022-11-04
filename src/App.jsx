import { useState } from "react";
import "./App.css";
import DropdownMenu from "./features/dropdownMenu/DropdownMenu";
import { useSelector, useDispatch } from "react-redux";
import { NewsView } from "./features/news/NewsView";

function App() {
  const category = useSelector((state) => state.menu.category);

  return (
    <div className="App">
      <DropdownMenu />
      <h2>
        https://newsapi.org/v2/top-headlines/sources?{category}
        apiKey=03040e2bb8f04361beda92c70cfb1db5
      </h2>
      <NewsView />
    </div>
  );
}

export default App;
