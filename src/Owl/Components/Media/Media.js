import React, {Component} from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import "./Media.css"

class Media extends Component {
  videoRef = React.createRef();

  componentDidMount() {
    if (this.props.src.includes(".mp4")) {
      this.videoRef.current.play();
    }
  }

  renderMedia() {
    if (this.props.src.includes(".mp4")) {
      return (
        <video className="media--mp4__video" style={{...this.props.styles}} ref={this.videoRef} autoplay muted>
          <source src={this.props.src} type="video/mp4"/>
        </video>
      )
    } else {
      return (
        <div className="media--image__container">
          <img className="media--image__img" src={this.props.src} style={{...this.props.styles}} alt={this.props.alt}>
          </img>
          <div className="media--image__options">
            <a href="">
              <Tooltip title={this.props.info}>
                <span className="mdi mdi-information"/>
              </Tooltip>
            </a>
            <a >
              <Tooltip title={this.props.download}>
                <a className="mdi mdi-download" href={this.props.link}/>
              </Tooltip>
            </a>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className={this.props.src.includes(".mp4") ? "media--mp4" : "media--image"}>
        {this.renderMedia()}
      </div>
    );
  }
}

export default Media;