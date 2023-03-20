import { useState } from "react";
import rateContext from "./rateContext";

const RateState = (props) => {
  //ratings given by perticular user
  const [ratingbyuser, setRatingbyuser] = useState([]);
  //ratings given to perticular plaec
  const [ratingbyplace, setRatingbyplace] = useState([]);

  //getting ratings by id of place
  const getRatingbyplace = async (id) => {
    // api call
    const response = await fetch(
      `http://localhost:5000/api/rating/getbyplace/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let json = await response.json();
    json = json.reverse();
    setRatingbyplace(json);
  };

  //getting ratings by user
  const getRatingbyuser = async () => {
    // api call
    const response = await fetch(`http://localhost:5000/api/rating/getbyuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("wifi-token"),
      },
    });
    let json = await response.json();
    json = json.reverse();
    setRatingbyuser(json);
  };

  //adding rating
  const addRating = async (rating) => {
    const response = await fetch("http://localhost:5000/api/rating/addrating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("wifi-token"),
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
        ratingbyplace,
        ratingbyuser,
        getRatingbyplace,
        getRatingbyuser,
        addRating,
      }}
    >
      {props.children}
    </rateContext.Provider>
  );
};

export default RateState;
