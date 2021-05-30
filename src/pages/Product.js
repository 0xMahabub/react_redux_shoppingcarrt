import { specialChars } from '@testing-library/user-event';
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = (props) => {
    const {id, name, image, price, specs} = props.product;
    return (
        <Card className="">
            <Card.Img variant="top" style={{maxWidth:'200px'}} src={image}/>
            <Card.Body>
            <Card.Title>{name} <small>{specs.weight}</small></Card.Title>
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