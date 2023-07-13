import React, { useContext } from "react";
import { RES_IMG_URL } from "../utils/constaints";
import userContext from "../utils/context/userContext";
export const ResturentCards = ({
  name,
  cloudinaryImageId,
  cuisines,
  deliveryTime,
  avgRating,
}) => {
  const { user } = useContext(userContext);
  return (
    <div className="card">
      <img src={RES_IMG_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{deliveryTime} minutes</h4>
      <h4>{avgRating}</h4>
      <h4>User:- {user.name}</h4>
    </div>
  );
};
