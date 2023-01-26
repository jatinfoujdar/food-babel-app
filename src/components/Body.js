import { restaurantList } from "../config";
import RestrauntCard from "./RestrauntCard";


const Body=()=>{
    return(
        <div className="restrauntCards">
            {
                restaurantList.map((restaurant)=>{
                    return   <RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
                })
            }
        </div>
    )
}

export default Body;