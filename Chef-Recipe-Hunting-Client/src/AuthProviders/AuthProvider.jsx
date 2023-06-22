import {
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [isLoading, setLoading] = useState(true);
	const auth = getAuth(app);

	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	const googleLogin = () => {
		return signInWithPopup(auth, googleProvider);
	};

	const githubLogin = () => {
		return signInWithPopup(auth, githubProvider);
	};

	const registrationUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => {
			return unsubscribe();
		};
	}, []);

	const authInfo = {
		user,
		setUser,
		googleLogin,
		githubLogin,
		registrationUser,
		logOut,
		signIn,
		isLoading,
		setLoading,
	};

	return (
		<AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>
	);
};

export default AuthProvider;
