import React, {Component} from 'react';
import "./Chip.css"

class Chip extends Component {
  render() {
    return (
      <div className="chip">
        {this.props.children}
      </div>
    );
  }
}

export default Chip;