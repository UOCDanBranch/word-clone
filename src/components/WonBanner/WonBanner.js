import React from "react";
import Banner from "../Banner/Banner";

function WonBanner({ guesses, initialise }) {
  return (
    <Banner status="happy" action={initialise} actionText="One More Game 😅">
      <p>
        <strong>Congratulations!</strong>{' '}
        Got it in{' '}
        <strong>{guesses > 1 ? `${guesses} guesses` : "1 guess"}</strong>
      </p>
    </Banner>
  );
}

export default WonBanner;
