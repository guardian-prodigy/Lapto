import React from "react";
import authFetch from "./custom";

export const authFetch = () => {
  const authFetch = axios.create({
    baseURL: "https://course-api.com",
  });
};
authFetch.interceptors.request.use(
    (request) => {
        request.headers.common["Accept"] = "application/json"
        console.log("request sent");
  },
    (error) => {
      return Promise.reject(error)
  }
);
authFetch.interceptors.request.use(
    (response) => {
        
  },
    (error) => {
     console.log(error.response);
  }
);
