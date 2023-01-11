import React from "react";
import MovieMap from "./MovieMap";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <div>
        {/* Hello world */}
        <div className="awesome" style={{ border: "1px solid red" }}>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link to={"/n"}>
                <a className="navbar-brand">Metaphhor Project</a>
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <Link to={"/add"}>
                    <li className="nav-item">
                      <a
                        style={{ textDecorationColor: "green" }}
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Movies
                      </a>
                    </li>
                  </Link>
                  <Link to={"/api"}>
                    <li className="nav-item">
                      <a
                        style={{ textDecorationColor: "green" }}
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Api data
                      </a>
                    </li>
                  </Link>
                  <Link to={"/plist"}>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Mobiles
                      </a>
                    </li>
                  </Link>

                  <Link to={"/ResearchTools"}>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        ResearchTools
                      </a>
                    </li>
                  </Link>

                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <ul className="dropdown-menu">
                      <Link to={"/m"}>
                        <li>
                          <a className="dropdown-item" href="#">
                            Context
                          </a>
                        </li>
                      </Link>

                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">
                      Disabled
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
