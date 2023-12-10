import { useState } from "react";
// import ItemList from "./ItemList";
const RestaurantCategory = ({data,showItems,setShowIndex, setHideIndex}) =>{
    const handleclick = () =>{
        if(showItems) {
            setHideIndex();
        }
        else{
            setShowIndex();
        }
    }

    return(
        <div>
            <div>
                <div onClick={handleclick}>
                    <span>{data.title} ({data.itemCards.length})</span>
                </div>
                {showItems && <ul>{data.itemCards.map((item)=>(
                    <li key={item.card.info.name}>{item.card.info.name}</li>
                ))}</ul>}
            </div>
        </div>
    );
};

export default RestaurantCategory;