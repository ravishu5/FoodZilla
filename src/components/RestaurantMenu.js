import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const {resId} = useParams(); 

    const [resInfo, setResInfo] = useState(null);
    const [showIndex,setShowIndex]=useState(-1);

    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const fetchMenu= async() =>{
       const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId+"&submitAction=ENTER"
        );
       const json=await data.json();
       setResInfo(json?.data);
    };
    
    // early return 
    if(resInfo==null) return <h1>Loading components</h1>
    
    const {name, cloudinaryImageId, areaName, city, avgRating, costForTwoMessage, cuisines}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c)=>c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="menu">
            <div>
                {/* <h1>Restaurant item's ID is {resId}</h1> */}
                <h2>{name}</h2>
                <img className="menu_image" src={IMG_CDN_URL + cloudinaryImageId} />
                <h3>{areaName}</h3>
                <h3>{city}</h3>
                <h3>{avgRating}</h3>
                <h3>{costForTwoMessage}</h3>
            </div>
            <div style={{width: "500px", marginTop: "20px"}}>
                {categories?.map((category,index)=>{
                    return <RestaurantCategory  key={category?.card?.card.title} data={category?.card?.card} showItems={index===showIndex?true:false}
                    setShowIndex={()=>setShowIndex(index)} setHideIndex={()=>setShowIndex(-1)}/>
                })}
            </div>
        </div>    
    );
};

export default RestaurantMenu;