import React, { Component } from "react";

class Movie extends Component {
  constructor() {
    super();
    let apiURL = "http://numbersapi.com/#";
    this.showNumber = this.showNumber.bind(this);
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "http://numbersapi.com/42/math?callback=showNumber";
    script.async = true;
    document.body.appendChild(script);
  }
  showNumber(str) {
    document.getElementById("number-fact").innerText = str;
  }
  render() {
    console.log(this.props);
    console.log(this.props.index);
    const apiURL = "http://numbersapi.com/";
    console.log(this.apiURL);
    return (
      <div>
        <figure className="figure">
          <figcaption>
            <h4>{this.props.listing.title}</h4>
          </figcaption>
          <img
            className="center"
            src={this.props.listing.images["Poster Art"].url}
          />
          <p>
            <b>Description:</b> {this.props.listing.description}
          </p>
          <p>
            <b>Release Year:</b> {this.props.listing.releaseYear}
          </p>
          <p>
            <b>Random Fact:</b>{" "}
            <a href={"http://numbersapi.com/" + this.props.index}>
              {apiURL}
              {this.props.index}
            </a>
          </p>
          <p>
            <span id="number-fact">{this.props.index}</span>
            {this.showNumber}
          </p>
          <p>
            <script src="http://numbersapi.com/2012/year?write&fragment"></script>
          </p>
        </figure>
      </div>
    );
  }
}

export default Movie;
