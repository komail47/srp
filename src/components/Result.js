import React from "react";
import GaugeChart from "react-gauge-chart";

const Result = ({ FinalScore, playAgain, resInputted }) => {

let res = "low";

if (FinalScore >= 12) {
  res = "High Reliable - You can count on me";
}
if (FinalScore < 12 && FinalScore >= 8) {
  res = "Reliable - But there is scope of improvement";
}
if (FinalScore < 8 && FinalScore >= 4) {
  res = "Low Reliable - Educate yourself on how to improve";
}

  return (
    <div className="score-board">
      <div className="score">
        <GaugeChart
          id="gauge-chart4"
          nrOfLevels={4}
          colors={["#EA4228", "	#f55f19", "#F5CD19", "#5BE12C"]}
          hideText={true}
          percent={FinalScore / 15}
          arcPadding={0}
        />
        {res}
      </div>
      <button className="playBtn" onClick={playAgain}>
        Play again!
      </button>
    </div>
  );
};

export default Result;
