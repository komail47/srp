import React, { Component } from "react";
import ReactDOM from "react-dom";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";
import "./assets/style.css";
import Bapco_logo from "../src/assets/Bapco_logo.png";
import ehs_logo from "../src/assets/ehs_logo.png";
class SRP_EHS extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0
  };
  getQuestion = () => {
    quizService().then(question => {
      this.setState({
        questionBank: question
      });
    });
  };

  playAgain = () => {
    this.getQuestion();
    this.setState({
      score: 0,
      responses: 0
    });
  };
  computeAnswer = ( val) => {
    this.setState({ score: parseInt(this.state.score + val) });
console.log(val);
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    });
  };

  componentDidMount() {
    this.getQuestion();
  }
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="title">
            {" "}
            <img className="bapco_logo" src={Bapco_logo} />
            AM I RELIABLE?
            <img src={ehs_logo} />
          </div>
        </div>
        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, val, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                values={val}
                key={questionId}
                selected={val => this.computeAnswer( val)}
              />
            )
          )}

        {this.state.responses === 5 ? (
          <Result score={this.state.score} playAgain={this.playAgain} />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<SRP_EHS />, document.getElementById("root"));
