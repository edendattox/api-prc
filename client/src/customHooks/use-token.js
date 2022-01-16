import { useState } from "react";

export const useToken = () => {
  const [token, setTokenInternal] = useState(() => {
    try {
      const item = window.localStorage.getItem("token");
      return item;
    } catch (error) {
      console.log(error);
    }
  });

  const setToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setTokenInternal(newToken);
  };

  return [token, setToken];
};
