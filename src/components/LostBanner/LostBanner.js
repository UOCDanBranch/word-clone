import React from "react";
import Banner from "../Banner/Banner";

function LostBanner({ answer, initialise }) {
  return (
    <Banner status="sad" action={initialise} actionText="I'll get it next time! 💪">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>
      </p>
    </Banner>
  );
}

export default LostBanner;
