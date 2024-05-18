import { useState } from "react";
import styles from "./TicTacToe.module.css";

function checkWinner(board) {
  // Check rows
  for (let i = 0; i < 9; i += 3) {
    if (
      board[i] !== "-" &&
      board[i] === board[i + 1] &&
      board[i] === board[i + 2]
    ) {
      return board[i];
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      board[i] !== "-" &&
      board[i] === board[i + 3] &&
      board[i] === board[i + 6]
    ) {
      return board[i];
    }
  }

  // Check diagonals
  if (board[0] !== "-" && board[0] === board[4] && board[0] === board[8]) {
    return board[0];
  }
  if (board[2] !== "-" && board[2] === board[4] && board[2] === board[6]) {
    return board[2];
  }

  // If no winner, return null
  return null;
}

const TicTacToe = () => {
  const [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");

  const handleClick = (i) => {
    // creating temp state value
    if (arr[i] === "") {
      const tempArr = [...arr];
      tempArr[i] = player;
      setArr(tempArr);

      if (player === "X") {
        setPlayer("O");
      } else {
        setPlayer("X");
      }
      setTimeout(() => {
        if (arr.filter((val) => Boolean(val)).length >= 5) {
          const result = checkWinner(tempArr);
          if (result) {
            alert(`Winner is ${result}`);
          }
        }
      }, 0);
    }
  };

  return (
    <div className={styles["board-outter"]}>
      <div className={styles.board}>
        {arr.map((val, i) => (
          <button key={i} onClick={() => handleClick(i)} className={styles.box}>
            {val}
          </button>
        ))}
        <div
          className={`${styles["line"]} ${styles["line-vertical"]} ${styles["line-one"]}`}
        ></div>
        <div
          className={`${styles["line"]} ${styles["line-vertical"]} ${styles["line-two"]}`}
        ></div>
        <div
          className={`${styles["line"]} ${styles["line-horizontal"]} ${styles["line-three"]}`}
        ></div>
        <div
          className={`${styles["line"]} ${styles["line-horizontal"]} ${styles["line-four"]}`}
        ></div>
      </div>
    </div>
  );
};

export default TicTacToe;
