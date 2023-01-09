import React from "react";
import { useSelector } from "react-redux";

import SingleCard from "./Product/SingleCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const short = cart.cart;

  return (
    <div className="flex  ">
      {short.length === 0 && (
        <h1 className="text-3xl font-mono font-semibold flex items-center justify-center">
          Sorry Your Cart is Empty
        </h1>
      )}

      <div className="grid grid-cols-4 gap-4 ">
        {short.map((product) => (
          <SingleCard key={product._id} product={product} />
        ))}
      </div>

      <div className="static h-[1000px] bg-orange-100 w-[400px] text-2xl pt-5 font-mono font-semibold">
        Invoice
      </div>
    </div>
  );
};

export default Cart;
