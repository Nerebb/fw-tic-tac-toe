import React from "react";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
          {squares.map((item) =>
            item.id < 3 ? (
              <div
                key={item.id.toString()}
                className="square"
                onClick={(e) => handleClick(item, e)}
              >
                {item.player ? item.player : <></>}
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="board-row">
          {squares.map((item) =>
            item.id >= 3 && item.id < 6 ? (
              <div
                key={item.id.toString()}
                className="square"
                onClick={(e) => handleClick(item, e)}
              >
                {item.player ? item.player : <></>}
              </div>
            ) : (
              ""
            )
          )}
        </div>
        <div className="board-row">
          {squares.map((item) =>
            item.id >= 6 && item.id < 9 ? (
              <div
                key={item.id.toString()}
                className="square"
                onClick={(e) => handleClick(item, e)}
              >
                {item.player ? item.player : <></>}
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
}
