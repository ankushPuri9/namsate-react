import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_INFO_URL } from "../utils/constaints";

export const RestaurantsInfo = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();

  const fetchInfo = async () => {
    const data = await fetch(RES_INFO_URL + id);
    const resData = await data.json();
    // console.log(
    //   "dsd:-->",
    //   resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
    //     ?.card?.card?.itemCards
    // );
    setResInfo(resData);
  };
  useEffect(() => {
    fetchInfo();
  }, []);
  if (resInfo === null) return <h1>ShimmerUI</h1>;

  console.log("datata:--", resInfo?.data?.cards[0]?.card?.card?.info);
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log("itemmm", itemCards);

  // console.log("datasa-", resInfo);

  return (
    <>
      <div className="restaurant-info">
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      <div className="restaurant-menu">
        <ul>
          {itemCards.map((item) => (
            <li>
              {item?.card?.info?.name} - {item?.card?.info?.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
