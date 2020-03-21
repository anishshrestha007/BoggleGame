import React from "react";
import ReactDOM from "react-dom";

import "../css/Timer.css";

class TimerComponent extends React.Component {
  render() {
    return (
      <div>
        {this.props.value}:{this.props.seconds}
      </div>
    );
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      value: this.props.timeValue ? this.props.timeValue : 3
    };
    this.secondsRemaining;
    this.intervalHandle;
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }
  componentDidMount() {
    this.startCountDown();
  }
  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;

    this.setState({
      value: min,
      seconds: sec
    });

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }

    if (min < 10) {
      this.setState({
        value: "0" + min
      });
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
      this.props.timerEnded && this.props.timerEnded();
    }

    this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.value;
    this.secondsRemaining = time * 60;
  }

  render() {
    return (
      <div>
        <TimerComponent value={this.state.value} seconds={this.state.seconds} />
      </div>
    );
  }
}
export default Timer;
