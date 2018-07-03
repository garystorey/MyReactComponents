import React, { Component } from 'react';
import './card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="img">
          <img src={this.props.imgSrc} alt="" />
        </div>
        <div className="text">
          <h2>
            <a
              href={this.props.url}
              aria-describedby="desc-another-card-instance"
            >
              {this.props.title}
            </a>
          </h2>
          <p>{this.props.description}</p>
          <span
            className="cta"
            aria-hidden="true"
            id="desc-another-card-instance"
          >
            Read more →
          </span>
          <small>By {this.props.author}</small>
        </div>
      </div>
    );
  }
}

export default Card;
