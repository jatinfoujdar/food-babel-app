import { IMG_CDN_URL } from "../config";



const RestrauntCard =({name,cloudinaryImageId,cuisines,lastMileTravelString})=>{
    return(
        <div className="card">
       <img src={IMG_CDN_URL + cloudinaryImageId}/>
    <h2>{name}</h2>
      <h5>{cuisines.join(",")}</h5>
      <h5>{lastMileTravelString}</h5>
        </div>
    )
}

export default RestrauntCard;