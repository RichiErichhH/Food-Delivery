import { useState } from "react";
import { restarautList } from "../constant";
import RestrauntCard from "./RestrauntCard";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearch] = useState("");
  const [allRestaurants,setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    // fetch API
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (!allRestaurants) return null;

  if(filteredRestaurants?.length === 0) 
  return <h1>No restaurant match your filter</h1>
  
  return allRestaurants?.length === 0?(
    <Shimmer />
):(    <>
      <div className="search-container">
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="search-input"
          placeholder="Search"
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant?.info} key={restaurant?.info?.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
