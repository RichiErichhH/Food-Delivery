import { IMG_cdn_url } from "../constant.js";

const RestrauntCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) =>{
     return(<div className="card">
          <img src={IMG_cdn_url+cloudinaryImageId}/>
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <h4>{lastMileTravelString} </h4>
     </div>
     )
}
 export default RestrauntCard;