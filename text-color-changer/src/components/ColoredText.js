import React, { Component } from "react";

class ColoredText extends Component {
  render() {
    return <span className={this.props.color}>{this.props.label}</span>;
  }
}

export default ColoredText;
