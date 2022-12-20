import React from "react";

function History({ history, handleHistory, handleRestart }) {
  // console.log(history);
  return (
    <div className="history">
      <h4>History</h4>
      <ul>
        <li>
          <button onClick={() => handleRestart()}>Go to game start</button>
        </li>
        {history.map((item, index) => {
          return (
            <li key={item.id}>
              <button onClick={() => handleHistory(index)}>
                Go to move #{index}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;
