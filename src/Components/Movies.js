import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  render() {
    return (
      <div>
        <h2>Movies</h2>
        <div className="photoGrid">
          {this.props.listings[0].entries
            .filter((listing) => listing.programType === "movie")
            .map((listing, index) => (
              <Movie key={index} listing={listing} index={index} />
            ))}
        </div>
      </div>
    );
  }
}

export default Movies;
