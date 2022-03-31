import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product =>{
        console.log(product);
    }

  return (
    <div className="shop-container">
      <div className="review-items-container">
          {
              cart.map(product => <ReviewItem 
                product={product} 
                key={product.id} 
                handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
          }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};
export default Orders;
