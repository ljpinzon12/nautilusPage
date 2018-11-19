import React, {Component} from 'react';
import "./Box.css"

class Box extends Component {
  render() {
    return (
      <div className={"box " + (this.props.vertical ? "box--vertical " : "")}>
        <div className="box--container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Box;