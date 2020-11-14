import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, isStart: false };

    this.handelStart = this.handelStart.bind(this);
    this.statrTimer = this.statrTimer.bind(this);
  }

  handelStart() {
    console.log("button clicked");
    this.setState({ isStart: true });

    console.log(this.state);
  }

  statrTimer() {
    console.log("time changed");
    let time = this.state.isStart ? this.state.time + 1 : this.state.time;
    this.setState({ time: time });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.statrTimer(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        {!this.state.isStart && (
          <button className="start" onClick={this.handelStart}>
            start
          </button>
        )}

        {this.state.isStart && (
          <>
            <div className="ball"></div>
            <div className="hole"></div>
            <div className="heading-timer">{this.state.time}</div>
          </>
        )}
      </>
    );
  }
}

export default Timer;
