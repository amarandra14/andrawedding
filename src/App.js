import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Header, Fitur, Harga, Accordion, Pembayaran } from "./container";

import { Navbar } from "./components";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase-config";

const App = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  console.log(user)

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<LandingPage user={user} />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route
          element={user ? <Dashboard /> : <LandingPage />}
          path="/dashboard"
        />
      </Routes>
    </>
  );
};

export default App;
