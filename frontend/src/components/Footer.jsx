import React from "react";
import { IoMdPulse } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-headline py-5 px-3 mt-10">
      <div className="container">
        <div className="flex flex-col gap-5 justify-between items-center sm:flex-row">
          <div>
            <div className="flex gap-1 items-center ">
              <span>
                <IoMdPulse className="text-buttonText text-sm" />
              </span>
              <h1 className="text-buttonText text-sm font-bold">Daily Pulse</h1>
            </div>
            <div>
              <h2 className="text-buttonText text-4xl font-bold text-center">
                Stay Informed, Stay Ahead
              </h2>
            </div>
          </div>
          <div className="grid gap-5">
            <div className="flex items-center gap-1">
              <h2 className="text-buttonText text-2xl font-bold uppercase">
                Login
              </h2>
              <p className="text-buttonText text-sm">To Daily Pulse</p>
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-buttonText font-bold text-sm"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="marasiganrainier2@gmail.com"
                className="p-2 focus:outline-none rounded-lg"
              />
            </div>
          </div>
        </div>
        <hr className="my-10" />

        <div className="grid grid-cols-2 place-items-start gap-10 sm:grid-cols-5">
          <div>
            <ul className="flex flex-col gap-5">
              <li className="text-buttonText font-semibold text-lg uppercase">
                Home
              </li>
              <li className="text-gray-50 font-normal text-sm">Politcs</li>
              <li className="text-gray-50 font-normal text-sm">World</li>
              <li className="text-gray-50 font-normal text-sm">Health</li>
              <li className="text-gray-50 font-normal text-sm">Business</li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-5">
              <li className="text-buttonText font-semibold text-lg uppercase">
                Entertainment
              </li>
              <li className="text-gray-50 font-normal text-sm">K-Pop</li>
              <li className="text-gray-50 font-normal text-sm">Gaming</li>
              <li className="text-gray-50 font-normal text-sm">Arts</li>
              <li className="text-gray-50 font-normal text-sm">Travels</li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-5">
              <li className="text-buttonText font-semibold text-lg uppercase">
                Country
              </li>
              <li className="text-gray-50 font-normal text-sm">U.S</li>
              <li className="text-gray-50 font-normal text-sm">Philippines</li>
              <li className="text-gray-50 font-normal text-sm">Korea</li>
              <li className="text-gray-50 font-normal text-sm">Rusia</li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-5">
              <li className="text-buttonText font-semibold text-lg uppercase">
                Category
              </li>
              <li className="text-gray-50 font-normal text-sm">Business</li>
              <li className="text-gray-50 font-normal text-sm">Sports</li>
              <li className="text-gray-50 font-normal text-sm">General</li>
              <li className="text-gray-50 font-normal text-sm">Health</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-5">
              <li className="text-buttonText font-semibold text-lg uppercase">
                Sources
              </li>
              <li className="text-gray-50 font-normal text-sm">ESPN</li>
              <li className="text-gray-50 font-normal text-sm">ABC News</li>
              <li className="text-gray-50 font-normal text-sm">TechRadar</li>
              <li className="text-gray-50 font-normal text-sm">Time</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
