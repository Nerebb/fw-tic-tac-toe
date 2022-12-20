import React, { useState, useEffect } from "react";
import Board from "./Board";
import History from "./History";

function Game() {
  const [squares, setSquares] = useState(
    Array(9)
      .fill(null)
      .map((i, index) => (i = { id: index, player: null }))
  );
  const [history, setHistory] = useState([]);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  //Declaring a Winner
  useEffect(() => {
    setWinner(calculateWinner(squares));
  }, [xIsNext, squares, history]);

  //function to check if a player has won.
  //If a player has won, we can display text such as “Winner: X” or “Winner: O”.
  //Input: squares: given an array of 9 squares:'X', 'O', or null.
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a].player &&
        squares[a].player === squares[b].player &&
        squares[a].player === squares[c].player
      ) {
        return squares[a].player;
      }
    }
    return null;
  };

  //Handle player
  const handleClick = (i, e) => {
    //Check if game end
    if (winner) {
      return e.preventDefault();
    }
    //Push to Array
    if (!squares[i.id].player) {
      squares[i.id].player = xIsNext ? "X" : "O";
      history.push(squares[i.id]);
    }
    //Switch player
    setXIsNext(!xIsNext);
  };

  //Handle history
  const handleHistory = (i) => {
    const curHis = history.filter((item) => !history.slice(i).includes(item));
    squares.map((item) =>
      !curHis.includes(item) ? (item.player = null) : item
    );

    curHis.length % 2 === 0 ? setXIsNext(true) : setXIsNext(false);
    setHistory(curHis);
  };
  //Restart game
  const handlRestart = () => {
    setSquares(
      Array(9)
        .fill(null)
        .map((i, index) => (i = { id: index, player: null }))
    );
    setHistory([]);
    setWinner(null);
    setXIsNext(true);
  };

  return (
    <div className="main">
      <h2 className="result">Winner is: {winner ? winner : "N/N"}</h2>
      <div className="game">
        <span className="player">Next player is: {xIsNext ? "X" : "O"}</span>
        <div className="gameContainer">
          <Board squares={squares} handleClick={handleClick} />
          <History
            history={history}
            handleHistory={handleHistory}
            handleRestart={handlRestart}
          />
        </div>
      </div>
      <button onClick={() => handlRestart()} className="restart-btn">
        Restart
      </button>
    </div>
  );
}

export default Game;
