import React from 'react';
import ProductCard from './Productcard';


const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
       <ProductCard key={product.id} product={product} addToCart={addToCart} />
      
      ))}
    </div>
  );
};

export default ProductList;
