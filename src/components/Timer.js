import React from "react";
import TimerButton from "../components/TimerButton";
import TimerRow from "../components/TimerRow";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: Date.now(),
      interval: 300,
      running: false,
      totalTime: 60 * 60 * 1000,
      timeElapsed: {
        total: 0,
        milliseconds: 0,
        seconds: 0,
        minutes: 0,
        hours: 0
      }
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
      timeElapsed: {
        total: timeDifference,
        milliseconds: milliseconds,
        seconds: seconds,
        minutes: minutes,
        hours: hours
      }
    });
  };

  render() {
    return (
      <div>
          <div className="buttonSection">
            <TimerButton name="Start" clickHandle={this.handleStartOnClick} />
            <TimerButton name="Stop" clickHandle={this.handleStopOnClick} />
          </div>
          <div>
          <TimerRow
            startMinutes={0}
            durationMinutes={0}
            timeElapsed={this.state.timeElapsed}
          />
          </div>
      </div>
    );
  } 
}
