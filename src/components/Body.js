import { useState,useEffect } from "react";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";

function filterData(searchTxt,restaurants){
     const filterData = restaurants.filter((restaurant)=>
        restaurant?.data?.name?.toLowerCase()?.includes(searchTxt.toLowerCase())

     )
     return filterData;
}
 
const Body=()=>{
    const [allRestaurants,setAllRestaurants] = useState([]);
    const [filteredrestaurants,setFilterRestaurants]= useState([]);
   const [searchTxt,setSearchTxt] = useState("");
   

   useEffect(()=>{
     getRestaurants();
   },[])

   async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards)
   }

   //Early return
   if (!allRestaurants) {
    return null;
   }
   //not match
//    if (filteredrestaurants?.length===0) {
//     return <h1>No restaurant match your filter!!!!?!!?</h1>
//    }

    return (allRestaurants?.length===0)?<Shimmer/>:(
        <>
        <div className="search container">
          <input type="text" className="search-input" placeholder="Search" value={searchTxt}
          onChange={(e)=> setSearchTxt(e.target.value)}></input>
        <button className="search-btn"
        onClick={()=>{
            //filter the data
           const data= filterData(searchTxt,allRestaurants);
           //updating the data
          setFilterRestaurants(data);
        }}>Search 
        </button>
        </div>
        <div className="restrauntCards">
            {
                filteredrestaurants.map((restaurant)=>{
                    return   <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
                })
            }
        </div>
        </>
    )
}

export default Body;