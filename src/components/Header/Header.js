import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="logo_area">

            </div>
            <div className="menu_area">
                <ul>
                    <li> <Link to='/'>Home</Link> </li>
                    <li> <Link to='/cart'>Cart</Link> </li>
                    <li> <Link to='/checkout'>Checkout</Link></li>   
                </ul>
            </div>
        </div>
    );
};

export default Header;