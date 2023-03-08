import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import Keyboard from "../Keyboard/Keyboard";

function Game() {
  let [guesses, setGuesses] = React.useState([]);
  // playing | win | loss
  let [gameState, setGameState] = React.useState("playing");
  let [answer, setAnswer] = React.useState(() => sample(WORDS));

  // Initialise the game (also used to reset)

  function initialise() {
    // Generate new answer
    setAnswer(sample(WORDS));
    // Reset guesses
    setGuesses([]);
    // Reset game state
    setGameState("playing");
  }

  // Processing a new guess

  function processGuess(guess) {
    // Store in the guesses array in state
    let newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    // Check for victory/loss conditions
    // If all the letters are correct set gameState to 'win'
    if (guess === answer) {
      setGameState("win");
      return;
    }

    // Check for loss condition
    // If the number of guesses = max guesses set gameState to 'loss'
    if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameState("loss");
      return;
    }

    console.log({ answer });
  }

  let validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  // Component display

  return (
    <>
      <GuessList guesses={validatedGuesses} answer={answer} />
      <GuessInput processGuess={processGuess} gameState={gameState} />
      <Keyboard guesses={validatedGuesses} />
      {gameState === "win" && (
        <WonBanner guesses={guesses.length} initialise={initialise} />
      )}
      {gameState === "loss" && (
        <LostBanner answer={answer} initialise={initialise} />
      )}
    </>
  );
}

export default Game;
