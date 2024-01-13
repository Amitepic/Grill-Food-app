
import useRestMenuInfo from "../utils/UseRestMenuInfo";
 import Shimmer from "./Shimmer";

import { useParams } from "react-router-dom";

const restMenu = () =>{
    
    
    const { resId } = useParams();
    console.log(resId);

    const restinfo = useRestMenuInfo(resId)

    if(restinfo === null) return  < Shimmer />;
    

    
    const {itemCards} = restinfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || restinfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
   
     const {name} = restinfo?.data?.cards[0]?.card?.card?.info;
     const{text} = restinfo?.data?.cards[0]?.card?.card;
     const{city,cuisines,costForTwoMessage} = restinfo?.data?.cards[2]?.card?.card?.info || restinfo?.data?.cards[0]?.card?.card?.info;
     
    return(
        <div className="MenuCard">
            <h1>               
               {name ||text}
            </h1>
            <p>{city ||city||text}</p>
            <span>{cuisines.join(",")||cuisines.join(",") ||text}</span>
            <p>{costForTwoMessage || costForTwoMessage ||text}</p>
            
           
            <h2>MENU</h2>
        <ul>
            {itemCards.map((card) => < li key={card.card.info.id}>
                  RS- { card.card.info.price /100} 
                   { card.card.info.name}</li>)}
            
        </ul>           
             
        </div>
    )
}


export default restMenu;