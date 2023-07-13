import { useState, useEffect } from "react";
import { RES_INFO_URL } from "./constaints";

export function useRestaurant(resId) {
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(RES_INFO_URL + resId);
    const json = await data.json();
    setRestauraunt(json);
  }

  return restaurant;
}
