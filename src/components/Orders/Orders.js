import React from 'react';
import useProducts from '../../hooks/useProducts';
import "./Orders.css"

const Orders = () => {
    const [products, setProducts] = useProducts()
    return (
        <div>
            <h2>this is order page!!: {products.length}</h2>
        </div>
    );
};

export default Orders;