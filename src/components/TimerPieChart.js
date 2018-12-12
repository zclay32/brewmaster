import React from "react";
import PieChart from "react-minimal-pie-chart";

export default class TimerPieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalTime: 60
    };
  }

  render() {
    return (
      <PieChart
        data={[
          { title: "One", value: this.props.timeElapsed, color: "#E38627" }
        ]}
        lineWidth={10}
        startAngle={270}
        totalValue={this.props.totalTime}
      />
    );
  }
}
