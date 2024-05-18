import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import TicTacToe from "./component/tictactoe/TicTacToe.jsx";
import TileMatching from "./component/tilematching/TileMatching.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TicTacToe />
  </React.StrictMode>
);
