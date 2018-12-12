import React from "react";
import TimerButton from "../components/TimerButton";
import TimerPieChart from "../components/TimerPieChart";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: Date.now(),
      interval: 300,
      running: false,
      totalTime: 60 * 60 * 1000,
      timeElapsed: 0,
    };
  }

  handleStartOnClick = () => {
    console.log("Start clicked!");
    this.setState({
      start: Date.now(),
      running: true
    });

    setTimeout(this.doWork, this.state.interval);
  };

  handleStopOnClick = () => {
    console.log("Stop clicked!");
    this.setState({
      running: false
    });
  };

  doWork = () => {
    if (this.state.running && this.state.start != null) {
      let timeElapsed = Date.now() - this.state.start;
      this.setState({timeElapsed: timeElapsed});
      
      this.updateTimeAmounts(timeElapsed);

      setTimeout(this.doWork, this.state.interval);
    }
  };

  updateTimeAmounts = timeDifference => {
    var milliseconds = (timeDifference % 1000) % 10;
    var seconds = ("0" + (parseInt(timeDifference / 1000) % 60)).slice(-2);
    var minutes = ("0" + (parseInt(timeDifference / (1000 * 60)) % 60)).slice(
      -2
    );
    var hours = ("0" + parseInt(timeDifference / (1000 * 60 * 60))).slice(-2);

    this.setState({
      elapsedMilliseconds: milliseconds,
      elapsedSeconds: seconds,
      elapsedMinutes: minutes,
      elapsedHours: hours
    });
  };

  render() {
    return (
      <div>
        <div>
          <table className="ui timer">
            <tbody>
              <tr>
                <td>{this.state.elapsedHours || "00"}</td>
                <td>:</td>
                <td>{this.state.elapsedMinutes || "00"}</td>
                <td>:</td>
                <td>{this.state.elapsedSeconds || "00"}</td>
                <td>.</td>
                <td>{this.state.elapsedMilliseconds || "0"}</td>
              </tr>
            </tbody>
          </table>
          <div className="buttonSection">
            <TimerButton name="Start" clickHandle={this.handleStartOnClick} />
            <TimerButton name="Stop" clickHandle={this.handleStopOnClick} />
          </div>
          <div className="pieSection">
            <TimerPieChart timeElapsed={this.state.timeElapsed} totalTime={this.state.totalTime}/>
          </div>
        </div>
      </div>
    );
  }
}
