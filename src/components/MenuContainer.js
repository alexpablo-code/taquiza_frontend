import React from 'react';
import FoodItemCard from './FoodItemCard';

const MenuContainer = ({allProducts}) => {
    return (
        <div className='container'>
            <h2 className='text-center'>Menu</h2>
            <div className='itemsContainer'>
                {
                    allProducts.map((item) => (
                        <FoodItemCard item={item}/>
                    ))
                }
            </div>
            
        </div>
    );
}

export default MenuContainer;
