import React from 'react';
import Footer from './Footer';
import MenuContainer from './MenuContainer';
import NavBar from './NavBar';

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
