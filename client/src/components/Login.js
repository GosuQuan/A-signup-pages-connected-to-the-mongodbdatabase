import React from "react";
import { Form, Button } from "react-bootstrap";
import { useInfo } from "../hooks/userProvider";
import axios from "axios";
function Login() {
  const userInfo = useInfo();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5050/login",{userInfo:userInfo})
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Account:</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              userInfo.setAccount(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => {
              userInfo.setPassword(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button type="submit">Enter</Button> <a href="/register">Register</a>
      </Form>
    </div>
  );
}

export default Login;
