import { useState } from "react";
import { restaurantList } from "../config";
import RestrauntCard from "./RestrauntCard";

function filterData(searchTxt,restaurants){
     const filterData = restaurants.filter((restaurant)=>
        restaurant.data.name.includes(searchTxt)

     )
     return filterData;
}

const Body=()=>{
   const [searchTxt,setSearchTxt] = useState("");
   const [restaurants,setRestaurants]= useState(restaurantList);
    return(
        <>
        <div className="search container">
          <input type="text" className="search-input" placeholder="Search" value={searchTxt}
          onChange={(e)=> setSearchTxt(e.target.value)}></input>
        <button className="search-btn"
        onClick={()=>{
            //filter the data
           const data= filterData(searchTxt,restaurants);
           //updating the data
           setRestaurants(data);
        }}>Search 
        </button>
        </div>
        <div className="restrauntCards">
            {
                restaurants.map((restaurant)=>{
                    return   <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
                })
            }
        </div>
        </>
    )
}

export default Body;