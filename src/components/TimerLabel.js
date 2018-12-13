import React from "react";

export default class TimerLabel extends React.Component {
    render() {
        let hours = this.props.timeElapsed.hours || "00";
        let minutes = this.props.timeElapsed.minutes || "00";
        let seconds = this.props.timeElapsed.seconds || "00";
        let milliseconds = this.props.timeElapsed.milliseconds || "0";
        
        return (
            <div>
                <label className="ui timer">{hours}:{minutes}:{seconds}.{milliseconds}</label>
            </div>
        );
    }
}