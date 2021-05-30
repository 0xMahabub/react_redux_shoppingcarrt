import { specialChars } from '@testing-library/user-event';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { AppContainer, ProductItem } from '../Global';


const Product = (props) => {
    const {name, image, price, specs} = props.product;
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
                            <h4>{price}</h4>
                            <button type="button" className="btn-add">
                                add to cart
                            </button>
                        </Card.Footer>
                    </div>
                </Card>
            </ProductItem>
        </AppContainer>
        
    );
};

export default Product;