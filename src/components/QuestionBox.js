import React, { useState } from "react";

const QuestionBox = ({ question, options, selected, val }) => {
  const [answer, setAnswer] = useState(options);
  // const [value, setValue] = useState(options);
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            // setValue([value])
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
