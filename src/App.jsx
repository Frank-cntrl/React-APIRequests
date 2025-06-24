import React from "react";
import { createRoot } from "react-dom/client";
// import axios from "axios"; // Maybe we'll need axios? 🤔
import "./style.css";
import GifList from "./trendingSearch";
import SearchField from "./SearchField";
import RandomGif from "./randomSearch";
import GifCard from "./GifCard";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Let's Make Some API Requests!</h1>
      <SearchField />
      <RandomGif />
      <GifList />
    </div>
  );
};

// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);
