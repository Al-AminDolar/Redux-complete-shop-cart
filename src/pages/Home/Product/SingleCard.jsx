import { Button, Card, notification } from "antd";

import React from "react";
import { useDispatch } from "react-redux";
import { addTocart, removeFromCart } from "../../../redux/slice/cartSlice";
import { useLocation } from "react-router-dom";

const SingleCard = ({ product }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Successful",
    });
  };
  return (
    <div>
      <Card className="border" hoverable style={{ width: 300, height: 350 }}>
        {pathname.includes("cart") && (
          <div className="rounded-full grid place-items-center absolute top-2 right-2 bg-indigo-500 text-white h-8 w-8 font-bold ">
            <p> {product.quantity} </p>
          </div>
        )}
        <div>
          <img className="h-60 w-60 p-3" alt="" src={product.url} />
        </div>
        <div className="flex justify-between">
          <div className="text-start">
            <h1 className="font-bold">{product.title}</h1>
            <p className="text-xs font-semibold">
              Price: <span className="text-orange-500">{product.price}</span> $
            </p>
          </div>
          {!pathname.includes("cart") && (
            <div>
              {contextHolder}

              <Button
                onClick={() =>
                  dispatch(addTocart(product)) &
                  openNotificationWithIcon("success")
                }
              >
                Add
              </Button>
            </div>
          )}
          {pathname.includes("cart") && (
            <div>
              {contextHolder}

              <Button
                onClick={() =>
                  dispatch(removeFromCart(product)) &
                  openNotificationWithIcon("success")
                }
              >
                Remove
              </Button>
            </div>
          )}
        </div>
        {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
      </Card>
    </div>
  );
};

export default SingleCard;
