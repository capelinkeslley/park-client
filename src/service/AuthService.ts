import { useEffect } from "react";
import { IUserLogin, IUserSignUp } from "../commons/interfaces";
import { api } from "../lib/axios";

const signup = (user: IUserSignUp) => {
  return api.post('/users', user);
}

const login = (user: IUserLogin) => {
  return api.post('/login', user);
}

const isAuthenticated = () => {
  const token = localStorage.getItem('token');

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("tem toke?")
      console.log(token);
    }, 10000);
      return () => clearTimeout(timeout);
  }, [token]);
  
  if(token){
    api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`;
  }

  return true;
}

const AuthService = {
  signup,
  login,
  isAuthenticated,
}

export default AuthService;