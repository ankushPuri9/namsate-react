import { ResturentCards } from "./ResturentCard";
import { restrautListData } from "../utils/mokeData";
import { useState } from "react";

export const AppBody = () => {
  const [restrautList, setRestrautList] = useState(restrautListData);

  function filterResData() {
    const filterRes = restrautList.filter((res) => {
      return res.data.avgRating > 4;
    });

    setRestrautList(filterRes);
  }
  function reSetFilter() {
    console.log(restrautListData);
    setRestrautList(restrautListData);
  }

  return (
    <>
      <div>
        <button
          onClick={() => {
            filterResData();
          }}
        >
          Top reated resturent
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            reSetFilter();
          }}
        >
          Reset
        </button>
      </div>
      <div className="resturentList">
        {restrautList.map((resturent) => {
          return <ResturentCards {...resturent.data} key={resturent.data.id} />;
        })}
      </div>
    </>
  );
};
