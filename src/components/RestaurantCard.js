import { IMG_CDN_URL } from "../config";
import {Link} from 'react-router-dom';

const RestaurantCard = ({name,cloudinaryImageId, cuisines, avgRating, id}) => {
    return (
        <div className='card'>
            <img src={IMG_CDN_URL + cloudinaryImageId }/>
            <Link to={`http://localhost:1234/restaurant/${id}`}>
            <h2>{name}</h2>
            </Link>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating}</h4>
        </div>
    );
};

export default RestaurantCard;