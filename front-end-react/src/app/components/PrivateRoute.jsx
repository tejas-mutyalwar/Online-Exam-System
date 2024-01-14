import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../services/login-service";

const PrivateRoute = () => {
	return isLoggedIn() ? <Outlet /> : <Navigate to={"/login"} /> 
};

export default PrivateRoute;
