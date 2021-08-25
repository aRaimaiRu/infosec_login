import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("x-auth-token");
    // const userToken = JSON.parse(tokenString);
    return tokenString;
  };
  const [token, setToken] = useState(getToken());
  
  const saveToken = (userToken) => {
    localStorage.setItem("x-auth-token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const deleteToken = () => {
    localStorage.removeItem("x-auth-token");
    window.location.reload();
  };
  return {
    setToken: saveToken,
    token,
    deleteToken,
  };
}