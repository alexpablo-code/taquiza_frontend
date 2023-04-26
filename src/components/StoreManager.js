
import Footer from './Footer';
import NavBar from './NavBar';
import ProductForm from './ProductForm';
import ProductsTable from './ProductsTable';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';

const StoreManager = () => {
    const navigate = useNavigate()
    const [authenticated, setAuthenticated] = useState({});
    const [menu, setMenu] = useState({});
    const [newCategory, setNewCategory] = useState({
        name:'',
        items: []
    });
    const [allItems, setAllItems] = useState([]);

        useEffect(() => {
            //so the Correct way to send a user token to verify is to send it in headers and bearers type
            //install in client side js-cookie and import Cookies form 'js-cookie'
            //const token = Cookies.get('jwtToken'); or the name of the cookie which in this case is user token
            // const headers = {
            //     Authorization: `Bearer ${token}`,
            //     'Content-Type': 'application/json',
            //   };
            
            //   axios.post('http://localhost:8000/api/register', user, { headers })
            

            axios.post('https://taquiza-api.onrender.com/api/authenticated', {}, {withCredentials:true})
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                    navigate('/');
                })

            axios.get('https://taquiza-api.onrender.com/api/allmenus/6445dad8a91166bd9534a315')
            // axios.get('http://localhost:8000/api/allmenus/6445dad8a91166bd9534a315')
                .then((menus) => {
                    console.log(menus.data);
                    setMenu(menus.data);
                })
                .catch((err) => console.log(err));

            axios.get('https://taquiza-api.onrender.com/api/allitems')
            // axios.get('http://localhost:8000/api/allitems')
                .then((items) => {
                    console.log(items.data);
                    setAllItems(items.data);
                })
                .catch((err) => console.log(err));
        }
        ,[])


        const deleteItem = (id) => {
            axios.delete(`https://taquiza-api.onrender.com/api/allitems/delete/${id}`)
            // axios.delete(`http://localhost:8000/api/allitems/delete/${id}`)
                .then((res) => {
                    console.log("item deleted", res)
                    let updatedItems= allItems.filter(item => item._id !== id)
                    setAllItems(updatedItems);
                    
                })
                .catch((err) => console.log(err));
        }

        const logout = () => {
            axios.post('https://taquiza-api.onrender.com/api/logout', {}, {withCredentials:true})
                .then((res) => {
                    console.log(res);
                    navigate('/')
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        const addCategory = (e) => {
            e.preventDefault();
            const newCategoryData = {...newCategory, menu_id: menu._id}
            console.log("THis is NEWCAREGORY",newCategoryData);
            axios.post('https://taquiza-api.onrender.com/api/addcategory', newCategoryData)
            // axios.post('http://localhost:8000/api/addcategory', newCategoryData)
                .then((newCat) => {
                    console.log({DBNEWCAT:newCat});
                    const updatedMenu = {...menu}
                    updatedMenu.categories.push(newCat.data);
                    setMenu(updatedMenu);
                    setNewCategory({
                        name:'',
                        items:''
                    })
                })
                .catch((err) => console.log(err));
                

            // const updatedMenu = [...menu];
            // updatedMenu.categories.push
        }


    return (
        <div className=''>
            <NavBar/>
            <section>
                <div className='container my-2'>
                    <div className='row'>
                        <div>
                            <h2>Welcome!</h2>
                            <p>Menu changes will be available soon</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='container d-flex justify-content-end'>
                <button className='btn btn-sm btn-primary' onClick={logout} >Logout</button>
            </div>
            <div className='categoriesTitle container'>
                {
                    menu.categories?
                    (  menu.categories.map((category) => (
                        <div key={category._id} className='my-5'>
                            <h4>{category.name}</h4>
                            <ProductsTable allItems={allItems} setAllItems={setAllItems} categoryId={category._id} deleteItem={deleteItem}/>
                            <ProductForm allItems={allItems} setAllItems={setAllItems} categoryId={category._id}/>
                        </div>
                    ))): (<><h5>Loading...</h5></>)
                }
            </div>
            <div className='container my-5'>
                <form onSubmit={addCategory} >
                    <label htmlFor="">Category Name:</label>
                    <input type="text" value={newCategory.name} onChange={(e) => setNewCategory({...newCategory, name: e.target.value})} />
                    <button className='btn btn-primary'>Add Category</button>
                </form>
            </div>
            {/* <ProductsTable allProducts={allProducts} setAllProducts={setAllProducts} deleteItem={deleteItem}/> */}
            <Footer/>
        </div>
    );
}

export default StoreManager;
