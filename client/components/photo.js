import React from 'react';
import {Link} from 'react-router';

const Photo = React.createClass({
  render() {
    return (
      <figure className="grid-figure">
      <div className="grid-photo-wrap">
      <Link to={`/view/${this.props.post.code}`}>
        <img src={this.props.post.display_src} alt={this.props.post.caption} className="grid-photo"/>
      </Link>
      </div>

      <figcaption>
      <p> {this.props.post.caption}</p>
      <div className="control-buttons">
      <button className="likes"> &hearts; {this.props.post.likes}</button>
      <Link className="button" to={`/view/{this.props.post.code}`}>
          <span className="comment-count">
          <span className="speech-bubble"></span>
          {this.props.comments[this.props.post.code] ? this.props.comments[this.props.post.code].length: 0}
        </span>
        </Link>

      </div>
      </figcaption>
      </figure>
    )
  }
});

export default Photo;
