import {useState, useEffect} from 'react';
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard"
import Shimmer from './Shimmer';
import { restaurantData } from '../utils/restaurantData';

const Body = () => {
    const [search,setSearch] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);

    console.log()
    const filterData = () => {
        const data = allRestaurants.filter((resData) => resData.info.name.toLowerCase().includes(search.toLowerCase()));
        setFilteredRestaurants(data);
    }

    useEffect(() => {
        getRestaurants();
    },[]);

    async function getRestaurants() {
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.260423&lng=84.8535844&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const json = await data.json();
        const json = restaurantData;
        
        if(json.length!=0){
            setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
    }
    
    // if(filteredRestaurants?.length === 0) return <h1>No Restaurants Found !</h1>
    return (
    <>
        {/* search component  */}
        <div className="p-4 mx-6">
            
            <input 
                type="text" 
                className="border-2 border-gray-300 p-2 rounded-lg w-1/2 hover:border-green-500" 
                placeholder="search" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
            />
            <button 
                className='bg-green-500 hover:bg-sky-400 active:bg-red-400 text-white p-2 rounded-lg ml-2'
                onClick={() => {
                    filterData();
                }}
            >
                Search
            </button>
        </div>

        {/* card component */}

        {(allRestaurants?.length === 0) ? <Shimmer/> : (filteredRestaurants?.length === 0)? <h1>No Restro Found</h1>
        : (<div className='p-4 flex flex-wrap'>
            {filteredRestaurants?.map((restaurant) => {return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>})}
        </div>)}
    </>
    );
};

export default Body;