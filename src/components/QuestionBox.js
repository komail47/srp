import React, { useState } from "react";
import Answer from "./Answer.jsx";

const QuestionBox = ({ question, options, computeAnswer, values, finalAnswer }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            let value = values[index];
            setAnswer([text]);
            computeAnswer(text, value, question);
            
          }}
        >
          {text}
        </button>
        //<Answer text={text} selected={selected} options={options} />
      ))}
    </div>
  );
};

export default QuestionBox;
