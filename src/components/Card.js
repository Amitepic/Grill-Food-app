import {CARD_LOGO_URL} from "../utils/CDN";

const Card = (props) => {
    const{resData} = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
      } = resData?.data;


    return (
        <div className='card'>
            <div className='card-img'>
                <img src = {
                      CARD_LOGO_URL +
                       cloudinaryImageId
                            } />
            </div>
            <div className='card-details'>
                <h1>{name}</h1>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{deliveryTime} mintues</h4>                
                <h4>{avgRating} ⭐</h4>
            </div>
        </div>
    );
};

export default Card;