import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, isStart: false };

    this.handelStart = this.handelStart.bind(this);
    this.statrTimer = this.statrTimer.bind(this);
    this.handelKeyDown = this.handelKeyDown.bind(this);
    this.checkIfReachedDestination = this.checkIfReachedDestination.bind(this);
  }

  checkIfReachedDestination() {
    if (this.state.x === 250 && this.state.y === 250) {
      clearInterval(this.timer);
      this.setState({ isStart: false });
    }
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

  handelKeyDown(event) {
    if (event.keyCode === 39) {
      //right

      let newX = this.state.x + 5;
      this.setState({ x: newX });
      this.checkIfReachedDestination();
    } else if (event.keyCode === 40) {
      //down

      let newY = this.state.y + 5;
      this.setState({ y: newY });
      this.checkIfReachedDestination();
    } else if (event.keyCode === 38) {
      //up

      let newY = this.state.y - 5;
      this.setState({ y: newY });
      this.checkIfReachedDestination();
    } else if (event.keyCode === 37) {
      //left

      let newX = this.state.x - 5;
      this.setState({ x: newX });
      this.checkIfReachedDestination();
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.statrTimer(), 1000);
    document.addEventListener("keydown", this.handelKeyDown);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    document.removeEventListener("keydown");
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
            <div
              className="ball"
              style={{ left: `${this.state.x}px`, top: `${this.state.y}px` }}
            ></div>
            <div className="hole"></div>
            <div className="heading-timer">{this.state.time}</div>
          </>
        )}
      </>
    );
  }
}

export default Timer;
