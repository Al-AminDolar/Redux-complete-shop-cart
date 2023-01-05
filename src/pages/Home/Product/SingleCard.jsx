import { Alert, Button, Card, notification, Space } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";

const SingleCard = ({ product }) => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Successful",
    });
  };
  return (
    <div>
      <Card className="border" hoverable style={{ width: 300, height: 350 }}>
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
          <div>
            {contextHolder}
            <Button onClick={() => openNotificationWithIcon("success")}>
              Add
            </Button>
          </div>
        </div>
        {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
      </Card>
    </div>
  );
};

export default SingleCard;
