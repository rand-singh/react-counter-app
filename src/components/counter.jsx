import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  // constructor() {
  //   super();
  //   console.log("constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this); // adding the Counter object back into handleIncrement method
  // }

  handleIncrement = () => {
    console.log("inc clicked", this);
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeCLasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeCLasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
