import { useState, useEffect } from "react";
import { RES_INFO_URL } from "./constaints";

export function useOnlineStatus(resId) {
  const [restaurant, setRestauraunt] = useState(null);
  //   useEffect(() => {
  //     function handleOnline() {
  //       setIsOnline(true);
  //     }
  //     function handleOffline() {
  //       setIsOnline(false);
  //     }
  //     window.addEventListener("online", handleOnline);
  //     window.addEventListener("offline", handleOffline);
  //     return () => {
  //       window.removeEventListener("online", handleOnline);
  //       window.removeEventListener("offline", handleOffline);
  //     };
  //   }, []);
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
