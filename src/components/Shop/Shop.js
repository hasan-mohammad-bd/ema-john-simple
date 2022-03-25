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
        const savedCart = [];
        for(const id in storedCart){
            //finding the product according to the id.
            const addedProduct = products.find(product => product.id === id)
            //below here: when the added data will be truthy, the data will be loaded.
            //when first time(without dependency) loaded, the addedProduct come up with undefined. 
            if(addedProduct){
                //this ID is coming from loop.
                const quantity = storedCart[id];
                //there is a quantity inside the products object.
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }

            setCart(savedCart);
            
        }
        //dependency injection: this effect is dependent on products. 
        //here, one time the code will run without the value of the products then second time, when the product value will come, the useEffect will run again.
    },[products])

    //event handler. (this is called lift up the state)
    const handleAddToCard = (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart,selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }

        setCart(newCart);
        addToDb(selectedProduct.id)
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