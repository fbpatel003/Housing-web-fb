import React, { useState } from "react";
import HomeCards from "./HomeCards";

function HomePage() {
  let allCards = [
    {
      id: 1,
      price: 2700,
      name: "Palm Harbour",
      location: "Jamnagar",
      imgSrc: "ok",
      type: "Commercial",
    },
    {
      id: 2,
      price: 2000,
      name: "Beverly",
      location: "Rajkot",
      imgSrc: "ok",
      type: "Commercial",
    },
    {
      id: 3,
      price: 2100,
      name: "new House",
      location: "Jamnagar",
      imgSrc: "ok",
      type: "Residential",
    },
  ];

  //   function setProp() {
  //   // var selectElement = document.querySelector('#locationSelection');
  //   // var output = selectElement.value;
  //   // console.log(output);
  //   $(".dropdown-menu li a").click(function(){
  //     var selText = $(this).text();
  //     $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
  //   });

  // }
  // var a;
  // document.getElementById("locationSelection").addEventListener('change', ()=>{
  //   a = document.getElementById("locationSelection").option(document.getElementById("locationSelection").selected).text;
  //   console.log(a);
  // })

  // let e = document.getElementById("locationSelection");
  // let text = e.options[e.selectedIndex].value;
  // console.log(text);
  // function setProps(){

  // }

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
              id="locationSelection"
            >
              <option selected>Search by Location</option>
              <option value={1}>Jamnagar</option>
              <option value={2}>Rajkot</option>
            </select>
          </div>

          <div className="col-md-2">
            <div className="Move-in text-muted">When to move in</div>
            <br />
            <select className="form-select" aria-label="Default select example">
              <option selected>Search by date</option>
              <option value={1}>19/10/'22</option>
              <option value={2}>20/10/'22</option>
            </select>
          </div>

          <div className="col-md-2">
            <div className="price-range text-muted">Price Range</div>
            <br />
            <select className="form-select" aria-label="Default select example">
              <option selected>Search by Price</option>
              <option value={1}>less then 2000</option>
              <option value={2}>2000-3000</option>
              <option value={3}>more then 3000</option>
            </select>
          </div>

          <div className="col-md-2">
            <div className="property-type text-muted">Property Type</div>
            <br />
            <select className="form-select" aria-label="Default select example">
              <option selected>Search by Type</option>
              <option value={1}>Residential</option>
              <option value={2}>Commercial</option>
            </select>
          </div>

          <button
            type="button"
            className="btn btn-primary btn-search"
            onClick={() => {
              var a;
                  a = document
                    .getElementById("locationSelection")
                    .options(
                      document.getElementById("locationSelection").selectedIndex
                    ).text;
                  console.log(a);
            }}
          >
            Search
          </button>
        </div>

        <div className="raw d-flex justify-content-evenly card-raw">
          <HomeCards Cards={allCards} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
