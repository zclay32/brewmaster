import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: Date.now(),
      interval: 300,
      running: false
    };

    this.updateTimeAmounts(Date.now() - this.state.start);
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
      this.updateTimeAmounts(Date.now() - this.state.start);

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
                <td>{this.state.elapsedHours}</td>
                <td>:</td>
                <td>{this.state.elapsedMinutes}</td>
                <td>:</td>
                <td>{this.state.elapsedSeconds}</td>
                <td>.</td>
                <td>{this.state.elapsedMilliseconds}</td>
              </tr>
              <tr>
                <div className="buttonSection">
                  <button
                    className="ui labeled icon button"
                    onClick={this.handleStartOnClick}
                  >
                    Start
                  </button>
                  <button
                    className="ui labeled icon button"
                    onClick={this.handleStopOnClick}
                  >
                    Stop
                  </button>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
