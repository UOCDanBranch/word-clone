import React from "react";
import { range } from "../../utils";

function Cell({ letter, status }) {
  let classes = status ? `cell ${status}` : "cell";

  return <span className={classes}>{letter}</span>;
}

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <Cell
          key={index}
          letter={guess ? guess[index].letter : undefined}
          status={guess ? guess[index].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
