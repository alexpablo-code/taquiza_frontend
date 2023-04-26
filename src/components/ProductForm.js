import {useEffect, useState} from 'react';
import axios from 'axios';



const ProductForm = ({allItems, setAllItems, categoryId}) => {
    const [menuItem, setMenuItem] = useState({});
    const [errors, setErrors] = useState({});
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        setMenuItem({...menuItem, category:categoryId})
    }, [])

    const handleInputChange =(e) => {
        setMenuItem({...menuItem, [e.target.name]: e.target.value})
    }

    
    const addItemHandler = (e) => {
        e.preventDefault();
        axios.post('https://taquiza-api.onrender.com/api/additem', menuItem)
        // axios.post('http://localhost:8000/api/additem', menuItem)
            .then((newItem) => {
                console.log(newItem)
                setAllItems(prevAllItems => {
                    return [...prevAllItems, newItem.data];
                })
                setMenuItem({...menuItem, name:'', description:'', price:''});
                setErrors({});
            })
            .catch((err) => {
                console.log("Error",err.response.data.errors);
                setErrors(err.response.data.errors);
                // setErrors(err);
            })
    }



    return (
        <div className=''>
            {
                !showForm?
                <button className='btn btn-sm btn-info mx-3' onClick={() => setShowForm(true)}>Add Item</button>:
                <form onSubmit={addItemHandler} className='col-8 offset-1 my-1'>
                <h4>Add Product</h4>
                <div className='my-2'>
                    <label htmlFor="">Name:</label>
                    <input className='form-control' type="text" name='name' value={menuItem.name} onChange={handleInputChange}/>
                    {
                        errors.name?
                        <p className='text-danger'>{errors.name.message}</p>:
                        null
                    }
                </div>
                <div className='my-2'>
                    <label htmlFor="">Description:</label>
                    <input className='form-control' type="text" name='description' value={menuItem.description} onChange={handleInputChange}/>
                    {
                        errors.description?
                        <p className='text-danger'>{errors.description.message}</p>:
                        null
                    }
                </div>
                <div className='my-2'>
                    <label htmlFor="">Price:</label>
                    <input className='form-control' type="number" name='price' value={menuItem.price} onChange={handleInputChange} step="0.01"/>
                    {
                        errors.price?
                        <p className='text-danger'>{errors.price.message}</p>:
                        null
                    }
                </div>
                {/* <div className='my-2'>
                    <label htmlFor="">Category:</label>
                    <input className='form-control' type="hidden" name='category' value={categoryId} onChange={handleInputChange}/>
                </div> */}
                <button className='btn btn-primary btn-sm'>Submit</button>
                <button className='btn btn-sm btn-info mx-2'onClick={() => setShowForm(false)}>Cancel</button>
            </form>
            }
            
        </div>
    );
}

export default ProductForm;
