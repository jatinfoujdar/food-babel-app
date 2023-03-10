import { useState,useEffect } from "react"
import { FETCHAPI } from "../config";

const useRestaurant = (id)=>{

 const [restaurant, setRestaurant] = useState(null);

 useEffect(()=>{
    getRestaurantsInfo()
},[])

async function getRestaurantsInfo(){
    const data = await fetch(FETCHAPI + id );
    const json = await data.json()
    console.log(json);
    setRestaurant(json.data)
}
return restaurant;
}

export default useRestaurant