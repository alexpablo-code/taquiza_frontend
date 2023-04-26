import React from 'react';

const CategoryBox = ({category, allItems}) => {
    const categoryItems = allItems.filter((item) => item.category === category._id);


    return (
        <div className='categoryBox'>
            <h2>{category.name}</h2>
            {
                categoryItems?
                (categoryItems.map((item) => (
                    <div key={item._id} className='itemCard'>
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                    </div>
                ))):
                <h4>Loading...</h4>
            }
            
        </div>
    );
}

export default CategoryBox;
