import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
    const [cart, useCart]= useState([]);

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
    },[])
}