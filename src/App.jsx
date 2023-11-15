import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navber from "./components/common/Navber";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Navber />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
