import { IMG_CDN_URL } from "../config";
import {Link} from 'react-router-dom';

const RestaurantCard = ({name,cloudinaryImageId, cuisines, avgRating, id}) => {
    return (
        <div className='w-[200px] mx-6 my-4'>
            <img className='h-56 w-full rounded-lg ring-2 ring-green-100' src={IMG_CDN_URL + cloudinaryImageId }/>
            <Link to={`http://localhost:1234/restaurant/${id}`}>
            <h2>{name}</h2>
            </Link>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating}</h4>
        </div>
    );
};

export default RestaurantCard;