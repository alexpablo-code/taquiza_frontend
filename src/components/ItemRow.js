import {useState} from 'react';
import axios from 'axios';

const ItemRow = ({item, deleteItem, allItems, setAllItems}) => {
    const [showForm, setShowForm] = useState(false);
    const [updatedItem, setUpdatedItem] = useState(item);
    const [errors, setErrors] = useState({});


    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`https://taquiza-api.onrender.com/api/allitems/update/${updatedItem._id}`, updatedItem)
        // axios.put(`http://localhost:8000/api/allitems/update/${updatedItem._id}`, updatedItem)
            .then((result) => {
                console.log(result)
                setShowForm(false)
                setAllItems(prevAllItems => {
                    const updatedItems = prevAllItems.filter((item) => item._id !== updatedItem._id)
                    updatedItems.push(result.data)
                    return [...updatedItems];
                })
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors)
            })
    }

    const handleInputChange =(e) => {
        setUpdatedItem((prevItem) => ({...prevItem, [e.target.name]: e.target.value}));
    }
    


    return (
        <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button className='btn btn-sm text-primary' onClick={() => setShowForm(true)}>Edit</button> <button className='btn btn-sm text-danger' onClick={(e) => deleteItem(updatedItem._id)} >Delete</button></td>
            {
                showForm?
                <td colSpan="3">
                    <form onSubmit={submitHandler} className='my-1'>
                        <div className='my-2'>
                            <label htmlFor="">Name:</label>
                            <input className='form-control' type="text" name='name' value={updatedItem.name} onChange={handleInputChange} />
                            {
                                errors.name ?
                                    <p className='text-danger'>{errors.name.message}</p> :
                                    null
                            }
                        </div>
                        <div className='my-2'>
                            <label htmlFor="">Description:</label>
                            <input className='form-control' type="text" name='description' value={updatedItem.description} onChange={handleInputChange} />
                            {
                                errors.description ?
                                    <p className='text-danger'>{errors.description.message}</p> :
                                    null
                            }
                        </div>
                        <div className='my-2'>
                            <label htmlFor="">Price:</label>
                            <input className='form-control' type="number" name='price' value={updatedItem.price} onChange={handleInputChange} step="0.01" />
                            {
                                errors.price ?
                                    <p className='text-danger'>{errors.price.message}</p> :
                                    null
                            }
                        </div>
                        {/* <div className='my-2'>
                <label htmlFor="">Category:</label>
                <input className='form-control' type="hidden" name='category' value={categoryId} onChange={handleInputChange}/>
            </div> */}
                        <button className='btn btn-primary btn-sm'>Submit</button>
                        <button className='btn btn-sm btn-info mx-2' onClick={() => setShowForm(false)}>Cancel</button>
                    </form>
                </td>:
                null
            }
        </tr>
    );
}

export default ItemRow;
