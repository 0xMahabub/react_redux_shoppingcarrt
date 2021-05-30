import React from 'react';
import { Card } from 'react-bootstrap';

const Product = (props) => {
    const {id, name, image, price} = props.product;
    return (
        <Card>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <div className="">
                    <h4>{price}</h4>
                </div>
                <div className="">
                    <Button>BUY NOW</Button>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default Product;