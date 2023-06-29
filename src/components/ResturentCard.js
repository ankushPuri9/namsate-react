import { RES_IMG_URL } from "../utils/constaints";
export const ResturentCards = ({
  name,
  cloudinaryImageId,
  cuisines,
  deliveryTime,
  avgRating,
}) => {
  return (
    <div className="card">
      <img src={RES_IMG_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{deliveryTime} minutes</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};
