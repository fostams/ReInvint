import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

import './Header.scss';

function Header() {
    return (
        <header className='nav page-margins'>
            <Link to="/" className='nav__hyperlink'>
                <img src={logo} className='nav__logo' alt='ReInvint Logo' />
            </Link>
            {/* <div className='nav__cta-wrapper'>
                <form className='nav__search-wrapper'>
                    <img src={searchIcon} className='nav__search-icon' alt='Search Icon' />
                    <input className='nav__search' type='search' placeholder='Search'></input>
                </form>
                <img src={avatar} className='nav__avatar' alt='Profile Avatar' />
                <Link to="/upload" className='nav__button'>
                    <img src={uploadIcon} className='nav__button-icon' alt='Upload Icon' />
                    <span className='nav__button-text'>UPLOAD</span>
                </Link>
            </div> */}
        </header>
    );
}

export default Header;