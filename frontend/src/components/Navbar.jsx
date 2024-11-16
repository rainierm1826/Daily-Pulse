import React, { useEffect, useState } from "react";
import { IoMdPulse } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, fetchUser } from "../api/user";
import { setUser, setLogout } from "../features/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userSlice);
  console.log(userInfo);

  useEffect(() => {
    const getUser = async () => {
      const userData = await fetchUser();
      dispatch(setUser(userData));
    };
    getUser();
  }, [dispatch]);

  const handleLogout = async () => {
    await logout();
    dispatch(setLogout());
  };

  return (
    <div className="bg-headline py-3 px-5 shadow-lg">
      <div className="container flex justify-between items-center">
        <div className="flex gap-1 items-center ">
          <span>
            <IoMdPulse className="text-buttonText text-2xl" />
          </span>
          <h1 className="text-buttonText text-2xl font-bold">Daily Pulse</h1>
        </div>
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/" className="navlinks">
            Features
          </Link>
          <Link to="/news" className="navlinks">
            News
          </Link>
        </div>
        <div className="hidden lg:block">
          {!userInfo.user ? (
            <button
              type="button"
              className="bg-button text-buttonText text-lg rounded-full py-1 px-5 font-bold"
              onClick={() =>
                (window.location.href = "http://localhost:5000/auth/google")
              }
            >
              Login
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <p className="text-gray-100 font-bold text-sm">
                {userInfo.user.fullName}
              </p>
              <button
                type="button"
                className="bg-button text-buttonText text-lg rounded-full py-1 px-5 font-bold"
                onClick={() => handleLogout()}
              >
                Logout
              </button>
            </div>
          )}
        </div>
        <div className="block lg:hidden">
          <button type="button">
            <TiThMenu className="text-lg text-buttonText" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
