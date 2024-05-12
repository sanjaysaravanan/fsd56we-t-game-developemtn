import { useState } from "react";
import "./App.css";

function App() {
  const [pos, setPos] = useState({
    top: 200,
    left: 200,
  });

  const moveFn = (m) => {
    let tempPos = { ...pos };

    switch (m) {
      case "top":
        if (tempPos.top !== 0) {
          tempPos = {
            ...tempPos,
            top: tempPos.top - 200,
          };
        }
        break;
      case "bottom":
        if (tempPos.top !== 400) {
          tempPos = {
            ...tempPos,
            top: tempPos.top + 200,
          };
        }
        break;
      case "left":
        if (tempPos.left !== 0) {
          tempPos = {
            ...tempPos,
            left: tempPos.left - 200,
          };
        }
        break;
      case "right":
        if (tempPos.left !== 400) {
          tempPos = {
            ...tempPos,
            left: tempPos.left + 200,
          };
        }
        break;
    }

    setPos(tempPos);
  };

  return (
    <>
      <div
        style={{
          height: "600px",
          width: "600px",
          position: "relative",
          border: "1px solid black",
        }}
      >
        <div
          style={{
            height: 200,
            width: 200,
            position: "absolute",
            top: pos.top,
            left: pos.left,
            backgroundColor: "blue",
          }}
        ></div>
      </div>
      <button onClick={() => moveFn("top")}>Top</button>
      <button onClick={() => moveFn("left")}>Left</button>
      <button onClick={() => moveFn("right")}>Right</button>
      <button onClick={() => moveFn("bottom")}>Bottom</button>
    </>
  );
}

export default App;
