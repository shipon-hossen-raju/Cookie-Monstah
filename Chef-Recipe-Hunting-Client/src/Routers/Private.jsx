import React, { useContext } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../Loading/LoadingSpinner";

const Private = ({ children }) => {
	const { user, isLoading } = useContext(AuthContext);
	const location = useLocation();

	if (isLoading) {
		return <LoadingSpinner />;
	}

	if (user) {
		return children;
	}

	return <Navigate state={{ from: location }} to="/login" replace />;
};

export default Private;
