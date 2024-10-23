import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.title} className="h-40 w-full object-contain" />
      <h2 className="text-lg font-bold mt-2">{product.title}</h2>
      <p className="text-gray-600 mt-1">${product.price}</p>
      <button
        className="bg-blue-500 text-white mt-4 py-2 px-4 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
