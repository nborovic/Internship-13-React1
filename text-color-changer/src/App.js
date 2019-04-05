import React, { Component } from "react";
import ColoredText from "./components/ColoredText";
import "./components/colored-text.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "black",
      labels: [{ active: false }, { active: false }, { active: false }]
    };
  }

  setColor = newColor => {
    if (newColor === this.state.color) newColor = "black";

    this.setState({
      color: newColor,
      labels: this.state.labels
    });
  };

  setLabel = newText => {
    let labelsCopy = this.state.labels;
    labelsCopy[newText].active = labelsCopy[newText].active ? false : true;

    this.setState({
      color: this.state.color,
      labels: labelsCopy
    });
  };

  render() {
    return (
      <div className="color-changer">
        <h1>Indexes</h1>
        <span
          className={`c-pointer ${
            this.state.color === "red" ? "fw-900" : "fw-400"
          }`}
          onClick={() => this.setColor("red")}
        >
          Red
        </span>
        <span
          className={`c-pointer ${
            this.state.color === "blue" ? "fw-900" : "fw-400"
          }`}
          onClick={() => this.setColor("blue")}
        >
          Blue
        </span>
        <span
          className={`c-pointer ${
            this.state.color === "green" ? "fw-900" : "fw-400"
          }`}
          onClick={() => this.setColor("green")}
        >
          Green
        </span>

        <h1>Colors</h1>
        <span
          className={`c-pointer ${
            this.state.labels[0].active ? "fw-900" : "fw-400"
          }`}
          onClick={() => this.setLabel(0)}
        >
          1
        </span>
        <span
          className={`c-pointer ${
            this.state.labels[1].active ? "fw-900" : "fw-400"
          }`}
          onClick={() => this.setLabel(1)}
        >
          2
        </span>
        <span
          className={`c-pointer ${
            this.state.labels[2].active ? "fw-900" : "fw-400"
          }`}
          onClick={() => this.setLabel(2)}
        >
          3
        </span>

        <h1>Result</h1>
        <ColoredText
          color={
            this.state.labels[0].active ? `c-${this.state.color}` : "c-black"
          }
          label="1"
        />
        <ColoredText
          color={
            this.state.labels[1].active ? `c-${this.state.color}` : "c-black"
          }
          label="2"
        />
        <ColoredText
          color={
            this.state.labels[2].active ? `c-${this.state.color}` : "c-black"
          }
          label="3"
        />
      </div>
    );
  }
}

export default App;
