import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    //to show the cart info from local storage.
    useEffect(()=>{
        const storedCart = getStoredCart();
        for(const id in storedCart){
            //finding the product according to the id.
            const addedProduct = products.find(product => product.id === id)
            //below here: when the added data will be truthy, the data will be loaded.
            if(addedProduct){
                const quantity = storedCart[id]
            }
            
        }
        //dependency injection: this effect is dependent on products. 
        //here, one time the code will run without the value of the products then second time, when the product value will come, the useEffect will run again.
    },[products])

    //event handler. (this is called lift up the state)
    const handleAddToCard = (product) =>{
        console.log(product);
        const newCart = [...cart,product];//highly important
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key = {product.id}
                        product = {product}
                        handleAddToCard ={handleAddToCard}
                    >

                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;