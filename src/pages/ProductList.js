import React, { useEffect, useState } from 'react';
import fakeData from "../data.json"

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(fakeData)
    }, [])

    return (
        <div className="container">
            <div className="">

            </div>

            <div className="">
             {
                products.map(product =><Product product={product} key={id}></Product>)
             }

            </div>
           
        </div>
    );
};

export default ProductList;