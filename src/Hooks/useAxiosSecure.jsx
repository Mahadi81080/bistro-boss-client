import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-srver.vercel.app",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logOut}=useAuth()
  // request interceptor to add authorization header for every secure call to the api
  useEffect(()=>{
    axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem("access-token");
        // console.log("request stopped by interceptor", token);
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );
    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      async(error) => {
        const status = error.response.status;
        // console.log("statue error in the interceptor", status);
        // for 401 and 403 logout the user and move the user to the login page 
        if (status === 401 || status === 403) {
          await logOut()
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  },[logOut,navigate])
 
  return [axiosSecure];
};

export default useAxiosSecure;
