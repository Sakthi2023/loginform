/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const validUsername = "username";
    const validPassword = "password";
    var { username, password } = document.forms[0];
    if (validUsername !== username.value || validPassword !== password.value) {
      setError("username and password incorrect");
    } else {
      alert("login successfull");
      setError("");
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input name="username" type="text" />
        </div>
        <div>
          <label>Password:</label>
          <input name="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
