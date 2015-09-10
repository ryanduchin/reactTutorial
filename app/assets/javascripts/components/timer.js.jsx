/** @jsx React.DOM */
var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  }
};

var TickTock = React.createClass({
  mixins: [SetIntervalMixin], // Use the mixin
  getInitialState: function() {
    return {
      seconds: 0,
      minutes: 0
    };
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 333);
    this.setInterval(this.tick, 700); // Call a method on the mixin

  },
  tick: function() {
    if (this.state.seconds === 7) {
      this.setState({
        seconds: 0,
        minutes: this.state.minutes + 1
      });
    } else {
      this.setState({seconds: this.state.seconds + 1});
    }
  },
  render: function() {
    return (
      <div className="timer">
        <h2>React has been running for</h2>
        <h1>{this.state.minutes}</h1>
        <h2>minutes and</h2>
        <h1>{this.state.seconds}</h1>
        <h2>seconds</h2>
      </div>
    );
  }
});


$(document).ready(function () {
  React.render(
    <TickTock />, document.getElementById('timer')
  );
});
