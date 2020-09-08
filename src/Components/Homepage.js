import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Movies from "./Movies";
import Series from "./Series";
import Error from "./Error";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/Movies">
          <h3>Movies</h3>
        </Link>
        <Link to="/Series">
          <h3>Series</h3>
        </Link>
        <Route
          path="/Movies"
          render={() => (
            <div>
              <Movies {...this.props} />
            </div>
          )}
        ></Route>
        <Route
          path="/Series"
          render={() => (
            <div>
              <Series {...this.props} />
            </div>
          )}
        ></Route>
        <Route
          path="/Error"
          render={() => (
            <div>
              <Error />
            </div>
          )}
        ></Route>
      </div>
    );
  }
}

export default Homepage;
