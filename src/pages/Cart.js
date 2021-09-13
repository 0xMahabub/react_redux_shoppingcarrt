import React from 'react';
import { connect } from 'react-redux';
import { AppContainer, CartPage, CartItem } from '../Global';
import { AiOutlineDelete } from 'react-icons/ai'
import { removeFromCart } from '../redux/actions/cart';


const Cart = ({ cart, removeFromCart }) => {


    return (
        <AppContainer>
            <h1>This is Cart Page</h1>

            <CartPage>
                <h1 style={{textAlign: 'right'}}>Total items: {cart.cart?.length}</h1>
                {
                    cart.cart?.length < 1 && <p style={{ textAlign: 'center' }}>Your cart is empty!</p>
                }

                {
                    cart.cart?.length > 0 && cart.cart?.map(pd => (
                        <CartItem key={pd.id}>
                            <div>
                                <img src={pd.image} alt="product_img" />
                                <p>{pd.name}</p>
                                <small>{pd.specs.weight}</small>
                                <p>{`$`+pd.price}</p>
                            </div>

                            <div className="cart_actions">
                                <p>qty: {pd.qty}</p>
                                <button type="button" onClick={() => removeFromCart(pd)}><AiOutlineDelete /></button>
                            </div>
                        </CartItem>
                    ))
                }

            </CartPage>
        </AppContainer>
    );
};




const mapStateToProps = state => {
    return {
        cart: state.cart,
    }
}

export default connect(mapStateToProps, { removeFromCart })(Cart);