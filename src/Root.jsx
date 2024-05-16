import { createContext, useContext, useState } from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import MyProviders from "./MyProviders";

const Root = () => {
  return (
    <>
      <MyProviders>
        <div className=" flex flex-col min-h-screen">
          <ToastContainer />
          <Header />
          <div className="container flex-auto">
            <Outlet />
          </div>
          <Footer />
        </div>
      </MyProviders>
    </>
  );
};

export default Root;
