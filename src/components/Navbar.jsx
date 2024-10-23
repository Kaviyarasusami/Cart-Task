import React from 'react';

const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between">
      <div className="text-white text-lg">CartModel</div>
      <div className="text-white cursor-pointer" onClick={openCart}>
        Cart ({cartCount})
      </div>
    </nav>
  );
};

export default Navbar;