import React from "react"
import "./Keypad.css"

class Keypad extends React.Component {
  
  render() {
    return (
      <div className="keypad">
        <button type="button" className="calc clear" onClick={this.props.handleClear}>AC</button>
        <button type="button" className="calc neg" value="+/-" onClick={this.props.handleNegPos}>+/-</button>
        <button type="button" className="calc percent" value="%" onClick={this.props.handlePercentage}>%</button>
        <button type="button" className="calc operator" value="/" onClick={this.props.handleOperator}>÷</button>
        <button type="button" className="calc number" value="7" onClick={this.props.handleNum}>7</button>
        <button type="button" className="calc number" value="8" onClick={this.props.handleNum}>8</button>
        <button type="button" className="calc number" value="9" onClick={this.props.handleNum}>9</button>
        <button type="button" className="calc operator" value="*" onClick={this.props.handleOperator}>x</button>
        <button type="button" className="calc number" value="4" onClick={this.props.handleNum}>4</button>
        <button type="button" className="calc number" value="5" onClick={this.props.handleNum}>5</button>
        <button type="button" className="calc number" value="6" onClick={this.props.handleNum}>6</button>
        <button type="button" className="calc operator" value="-" onClick={this.props.handleOperator}>-</button>
        <button type="button" className="calc number" value="1" onClick={this.props.handleNum}>1</button>
        <button type="button" className="calc number" value="2" onClick={this.props.handleNum}>2</button>
        <button type="button" className="calc number" value="3" onClick={this.props.handleNum}>3</button>
        <button type="button" className="calc operator" value="+" onClick={this.props.handleOperator}>+</button>
        <button type="button" className="calc number zero" value="0" onClick={this.props.handleNum}>0</button>
        <button type="button" className="calc decimal" value="." onClick={this.props.handleNum}>.</button>
        <button type="button" className="calc equals" value="=" onClick={this.props.handleEquals}>=</button>
      </div>
    );
  }
}

export default Keypad;
