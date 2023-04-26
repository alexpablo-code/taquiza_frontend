import {useState, useEffect} from 'react';
import Footer from '../components/Footer';
import MenuContainer from '../components/MenuContainer';
import NavBar from '../components/NavBar';
import axios from 'axios';
import CategoryBox from '../components/CategoryBox';


const Menu = ({allProducts}) => {
    const [menu, setMenu] = useState({});
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
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
    }, [])



    return (
        <div>
            <NavBar/>
            <MenuContainer  allProducts={allProducts} />
            <div className='categoriesContainer'>
                {
                    menu.categories?
                    (menu.categories.map((category) => (
                        <CategoryBox category={category} allItems={allItems} key={category._id}/>
                    ))): <div><h4>Loading...</h4></div>
                }
            </div>
            <Footer/>
        </div>
    );
}

export default Menu;
