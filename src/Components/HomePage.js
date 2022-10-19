import React, { useState } from "react";

class HomePage extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="container md-5">
          <div className="raw d-flex justify-content-evenly">
            <div className="col-md-8 text-start">
              <h1>Search Properties to Rent</h1>
            </div>
            <div className="col-md-4">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search with searchBar"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="raw search-raw d-flex justify-content-evenly">
            <div className="col-md-2">
              <div className="Location text-muted">Location</div>
              <br />
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>

            <div className="col-md-2">
              <div className="Move-in text-muted">When to move in</div>
              <br />
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>

            <div className="col-md-2">
              <div className="price-range text-muted">Price Range</div>
              <br />
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>

            <div className="col-md-2">
              <div className="property-type text-muted">Property Type</div>
              <br />
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>

            <button type="button" class="btn btn-primary">Primary</button>
          </div>
        </div>
      </>
    );
  }
}

export default HomePage;
