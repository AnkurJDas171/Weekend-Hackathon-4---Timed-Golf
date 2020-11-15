import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, isStart: false };

    this.handelStart = this.handelStart.bind(this);
    this.statrTimer = this.statrTimer.bind(this);
    this.handelKeyDown = this.handelKeyDown.bind(this);
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
    } else if (event.keyCode === 40) {
      //down

      let newY = y + 5;
      setY(newY);
      setBallPosition({ left: `${x}px`, right: `${newY}px` });
    } else if (event.keyCode === 38) {
      //up

      let newY = y - 5;
      setY(newY);
      setBallPosition({ left: `${x}px`, right: `${newY}px` });
    } else if (event.keyCode === 37) {
      //left

      let newX = x - 5;
      setX(newX);
      setBallPosition({ left: `${newX}px`, right: `${y}px` });
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => this.statrTimer(), 1000);
    document.addEventListener("keydown", this.handelKeyDown);
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
