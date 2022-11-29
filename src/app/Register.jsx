import { Button, Form, Input } from "antd";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import http from "../api";

export const Register = () => {
  const navigate = useNavigate();
  const handleRegister = async (values) => {
    try {
      const response = await http.post("register", values);
      console.log(response);
      sessionStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="login-container wrapper">
      <div className="login">
        <div className="login-form">
          <img src="./dist/images/vf-logo2.png" alt="logo" width={150} />
          <h1>MENTAL HEALTH PLATFORM</h1>
          <br />
          <Form
            name="register"
            layout="vertical"
            requiredMark={false}
            size="large"
            style={{ margin: 30 }}
            onFinish={handleRegister}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input
                type="text"
                placeholder="Choose your prefered username"
                prefix={<i className="fa fa-user"></i>}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input.Password
                placeholder="Choose your password"
                prefix={<i className="fa fa-lock"></i>}
              />
            </Form.Item>
            <Form.Item
              name="confirm_password"
              rules={[
                {
                  required: true,
                  message: "",
                },
              ]}
            >
              <Input.Password
                placeholder="Confirm your password"
                prefix={<i className="fa fa-lock"></i>}
              />
            </Form.Item>
            <Form.Item>
              <Button
                className="login-btn"
                type="danger"
                size="large"
                htmlType="submit"
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>
          <NavLink to="/login">Login</NavLink>
          <br />
          <br />
          <NavLink to="/help">Help & Support</NavLink>
        </div>
      </div>
    </div>
  );
};
