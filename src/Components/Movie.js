import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
  constructor() {
    super();
    this.state = { trivia: [] };
  }

  render() {
    return (
      <div className="image">
        <Link
          to={{
            pathname: `/Single/${this.props.listing.title}`,
          }}
        >
          <img
            src={this.props.listing.images["Poster Art"].url}
            alt={this.props.listing.description}
          />
        </Link>
      </div>
    );
  }
}

export default Movie;
