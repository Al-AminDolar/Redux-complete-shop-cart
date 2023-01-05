import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };
  return (
    <div className="flex justify-center items-center">
      <div className=" p-10 border rounded-md shadow-md m-20 ">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onSubmitCapture={(e) => handleSubmit(e)}
        >
          <div className="pb-10">
            <span className="text-2xl font-semibold font-mono">Login</span>
          </div>
          <Form.Item
            value={name}
            name="username"
            onChange={(e) => setName(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Emial"
            />
          </Form.Item>
          <Form.Item
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <span>
              {" "}
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </span>

            <span>
              <Link className="login-form-forgot text-blue-500" to="">
                Forgot password
              </Link>
            </span>
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" className="login-form-button w-[50%]">
              Log in
            </Button>
            <br />
            Or <Link to="">register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
