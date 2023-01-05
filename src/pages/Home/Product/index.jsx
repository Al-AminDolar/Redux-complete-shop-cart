import React from "react";
import SingleCard from "./SingleCard";
import dummyData from "./dummyData";

const Product = () => {
  return (
    <div>
      <div>
        <h1 className="pt-10 text-2xl font-mono font-semibold">
          Welcome To Biggest Online{" "}
          <span className="text-orange-400 text-3xl">E-Shop</span>
        </h1>
      </div>

      <div className=" p-20 grid grid-cols-5 gap-4 ">
        {dummyData.map((product) => (
          <SingleCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
