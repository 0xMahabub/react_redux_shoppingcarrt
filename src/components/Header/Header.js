import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrap } from './styled';
import { AppContainer } from '../../Global';
import { FiShoppingCart, FiHome } from 'react-icons/fi';
import { connect } from 'react-redux';

const Header = ({ cart }) => {

    // console.log("cart_", cart);

    return (
        <HeaderWrap>
            <AppContainer header>
                <div className="logo_area">
                    <span>greengrocy<span className="logo_dot">.</span></span>
                </div>

                <ul className="menu_area">
                    <li> <Link to='/'><span>Home</span> <FiHome /></Link> </li>
                    <li> <Link to='/cart'><span>Cart</span> <FiShoppingCart /> ({ cart.length })</Link> </li>
                </ul>
            </AppContainer>
        </HeaderWrap>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
    }
}

export default connect(mapStateToProps, null)(Header);