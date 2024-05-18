import { useReducer } from "react";
import "./App.css";

const initialState = {
  top: 200,
  left: 200,
};

const moveReducer = (state = initialState, action) => {
  switch (action) {
    case "top":
      if (state.top !== 0) {
        return {
          ...state,
          top: state.top - 200,
        };
      }
      break;
    case "bottom":
      if (state.top !== 400) {
        return {
          ...state,
          top: state.top + 200,
        };
      }
      break;
    case "left":
      if (state.left !== 0) {
        return {
          ...state,
          left: state.left - 200,
        };
      }
      break;
    case "right":
      if (state.left !== 400) {
        return {
          ...state,
          left: state.left + 200,
        };
      }
      break;
    case "reset":
      return initialState;
    default:
      return state;
  }

  return state;
};

function App() {
  // const [pos, setPos] = useState({
  //   top: 400,
  //   left: 0,
  // });

  // const moveFn = (m) => {
  //   let tempPos = { ...pos };

  //   switch (m) {
  //     case "top":
  //       if (tempPos.top !== 0) {
  //         tempPos = {
  //           ...tempPos,
  //           top: tempPos.top - 200,
  //         };
  //       }
  //       break;
  //     case "bottom":
  //       if (tempPos.top !== 400) {
  //         tempPos = {
  //           ...tempPos,
  //           top: tempPos.top + 200,
  //         };
  //       }
  //       break;
  //     case "left":
  //       if (tempPos.left !== 0) {
  //         tempPos = {
  //           ...tempPos,
  //           left: tempPos.left - 200,
  //         };
  //       }
  //       break;
  //     case "right":
  //       if (tempPos.left !== 400) {
  //         tempPos = {
  //           ...tempPos,
  //           left: tempPos.left + 200,
  //         };
  //       }
  //       break;
  //   }

  //   setPos(tempPos);
  // };

  const [pos, dispatch] = useReducer(moveReducer, initialState);

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
      {/* <button onClick={() => moveFn("top")}>Top</button>
      <button onClick={() => moveFn("left")}>Left</button>
      <button onClick={() => moveFn("right")}>Right</button>
      <button onClick={() => moveFn("bottom")}>Bottom</button> */}
      <button onClick={() => dispatch("top")}>Top</button>
      <button onClick={() => dispatch("left")}>Left</button>
      <button onClick={() => dispatch("right")}>Right</button>
      <button onClick={() => dispatch("bottom")}>Bottom</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
}

export default App;
