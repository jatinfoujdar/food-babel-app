import { IMG_CDN_URL } from "../config";



const RestrauntCard =({name,cloudinaryImageId,cuisines,lastMileTravelString})=>{
    return(
        <div className="card">
       <img src={IMG_CDN_URL + cloudinaryImageId}/>
    <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h3>{lastMileTravelString}</h3>
        </div>
    )
}

export default RestrauntCard;