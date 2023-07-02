import { ResturentCards } from "./ResturentCard";
import { restrautListData } from "../utils/mokeData";
import { useEffect, useState } from "react";

export const AppBody = () => {
  console.log("render");
  const [restrautList, setRestrautList] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filterResList, setfilterResList] = useState([]);

  // Top Rated filter
  function filterResData() {
    const filterRes = restrautList.filter((res) => {
      return res.data.avgRating > 4;
    });

    setfilterResList(filterRes);
  }

  // Rest Filters
  function reSetFilter() {
    setfilterResList(restrautList);
    setsearchText("");
  }

  //Featch Data from API
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3866358&lng=76.3420206&page_type=DESKTOP_WEB_LISTING"
    );
    const resList = await data.json();

    setRestrautList(resList?.data?.cards[0]?.data?.data?.cards);
    setfilterResList(resList?.data?.cards[0]?.data?.data?.cards);
  };

  // UseEffect to fetch data.
  useEffect(() => {
    fetchData();
  }, []);

  // Search Filter..
  function searchFilter() {
    const filterData = restrautList.filter((resturent) => {
      return resturent?.data?.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    console.log(filterData);
    setfilterResList(filterData);
  }

  return (
    <>
      <div className="filter-container">
        <div className="search-filter">
          <input
            name="Search"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log("ffhgfgh");
              searchFilter();
            }}
          >
            Search
          </button>
        </div>
        <div className="top-rated-filter">
          <button
            onClick={() => {
              filterResData();
            }}
          >
            Top reated resturent
          </button>
        </div>
        <div className="filter-reset">
          <button
            onClick={() => {
              reSetFilter();
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="resturentList">
        {filterResList.map((resturent) => {
          return <ResturentCards {...resturent.data} key={resturent.data.id} />;
        })}
      </div>
    </>
  );
};
