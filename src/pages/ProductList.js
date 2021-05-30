import React, { useEffect, useState } from 'react';
import fakeData from "../data.json"
import Product from './Product';

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([...fakeData.products])
        // console.log(fakeData.products)
     
    }, [])

    return (
        <div className="container">
            <div className="">

            </div>

            <div className="">
             {
                products.map(product =><Product product={product} key={product.id}></Product>)
             }

            </div>
           
        </div>
    );
};

export default ProductList;