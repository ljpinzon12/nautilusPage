import React, {Component} from 'react';
import "./Stack.css"

class Stack extends Component {
  render() {
    return (
      <div className="stack" style={{width: this.props.width + "%"}}>
        {this.props.children}
      </div>
    );
  }
}

export default Stack;