import {Link} from 'react-router-dom';
const logo = require('./images/business_logo.png')

const NavBar = () => {
    return (
        <div>
            <nav className='bg-dark'>
                <div className='container'>
                    <div className='row py-1'>
                        <div className='col-6 d-flex align-items-center'>
                            <img className='logo' src={logo} alt="business_logo" />
                            <h1><Link to={'/'} className='text-decoration-none text-white'>Taquiza Street</Link></h1>
                        </div>
                        <div className='col-4  offset-2 my-auto'>
                            <ul className='navLinks d-flex justify-content-end'>
                                <li><Link to={'/menu'} className='text-light'>Menu</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
