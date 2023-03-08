import React from "react";

function GuessInput({ processGuess, gameState }) {

  let [inputValue, setInputValue] = React.useState("");

  function processInput(event) {
    event.preventDefault();
    processGuess(inputValue);
    setInputValue("");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => processInput(event)}
    >

      <label htmlFor="guess-input">Enter guess:</label>

      <input
        required
        id="guess-input"
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value.toUpperCase())}
        pattern="[a-zA-Z]{5}"
        maxLength={5}
        minLength={5}
        title="5 letter word"
        disabled={!(gameState === 'playing')}
      />

    </form>
  );

}

export default GuessInput;
