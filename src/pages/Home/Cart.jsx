import React from "react";
import { useSelector } from "react-redux";
import SingleCard from "./Product/SingleCard";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className=" p-20 grid grid-cols-5 gap-4 ">
      {cart.cart.map((product) => (
        <SingleCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Cart;
