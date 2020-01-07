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
      res: String,
      ans: ""
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
    //     let st1 = "Low";
    //     let st2 = "Low Reliable - Educate yourself on how to improve";
    //     let st3 = "Reliable - But there is scope of improvement";
    //     let st4 = "High Reliable - You can count on me";

    //     switch(this.state.score){
    // case 1:this.state.res = st1;
    // case 2:this.state.res = st1;
    // case 3:this.state.res = st1;
    // case 4:this.state.res = st2;
    // case 5:this.state.res = st2;
    // case 6:this.state.res = st2;
    // case 7:this.state.res = st2;
    // case 8:this.state.res = st3;
    // case 9:this.state.res = st3;
    // case 10:this.state.res = st3;
    // case 12:this.state.res = st4;
    // case 13:this.state.res = st4;
    // case 14:this.state.res = st4;
    // case 15:this.state.res = st4;

    //     }
    if (this.state.score >= 12) {
      this.state.res = "High Reliable - You can count on me";
    } else if (this.state.score < 12 && this.state.score >= 9) {
      this.state.res = "Reliable - But there is scope of improvement";
    } else if (this.state.score < 9 && this.state.score >= 4) {
      this.state.res = "Low Reliable - Educate yourself on how to improve";
    } else this.state.res = "low";
  };
  //end condition checker
  playAgain = () => {
    this.getQuestion();
    this.setState({
      score: 0,
      responses: 0,
      res: String,
      answer: ""
    });
  };
  //end playAgain
  // async postScore() {
  //   try {
  //     let result = await fetch(
  //       "https://webhook.site/d8a3364c-dfa1-4ddd-a79b-4ce1dc34ead3",
  //       {
  //         method: "post",
  //         mode: "no-cors",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-type": "application/json"
  //         },
  //         body: JSON.stringify({
  //           score: this.state.score,
  //           email: "gmail"
  //         })
  //       }
  //     );
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }
  //end post
  async postAnswer(ans, val) {
    try {
      let result = await fetch(
        "https://webhook.site/a2b11cd0-6c73-4efa-bc10-05843eca4344",
        {
          method: "post",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            answer: ans,
            score: this.state.score,
          })
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
  //end post

  computeAnswer = (answer, answerValue) => {
    this.setState({ score: parseInt(this.state.score + answerValue) });
    this.postAnswer(answer,answerValue );
    
    console.log("COMPUTE ANSWER TEXT: " + answer);
    //console.log(answerValue);

    console.log(this.state.score);
    this.checkRes();

    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    });

    //TODO: Create C# WEB API

    //TODO: Connect react to the WEB API
  };

  componentDidMount() {
    this.getQuestion();
  }
  componentDidUpdate() {
   
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
              />
            )
          )}

        {this.state.responses === 5
          ?  (
              <Result
                score={this.state.score}
                playAgain={this.playAgain}
                res={this.state.res}
              />
            )
          : null}
      </div>
    );
  }
}

ReactDOM.render(<SRP_EHS />, document.getElementById("root"));
