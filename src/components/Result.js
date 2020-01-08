import React from "react";
import GaugeChart from "react-gauge-chart";

const Result = ({ FinalScore, playAgain, res }) => (
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

    
        {res} {FinalScore}
      
    </div>
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
  </div>
);

export default Result;
