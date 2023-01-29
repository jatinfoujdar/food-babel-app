import { useState,useEffect } from "react";
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

   useEffect(()=>{
     getRestaurants();
   },[])

   async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json);
   }

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