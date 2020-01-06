import React from "react";
import GaugeChart from 'react-gauge-chart'

const Result = ({ score, playAgain }) => (
  <div className="score-board">
    <div className="score">

    <GaugeChart id="gauge-chart5"
  nrOfLevels={420}
  arcsLength={[0.3, 0.5, 0.2]}
  colors={['#5BE12C', '#F5CD19', '#EA4228']}
  percent={{score}/15*100}
  arcPadding={0.02}
/>
      Your Reliability score is {score} / 15
    </div>
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
  </div>
);

export default Result;
