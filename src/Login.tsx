import React from "react";
import Button from "./components/Button";

const Login: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        marginTop: "60px",
      }}
    >
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        style={{ marginBottom: "10px", padding: "8px", width: "200px" }}
      />
      <input
        type="password"
        placeholder="Password"
        style={{ marginBottom: "10px", padding: "8px", width: "200px" }}
      />
      <Button ButtonName="Login" />
    </div>
  );
};

export default Login;
