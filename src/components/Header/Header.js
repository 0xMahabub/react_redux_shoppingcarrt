import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrap } from './styled';
import { AppContainer } from '../../Global';

const Header = () => {
    return (
        <HeaderWrap>
            <AppContainer header>
                <div className="logo_area">
                    <span>greengrocy<span className="logo_dot">.</span></span>
                </div>

                <ul className="menu_area">
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/cart'>Cart</Link> </li>
                    <li> <Link to='/checkout'>Checkout</Link></li>   
                </ul>
            </AppContainer>
        </HeaderWrap>
    );
};

export default Header;