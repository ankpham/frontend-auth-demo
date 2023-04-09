import React from 'react';
import { useAuth } from "../hooks/useAuth";

export const LoginPage = () => {

    const { login } = useAuth();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      login({
        email: "email",
        password: "password"
      });
    };
    return (
        <div>
          <h1>This is the Login Page</h1>
          <button onClick={handleSubmit}>Login</button>
        </div>
    )
};