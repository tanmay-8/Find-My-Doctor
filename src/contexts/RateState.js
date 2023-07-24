import { useState } from "react";
import rateContext from "./rateContext";

const RateState = (props) => {
  //ratings given by perticular user
  const [ratingbyuser, setRatingbyUser] = useState([]);
  //ratings given to perticular doctor
  const [ratingbydoctor, setRatingbyDoctor] = useState([]);

  //getting ratings by id of doctor
  const getRatingbyDoctor = async (id) => {
    const response = await fetch(
      `http://localhost:5000/api/rating/getbyDoctor/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("Health-token"),
        },
      }
    );
    let json = await response.json();
    json = json.reverse();
    console.log(json);
    setRatingbyDoctor(json);
  };

  //getting ratings by user
  const getRatingbyUser = async () => {
    // api call
    const response = await fetch(`http://localhost:5000/api/rating/getbyuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Health-token"),
      },
    });
    let json = await response.json();
    json = json.reverse();
    setRatingbyUser(json);
  };

  //adding rating
  const addRating = async (rating) => {
    const response = await fetch("http://localhost:5000/api/rating/addrating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("Health-token"),
      },
      body: JSON.stringify(rating),
    });
    const json = await response.json();
    console.log(json);
    return json;
  };

  return (
    //sending props in context
    <rateContext.Provider
      value={{
        ratingbydoctor,
        ratingbyuser,
        getRatingbyDoctor,
        getRatingbyUser,
        addRating,
      }}
    >
      {props.children}
    </rateContext.Provider>
  );
};

export default RateState;
