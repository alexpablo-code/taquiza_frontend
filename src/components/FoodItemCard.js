import React from 'react';

const FoodItemCard = ({item}) => {
    return (
        <div key={item._id} className='foodItemCard'>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>${item.price}</p>
            
        </div>
    );
}

export default FoodItemCard;
