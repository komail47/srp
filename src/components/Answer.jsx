import React, { Component, useState } from "react";

export default class Answer extends Component {
  render() {
    let text = this.props.text;
    let selected = this.props.selected;
    const [setAnswer] = useState(this.props.options);

    return (
      <button
        key={this.props.index}
        className="answerBtn"
        onClick={() => {
          setAnswer([text]);
          // setValue([value])
          selected(this.props.text);
        }}
      >
        {text}
      </button>
    );
  }
}
