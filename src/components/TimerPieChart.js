import React from "react";
import PieChart from "react-minimal-pie-chart";

export default class TimerPieChart extends React.Component {
  render() {
    let startMilliseconds = this.props.start * 60 * 1000;
    let durationMilliseconds = this.props.duration * 60 * 1000;

    let currentValue = 0;
    let remaining = durationMilliseconds;

    if(this.props.timeElapsed > startMilliseconds) {
      currentValue = this.props.timeElapsed - startMilliseconds;
      remaining = (startMilliseconds + durationMilliseconds) - this.props.timeElapsed;
    }

    if(currentValue > durationMilliseconds) {
      currentValue = durationMilliseconds;
      remaining = 0;
    }

    console.log(this.props.title + ": " + currentValue + ", " + remaining);

    return (
      <div className="pieChart">
        <PieChart
          data={[
            {
              title: "One",
              value: currentValue,
              color: "#00b377"
            },
            {
              title: "Remaining",
              value: remaining,
              color: "#e6f7ff"
            }
          ]}
          lineWidth={50}
          startAngle={270}
          totalValue={durationMilliseconds}
        />
        <label className="ui label">{this.props.title}</label>
      </div>
    );
  }
}
