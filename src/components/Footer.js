import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className='bg-dark footer'>
                <div className='container'>
                    <div className='row py-3'>
                        <div className='col-5'>
                            <Link to={'/manager-register'} >Store Manager</Link>
                        </div>
                        <div className='col-5 offset-2'>
                            <p className='text-white text-end'>©️ 2023 Taquiza Street <br/> Website by <Link>Alex Pablo</Link></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
