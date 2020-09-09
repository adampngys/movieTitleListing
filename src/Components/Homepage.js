import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Movies from "./Movies";
import Series from "./Series";
import Error from "./Error";
import Landing from "./Landing";
import Single from "./Single";

class Homepage extends Component {
  render() {
    return (
      <div>
        <table className="menu-table">
          <tbody>
            <tr>
              <td>
                <Link className="text-link" to="/Movies">
                  <h3>Movies</h3>
                </Link>
              </td>
              <td>
                <Link className="text-link" to="/">
                  <img
                    className="logo"
                    src="https://www.pngitem.com/pimgs/m/301-3014574_popcorn-cinema-png-download-movie-popcorn-transparent-background.png"
                    alt="logo"
                  />
                </Link>
              </td>
              <td>
                <Link className="text-link" to="/Series">
                  <h3>Series</h3>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>

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
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Landing />
            </div>
          )}
        ></Route>
        <Route
          path="/Single/:id"
          render={(params) => <Single {...this.props} {...params} />}
        ></Route>
      </div>
    );
  }
}

export default Homepage;
