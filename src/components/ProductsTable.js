import {Link} from 'react-router-dom';

const ProductsTable = ({allProducts, setAllProducts, deleteItem}) => {
    return (
        <div>
            <div className='container'>
                <table className='table table-striped my-4'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allProducts.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td><Link to={`/store-manager/editproduct/${item._id}`} >Edit</Link> <button className='btn btn-sm text-danger' onClick={(e) => deleteItem(item._id)} >Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductsTable;
