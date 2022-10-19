import React from "react";
import images from "./images.jpg";

function HomeCards(props) {

    // props.Cards.map((oneCard) => {
    //     if(oneCard.price<2500) {
    //         document.getElementById(oneCard.id).style.display = "block";
    //     } else {
    //         document.getElementById(oneCard.id).style.display = "none";
    //     }
    // }
    // );

  const listItems = props.Cards.map((oneCard) => (
    <>
      <div className="card col-md-2" style={{ width: "18rem" }} id={oneCard.id}>
        <img src={images} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{oneCard.name}</h5>
          <h5>${oneCard.price} <small>/month</small> </h5>
          <h6>Type: {oneCard.type}</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <strong>Location: {oneCard.location}</strong>
          <br />
          <a href="#" className="btn btn-primary">
            Buy House
          </a>
        </div>
      </div>
    </>
  ));

  return <>{listItems}</>;
}

export default HomeCards;
