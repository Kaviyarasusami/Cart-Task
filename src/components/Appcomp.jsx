
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import CartModal from './CartModal';



const Appcomp = () => {


    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then((response) => response.json())
          .then((data) => setProducts(data));
      }, []);
    
      const addToCart = (product) => {
        const alreadyInCart = cart.find((item) => item.id === product.id);
        if (alreadyInCart) {
          alert('Item already added to the cart');
        } else {
          setCart([...cart, product]);
        }
      };

      const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
      };

      
    return (


        <div className="App">
            <h1></h1>
        
        <Navbar cartCount={cart.length} openCart={() => setIsModalOpen(true)}/>

        
        <ProductList products={products} addToCart={addToCart} />
        {isModalOpen && (
        <CartModal  cart={cart}
        closeCart={() => setIsModalOpen(false)}
        removeFromCart={removeFromCart} /> 
        
          
        )}
      </div>
    );
  }
export default Appcomp;