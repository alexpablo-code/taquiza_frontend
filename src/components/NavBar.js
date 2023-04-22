import {Link, useNavigate} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const logo = require('./images/business_logo.png')

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <header className='nav-background navbar navbar-expand-md bg-black navbar-dark'>
            <div className='navBar container-fluid px-5'>
                <img className='logo' src={logo} alt="business_logo" onClick={() => navigate('/')} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end align-center' id='main-nav'>
                    <ul className='navbar-nav'>
                        {/* <li className='nav-item'><a className='nav-link' href="#">Home</a></li> */}
                        <li className='nav-item'><Link to={'/menu'} className='nav-link'>Menu</Link></li>
                        <li className='nav-item'><HashLink smooth to='/#about' className='nav-link' href="#">About</HashLink></li>
                        <li className='nav-item'><HashLink smooth to='/#location' className='nav-link' href="#">Location</HashLink></li>
                    </ul>

                </div>

            </div>
        </header>
    );
}

export default NavBar;
