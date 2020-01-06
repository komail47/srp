import React, { Component } from "react";
import ReactDOM from "react-dom";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";
import "./assets/style.css";
import Bapco_logo from "../src/assets/Bapco_logo.png";
import ehs_logo from "../src/assets/ehs_logo.png";
class SRP_EHS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      score: 0,
      responses: 0,
      res: String
    };

    this.computeAnswer = this.computeAnswer.bind(this);
  }

  getQuestion = () => {
    quizService().then(question => {
      this.setState({
        questionBank: question
      });
    });
  };

  checkRes = () => {
    if (this.state.score >= 12) {
      this.state.res = "high";
    } else if (this.state.score < 12 & this.state.score >= 8) {
      this.state.res = "mid";}
      else if (this.state.score < 12 & this.state.score >= 8) {
        this.state.res = "mid";
    } else this.state.res = "low";
  };

  playAgain = () => {
    this.getQuestion();
    this.setState({
      score: 0,
      responses: 0
    });
  };
  async postData() {
    try {
      let result = await fetch(
        "https://webhook.site/ca3de149-ba73-4906-bc17-91e45f468038",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            score: this.state.score,
            email: "gmail"
          })
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
  computeAnswer = (answer, answerValue) => {
    this.setState({ score: parseInt(this.state.score + answerValue) });
    console.log("COMPUTE ANSWER TEXT: " + answer);
    console.log(answerValue);
    console.log(this.state.score);
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    });

    this.checkRes();

    //TODO: Create C# WEB API
    //TODO: Connect react to the WEB API
  };

  componentDidMount() {
    this.getQuestion();
    
  }
componentDidUpdate(){
  this.postData();
}
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="title">
            {" "}
            <img className="bapco_logo" src={Bapco_logo} alt="bapco logo" />
            AM I RELIABLE?
            <img src={ehs_logo} alt="ehs logo"/>
          </div>
        </div>
        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, values, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                values={values}
                key={questionId}
                computeAnswer={this.computeAnswer}
              />
            )
          )}

        {this.state.responses === 5 ? (
          <Result
            score={this.state.score}
            playAgain={this.playAgain}
            res={this.state.res}
          />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<SRP_EHS />, document.getElementById("root"));
