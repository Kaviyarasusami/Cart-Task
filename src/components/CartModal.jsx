import React from 'react';

const CartModal = ({ cart, closeCart, removeFromCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold mb-4">Cart Items</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between mb-2">
                <div>{item.title}</div>
                <button
                  className="text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          className="bg-gray-300 text-black mt-4 py-2 px-4 rounded"
          onClick={closeCart}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
