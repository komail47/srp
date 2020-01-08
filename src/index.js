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
      res: "",
      ans: "",
      finalScore: 0
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
    let res = "low";

    if (this.state.finalScore >= 12) {
      res = "High Reliable - You can count on me";
    }
    if (this.state.finalScore < 12 && this.state.finalScore >= 9) {
      res = "Reliable - But there is scope of improvement";
    }
    if (this.state.finalScore < 9 && this.state.finalScore >= 4) {
      res = "Low Reliable - Educate yourself on how to improve";
    }

    this.setState({
      res: res
    });
  };
  //end condition checker
  playAgain = () => {
    this.getQuestion();
    this.setState({
      score: 0,
      responses: 0,
      res: "",
      answer: "",
      finalScore: 0
    });
  };
  //end playAgain
  async postFinalScore() {
    try {
      let result = await fetch(
        "http://api.ehsweek.com/api/srp/result/",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            finalScore: this.state.finalScore
            
          })
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
  //end post

  async postQuestion() {
    try {
      let result = await fetch(
        "http://webhook.site/f102deac-b67d-4c31-a6be-241d4894ce6e",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            question: this.questionBank.question
          })
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
  //end post
  async postAnswer(ans, val, question) {
    try {
      let result = await fetch(
        "http://api.ehsweek.com/api/srp/response/",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            answer: ans,
            score: val,
            question: question
          })
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
  //end post

  computeAnswer = (answer, answerValue, question) => {
    this.setState({ score: this.state.score });
    console.log("score" + this.state.score);
    this.setState({
      finalScore: parseInt(this.state.finalScore + answerValue)
    });
    this.postAnswer(answer, answerValue, question);

    console.log("COMPUTE ANSWER TEXT: " + answer);
    //console.log(answerValue);

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
  componentDidUpdate() {
    console.log("final score" + this.state.finalScore);

    console.log("score" + this.state.score);
    if (this.state.responses == 5) {

      this.postFinalScore();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="title">
            {" "}
            <img className="bapco_logo" src={Bapco_logo} alt="bapco logo" />
            AM I RELIABLE?
            <img src={ehs_logo} alt="ehs logo" />
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
                finalAnswer={this.postFinalScore}
              />
            )
          )}

        {this.state.responses === 5 ? (
          <Result
            FinalScore={this.state.finalScore}
            playAgain={this.playAgain}
            res={this.state.res}
          />
        ) : null}
      </div>
    );
  }
}

ReactDOM.render(<SRP_EHS />, document.getElementById("root"));
