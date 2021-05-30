import React, { useEffect, useState } from 'react';
import fakeData from "../data.json"
import Product from './Product';
import { AppContainer } from '../Global';


const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([...fakeData.products])
        // console.log(fakeData.products)
    }, [])

    return (
        <AppContainer>
            <div className="container">
                <div className="side_bar">

                </div>

                <div className="product_area">
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }

                </div>

            </div>
        </AppContainer>
    );
};

export default ProductList;