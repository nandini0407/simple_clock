import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    var currentTime = new Date();
    var hour = currentTime.getHours();
    var isAm = hour < 12 ? true : false;
    if (hour > 12) {
      hour -= 12;
    }

    this.state = {
      hour: hour,
      min: currentTime.getMinutes(),
      sec: currentTime.getSeconds(),
      isAm: isAm
    };

    this.tick();
  }

  tick() {
    setInterval(this.incrementSeconds.bind(this), 1000);
  }

  incrementHour() {
    var h = this.state.hour;
    if (h < 12) {
      h += 1;
      if (h === 12) {
        this.flipAmPm();
      }
      this.setState({ hour: h });
    } else {
      h = 1;
      this.setState({ hour: h });
    }
  }

  incrementMinutes() {
    var m = this.state.min;
    if (m < 59) {
      m += 1;
      this.setState({ min: m });
    } else {
      m = 0;
      this.setState({ min: m });
      this.incrementHour();
    }
  }

  incrementSeconds() {
    var s = this.state.sec;
    if (s < 59) {
      s += 1;
      this.setState({ sec: s });
    } else {
      s = 0;
      this.setState({ sec: s });
      this.incrementMinutes();
    }
  }

  flipAmPm() {
    this.setState({
      isAm: !this.state.isAm
    });
  }

  pad(num) {
    if (num < 10) {
      return "0" + num;
    } else {
      return num;
    }
  }

  render() {
    var h = this.pad(this.state.hour);
    var m = this.pad(this.state.min);
    var s = this.pad(this.state.sec);
    var ampm = this.state.isAm === true ? 'AM' : 'PM';

    return (
      <div className="clock">
        <h1 className="title">My Clock</h1>
        <div className="time">
          <div className="hour">{ h }:</div>
          <div className="min">{ m }:</div>
          <div className="sec">{ s }</div>
          <div className="ampm">{ ampm }</div>
        </div>
      </div>
    );
  }
}

export default Clock;
