
import React from "react";
import TimerPieChart from "../components/TimerPieChart";
import TimerLabel from "../components/TimerLabel";

export default class TimerRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalTime: 60 * 60 * 1000,
      timeElapsed: 0,
    };
  }

  render() {
    return(
      <div>
            <TimerLabel timeElapsed={this.props.timeElapsed} />
        <table className="ui timer">
           <tbody>
                    <tr>
                        <td>
                            <TimerPieChart
                                title="Bittering"
                                timeElapsed={this.props.timeElapsed.total}
                                duration={1}
                                start={0}
                            />
                        </td>
                        <td>
                            <TimerPieChart
                                title="Flavoring"
                                timeElapsed={this.props.timeElapsed.total}
                                duration={1}
                                start={1}
                            />
                        </td>
                        <td>
                            <TimerPieChart
                                title="Aroma"
                                timeElapsed={this.props.timeElapsed.total}
                                duration={1}
                                start={2}
                            />
                        </td>
                    </tr>
                </tbody>
              </table>
          </div>
      );
  }
}