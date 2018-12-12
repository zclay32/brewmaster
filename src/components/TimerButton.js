import React from "react";

export default class TimerButton extends React.Component {
  render() {
    return (
      <button
        className="ui labeled icon button"
        onClick={this.props.clickHandle}
      >
        {this.props.name}
      </button>
    );
  }
}
