import {
  DownOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout, selectUser } from "../../redux/slice/userSlice";

const NabBar = () => {
  const cart = useSelector((state) => state.cart);
  // console.log();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(
      logout({
        loggedIn: false,
      })
    );
  };
  const user = useSelector(selectUser);

  const items = [
    {
      label: (
        // <a href="https://www.antgroup.com">
        //   {" "}
        <div className="grid text-start">
          <h1 className="font-mono font-bold">Lamisa</h1>
          <span className="text-xs font-mono font-semibold text-green-500">
            BestCustomer
          </span>
        </div>
        // </a>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        // <a href="https://www.antgroup.com">
        //   {" "}
        <div className="flex  items-center gap-2">
          <Button
            onClick={() => handleSubmit()}
            className="font-mono font-bold"
          >
            Logout
          </Button>
          <LogoutOutlined />
        </div>
        // </a>
      ),
      key: "2",
    },
  ];
  return (
    <div>
      <nav className=" bg-white text-end shadow-md flex items-center justify-between ">
        <div className="pl-20 text-3xl font-mono font-bold flex items-center">
          <h1 className="flex items-baseline ">
            Ladies{" "}
            <span className="text-orange-500 text-5xl flex ">
              Shop <ShoppingOutlined />
            </span>
          </h1>

          <Link to="/cart">
            <span
              className="pl-10"
              style={{ color: "green", fontSize: "40px" }}
            >
              <ShoppingCartOutlined className="relative" />
              <Badge
                className=" absolute pr-10"
                size="small"
                count={cart.cart.length}
              ></Badge>
            </span>
          </Link>
        </div>

        <ul className=" p-6 pr-20 flex gap-2 items-center justify-end">
          <Button>
            <Link to="/product">Product</Link>
          </Button>

          <Button>
            <Link to="/about">About</Link>
          </Button>
          {user ? (
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <Space>
                <Link>
                  {" "}
                  <div className="flex items-center gap-2">
                    <div>
                      <Avatar
                        style={{
                          backgroundColor: "#87d068",
                        }}
                        icon={<UserOutlined />}
                      />
                    </div>
                    <div className="grid text-start">
                      <h1 className="font-mono font-bold">{user.name}</h1>
                      <span className="text-xs font-mono font-semibold text-green-500">
                        BestCustomer
                      </span>
                    </div>
                  </div>
                </Link>
              </Space>
            </Dropdown>
          ) : (
            <Button>
              <Link to="/">Login</Link>
            </Button>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NabBar;
