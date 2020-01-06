import React, { useState } from "react";
import Answer from "./Answer.jsx";

const QuestionBox = ({ question, options, computeAnswer, values }) => {
  const [answer, setAnswer] = useState(options);
  const [valueObj, setValue] = useState(options);
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
            setValue(value);
            computeAnswer(text, value);
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
