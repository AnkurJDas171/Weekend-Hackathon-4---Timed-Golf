import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, isStart: false };

    this.timer = null;
    this.handelStart = this.handelStart.bind(this);
    this.statrTimer = this.statrTimer.bind(this);
    this.handelKeyDown = this.handelKeyDown.bind(this);
  }

  handelStart() {
    console.log("button clicked");
    this.setState({ isStart: true });
    this.timer = setInterval(() => this.statrTimer(), 1000);

    console.log(this.state);
  }

  statrTimer() {
    console.log("time changed");
    if (!this.state.isStart) {
      return;
    }
    this.setState({ time: this.state.time + 1 });
  }

  handelKeyDown(event) {
    if (!this.state.isStart) {
      return;
    }

    if (event.keyCode === 39) {
      //right

      let newX = this.state.x + 5;
      this.setState({ x: newX });
    } else if (event.keyCode === 40) {
      //down

      let newY = this.state.y + 5;
      this.setState({ y: newY });
    } else if (event.keyCode === 38) {
      //up

      let newY = this.state.y - 5;
      this.setState({ y: newY });
    } else if (event.keyCode === 37) {
      //left

      let newX = this.state.x - 5;
      this.setState({ x: newX });
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handelKeyDown);
  }

  componentDidUpdate() {
    if (this.state.x === 250 && this.state.y === 250) {
      clearInterval(this.timer);
      //this.setState({ isStart: false });
      document.removeEventListener("keydown", this.handelKeyDown);
    }
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    // document.removeEventListener("keydown", this.handelKeyDown);
  }

  render() {
    return (
      <>
        <button
          className="start"
          onClick={this.handelStart}
          disabled = {this.state.isStart}
        >
          start
        </button>

        <div
          className="ball"
          style={{ left: `${this.state.x}px`, top: `${this.state.y}px` }}
        ></div>
        <div className="hole"></div>
        <div className="heading-timer">{this.state.time}</div>
        {/* <div style={{left:"60px"}}>pixels=> x:{this.state.x} , y:{this.state.y}</div> */}
      </>
    );
  }
}

export default Timer;
