import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Config/fb.config";

export const AuthData = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleAuth = new GoogleAuthProvider();
  const googleProvider = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuth);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      const userInfo = {
        email: user?.email,
      };
      fetch("https://doctor-medical-server-hayatemraan.vercel.app/twt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => localStorage.setItem("user", data.token));
    });
    return unsubscribe;
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logOut,
    googleProvider,
  };

  if (loading) {
    <div className="mx-auto container">
      <progress className="progress w-56"></progress>
    </div>;
  } else {
    return <AuthData.Provider value={authInfo}>{children}</AuthData.Provider>;
  }
};

export default AuthContext;
