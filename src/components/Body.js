import { useState } from "react";
import { restarautList } from "../constant";
import RestrauntCard from "./RestrauntCard";

function filterData(searchText,restaurants){
    const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;

}

const Body = () =>{
    
    const [searchText,setSearch]=useState("");
    const[restaurants,setRestaurants]=useState(restarautList);
    return(
        <>
        <div className="search-container">
            <input 
            type="text" 
            value={searchText} 
            onChange={(e)=>{
                setSearch(e.target.value);
            }} 
            className="search-input" 
            placeholder="Search"></input>
            <button className="search-btn"
            onClick={()=>{
                const data=filterData(searchText,restaurants);
                setRestaurants(data);
            }}
            >Search</button>
        </div>
         <div className="resturant-list">
           {restaurants.map((restaurant) => {
             return <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
           })}
         </div>
        </>
    )

}
export default Body;