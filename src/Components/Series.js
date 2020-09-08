import React, { Component } from "react";
import Movie from "./Movie";

class Series extends Component {
  render() {
    return (
      <div>
        <h2>Series</h2>
        <div className="photoGrid">
          {this.props.listings[0].entries
            .filter((listing) => listing.programType === "series")
            .map((listing, index) => (
              <Movie key={index} listing={listing} index={index} />
            ))}
        </div>
      </div>
    );
  }
}

export default Series;