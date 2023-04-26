import {Link} from 'react-router-dom';
import { useState } from 'react';
import ItemRow from './ItemRow';

const ProductsTable = ({allItems, setAllItems, categoryId, deleteItem}) => {
    const categoryItems = allItems.filter((currItem) => currItem.category === categoryId);
    // const [showForm, setShowForm] = useState(false)
    // const [updatedItem, setUpdatedItem] = useState({category:categoryId});
    // const [errors, setErrors] = useState({});

    // const submitHandler = (e, id) => {
    //     e.preventDefault();
    //     // axios.put(`https://taquiza-api.onrender.com/api/allproducts/update/${id}`, editItem)
    //     axios.put(`http://localhost:8000/api/allproducts/update/${id}`, updatedItem)
    //         .then((result) => {
    //             console.log(result)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //             setErrors(err.response.data.errors)
    //         })
    // }


    return (
        <div>
            <div className='container'>
                <table className='table table-striped table-secondary my-4'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categoryItems?
                            (   categoryItems.map((item) => (
                                <>
                                    <ItemRow item={item} deleteItem={deleteItem} allItems={allItems} setAllItems={setAllItems}/>
                                </>
                            ))):
                            (<><p>No items in category</p></>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductsTable;
