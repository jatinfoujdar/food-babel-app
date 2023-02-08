import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
// import useOnline from "../utils/useOnline";

 
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

//    const isOnline = useOnline();
//    if(!isOnline){
//     return<h2>
//         Offline please check your internet
//     </h2>
//    }

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
        <div className="search container p-3 bg-gray-200 m-2  ">
          <input type="text" className="search-input rounded-md p-2 m-3  " placeholder="Search" value={searchTxt}
          onChange={(e)=> setSearchTxt(e.target.value)}></input>
        <button className="p-2 m-3 bg-gray-900 text-white rounded-md shadow-sm hover:bg-blue-700"
        onClick={()=>{
            //filter the data
           const data= filterData(searchTxt,allRestaurants);
           //updating the data
          setFilterRestaurants(data);
        }}>Search 
        </button>
        </div>
        <div className="flex flex-wrap">
            {
                filteredrestaurants.map((restaurant)=>{
                    return  <Link to={"/restaurant/"+ restaurant.data.id} key={restaurant.data.id}>
                        <RestrauntCard {...restaurant.data} /></Link>
                })
            }
        </div>
        </>
    )
}

export default Body;