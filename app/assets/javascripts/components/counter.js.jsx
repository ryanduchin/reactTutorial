/** @jsx React.DOM */
var Counter = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    }
  },
  incrementCount: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  render: function() {
    return (
      <div className="counter">
        <h1>{this.props.name}:</h1>
        <h2>Count: {this.state.count}</h2>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
});

$(document).ready(function () {
  React.render(
    <Counter name="stupid count"/>, document.getElementById('counter')
  );
});
