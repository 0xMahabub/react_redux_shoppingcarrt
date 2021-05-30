import React from 'react';
import { Card } from 'react-bootstrap';
import { AppContainer, ProductItem } from '../Global';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cart';

const Product = ({ product, addToCart }) => {
    const {name, image, price, specs} = product;

    // console.log("_cart_", cart);

    return (
        <AppContainer>
            <ProductItem>
                <Card className="product_top">
                    <Card.Img variant="top" src={image}/>
                    <div className="pd_data">
                        <Card.Body>
                            <Card.Title>{name} <small>{specs.weight}</small></Card.Title>
                        </Card.Body>
                        <Card.Footer className="pd_info">
                            <h4>{`$` + price}</h4>
                            <button 
                                onClick={() => addToCart(product)}
                                type="button" 
                                className="btn-add"
                            >
                                add to cart
                            </button>
                        </Card.Footer>
                    </div>
                </Card>
            </ProductItem>
        </AppContainer>
        
    );
};


// const mapStateToProps = state => {
//     return {
//         cart: state.cart,
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         addProduct: addToCart,
//     }
// }



export default connect(null, { addToCart })(Product);