import React from 'react';
import Footer from '../components/Footer';
import MenuContainer from '../components/MenuContainer';
import NavBar from '../components/NavBar';

const Menu = ({allProducts}) => {
    return (
        <div>
            <NavBar/>
            <MenuContainer  allProducts={allProducts} />
            <Footer/>
        </div>
    );
}

export default Menu;
