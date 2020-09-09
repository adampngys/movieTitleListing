import React, { Component } from "react";

class Single extends Component {
  constructor() {
    super();
    this.state = { trivia: [] };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    fetch("http://numbersapi.com/random/trivia")
      .then((res) => res.text())
      .then((text) =>
        this.setState({ trivia: this.state.trivia.concat(text) })
      );
  }
  render() {
    // console.log(this.props.match.params.id);
    // console.log(
    //   this.props.listings[0].entries.find(
    //     (x) => x.title === this.props.match.params.id
    //   )
    // );
    const data = this.props.listings[0].entries.find(
      (x) => x.title === this.props.match.params.id
    );
    return (
      <div>
        <figure className="figure">
          <figcaption>
            <h4>{data.title}</h4>
          </figcaption>
          <img
            className="center"
            src={data.images["Poster Art"].url}
            alt={data.description}
          />
          <p>
            <b>Description:</b> {data.description}
          </p>
          <p>
            <b>Release Year:</b> {data.releaseYear}
          </p>
          <p>
            <b>Random Fact:</b> {this.state.trivia[0]}
          </p>
        </figure>
      </div>
    );
  }
}
export default Single;
