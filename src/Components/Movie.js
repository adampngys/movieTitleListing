import React, { Component } from "react";

class Movie extends Component {
  constructor() {
    super();
    this.state = { trivia: [] };
  }
  componentDidMount() {
    fetch("http://numbersapi.com/random/trivia")
      .then((res) => res.text())
      .then((text) =>
        this.setState({ trivia: this.state.trivia.concat(text) })
      );
  }

  render() {
    const apiURL = "http://numbersapi.com/";
    return (
      <div>
        <figure className="figure">
          <figcaption>
            <h4>{this.props.listing.title}</h4>
          </figcaption>
          <img
            className="center"
            src={this.props.listing.images["Poster Art"].url}
            alt={this.props.listing.description}
          />
          <p>
            <b>Description:</b> {this.props.listing.description}
          </p>
          <p>
            <b>Release Year:</b> {this.props.listing.releaseYear}
          </p>
          <p>
            <b>Random Fact:</b> {this.state.trivia[0]}
          </p>
        </figure>
      </div>
    );
  }
}

export default Movie;
