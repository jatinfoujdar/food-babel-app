import { IMG_CDN_URL } from "../config";



const RestrauntCard =({name,cloudinaryImageId,cuisines,lastMileTravelString})=>{
    return(
        <div className="w-72 p-2 m-2 shadow-lg bg-gray-300  ">
       <img src={IMG_CDN_URL + cloudinaryImageId}/>
    <h2 className="font-bold text-xl"> {name}</h2>
      <h5>{cuisines.join(",")}</h5>
      <h5>{lastMileTravelString}</h5>
        </div>
    )
}

export default RestrauntCard;