import React from "react";

const keyValues = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Key({ status, children }) {
  let classes = status ? `key ${status}` : "key";

  return <span className={classes}>{children}</span>;
}

function Keyboard({ guesses }) {
  let letterStatus = {};
  guesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      letterStatus[letter] = status;
    });
  });

  return (
    <div className="keyboard">
      {keyValues.map((row, index) => {
        return (
          <div key={index} className="keyrow">
            {row.map((letter) => {
              return (
                <Key key={letter} status={letterStatus[letter] || ""}>
                  {letter}
                </Key>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
