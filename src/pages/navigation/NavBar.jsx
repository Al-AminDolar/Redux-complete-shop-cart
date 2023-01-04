import React from "react";
import { Link } from "react-router-dom";

const NabBar = () => {
  return (
    <div>
      <nav className=" bg-sky-200 text-end ">
        <ul className=" p-6 pr-10 flex gap-2  justify-end">
          <Link className="border rounded-md px-5 py-1" to="/home">
            Home
          </Link>
          <Link className="border rounded-md px-5 py-1" to="/product">
            Product
          </Link>
          <Link className="border rounded-md px-5 py-1" to="/cart">
            Cart
          </Link>
          <Link className="border  rounded-md px-5 py-1" to="/about">
            About
          </Link>
          <Link className="border  rounded-md px-5 py-1" to="/login">
            Login
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NabBar;
