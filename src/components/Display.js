import React from "react";
import Keypad from "./Keypad";
import "./Display.css";

class Display extends React.Component {
  constructor() {
    super();
    this.state = {
      initial: true,
      prevNum: 0,
      currentNum: "",
      display: 0,
      operator: "",
      operatorCount: 0,
    };
  }

  handleClear = () => {
    this.setState({
      initial: true,
      prevNum: 0,
      currentNum: "",
      display: 0,
      operator: "",
      operatorCount: 0,
    });
  };

  handleNum = (event) => {
    let { initial, currentNum } = this.state;
    let num = event.target.value;
    if (initial) {
      this.setState({
        initial: false,
        currentNum: num,
        display: num,
      });
    } else {
      this.setState({
        currentNum: (currentNum += num),
        display: currentNum,
      });
    }
  };

  handleNegPos = () => {
    let { currentNum, display } = this.state;
    this.setState({ currentNum: currentNum * -1, display: display * -1 });
  };

  handlePercentage = () => {
    let { currentNum, display } = this.state;
    this.setState({ currentNum: currentNum / 100, display: display / 100 });
  };

  handleOperator = (event) => {
    let { operator, prevNum, currentNum, operatorCount } = this.state;

    this.setState({
      operator: event.target.value,
      prevNum: currentNum,
      currentNum: "",
      operatorCount: ++operatorCount,
    });

    if (operatorCount > 1 && operatorCount !== "=") {
      this.handleEvaluation(currentNum, prevNum, operator);
    }
  };

  handleEquals = () => {
    let { currentNum, prevNum, operator } = this.state;
    this.handleEvaluation(currentNum, prevNum, operator);
  };

  handleEvaluation = (currentNum, prevNum, operator) => {
    switch (operator) {
      case "+":
        let sum = Number(prevNum) + Number(currentNum);
        this.setState({ prevNum: sum, currentNum: "", display: sum });
        break;
      case "-":
        let subtraction = Number(prevNum) - Number(currentNum);
        this.setState({
          prevNum: subtraction,
          currentNum: "",
          display: subtraction,
        });
        break;
      case "/":
        let division = Number(prevNum) / Number(currentNum);
        this.setState({ prevNum: division, currentNum: "", display: division });
        break;
      case "*":
        let multiplication = Number(prevNum) * Number(currentNum);
        this.setState({
          prevNum: multiplication,
          currentNum: "",
          display: multiplication,
        });
        break;
      default:
        break;
    }
  };

  render() {
    let display = Number(this.state.display).toLocaleString("en-US");
    return (
      <div className="calculator">
        <div className="display">{display}</div>
        <Keypad
          handleClear={this.handleClear}
          handleOperator={this.handleOperator}
          handleNum={this.handleNum}
          handleEquals={this.handleEquals}
          handleNegPos={this.handleNegPos}
          handlePercentage={this.handlePercentage}
        />
      </div>
    );
  }
}

export default Display;
