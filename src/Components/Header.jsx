import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { useState } from "react";
import { authContext } from "../MyProviders";


const Header = () => {
  const { userToken,removeToken} = useContext(authContext);

  return (
    <header className="sticky top-0 bg-slate-50 z-50 box_shadow px-4 md:px-28">
      <nav className="flex justify-between border-b-2 border-gray-100 md:border-0 mt-2 py-3">
        <ul className="flex  font-bold md:text-xl items-center md:py-5 gap-2 md:gap-10">
          <li className="navItem">
            <NavLink to="/">
              <img src={logo} className="" alt="entry news logo " />
            </NavLink>
          </li>
          <li className="navItem  hidden md:block">
            <NavLink to="/trending">Trending</NavLink>
          </li>
          <li className="navItem hidden md:block">
            <NavLink to="blogs">Blogs</NavLink>
          </li>
          <li className="navItem hidden md:block">
            <NavLink to="/new">New</NavLink>
          </li>
        </ul>
        <ul className="flex font-bold md:text-xl items-center md:py-5 gap-1 md:gap-4">
          {!userToken ? (
            <>
              <li className="button bg-red-500">
                <NavLink className='p-2' to="/signup">SignUp</NavLink>
              </li>
              <li className="navItem button ">
                <NavLink className='p-3' to="/login">Login</NavLink>
              </li>
            </>
          ) : (
            <li className="navItem button bg-red-500">
              <NavLink className='p-4' onClick={removeToken}>Logout</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <nav>
        <ul className="flex  font-bold md:text-xl items-center gap-4 ms-5 justify-center md:gap-10 py-2 md:hidden ">
          <li className="navItem">
            <NavLink to="/trending">Trending</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="blogs">Blogs</NavLink>
          </li>
          <li className="navItem">
            <NavLink to="/new">New</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
