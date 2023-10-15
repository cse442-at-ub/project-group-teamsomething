import React from "react";
import { useNavigate } from "react-router-dom";

import interaction from "../../assets/1interactions.png";
import goals from "../../assets/2goals.png";
import handshake from "../../assets/2handshake.png";
import money from "../../assets/2money.png";
import weights from "../../assets/2weights.png";
import calendar from "../../assets/3calendar.png";
import checklist from "../../assets/3checklist.png";
import friends from "../../assets/3friends.png";
import group from "../../assets/3group.png";
import therapy from "../../assets/3therapy.png";
import logo from "../../assets/logo.png";

const Public = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-full bg-[#662c91] flex flex-col font-sans">
        {/* navigation */}
        <div className="mx-6 md:mx-12 lg:mx-24 my-6 md:my-8 lg:my-12 flex items-center">
          <div className="flex-1 flex items-center justify-start text-3xl sm:text-4xl md:text-5xl font-black text-left text-[#ff3737]">
            Oathopal
          </div>
          <div className="flex-1 flex items-center justify-end">
            <ul className="flex space-x-4 sm:space-x-6 md:space-x-10 text-white items-center">
              <li className="flex items-center capitalize font-medium sm:font-semibold md:font-bold text-sm sm:text-base md:text-lg">
                How it works
              </li>
              <li className="flex items-center font-medium sm:font-semibold md:font-bold text-sm sm:text-base md:text-lg">
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
              </li>
              <li className="flex items-center">
                <button
                  className="text-lg sm:text-xl md:text-2xl font-bold rounded-md bg-[#FF3737] px-3 sm:px-4 md:px-4 py-1 sm:py-2 md:py-2"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Sign up
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Top page */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 text-white p-6 md:p-12 lg:p-12 xl:px-40 xl:py-20 2xl:px-52 mb-12">
            <div className="text-lg sm:text-1xl md:text-2xl lg:text-3xl font-semibold mb-4">
              Fight procrastination.
            </div>
            <div className="text-lg sm:text-1xl md:text-2xl lg:text-3xl font-semibold mb-4">
              Get a buddy.
            </div>
            <div className="text-lg sm:text-1xl md:text-2xl lg:text-3xl font-semibold mb-4">
              Build lasting friendship!
            </div>
            <div className="text-md sm:text-lg md:text-xl lg:text-2xl font-light mb-4">
              Our accountability app will help you break through your current
              habits and make you a superb leader!
            </div>
            <button
              className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold rounded-md bg-[#FF3737] px-4 py-2 mt-4 md:mt-0"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign Up Today
            </button>
          </div>
          <div className="flex-1 mt-6 md:mt-0 mr-20 flex flex-col justify-end">
            <img
              className="w-full"
              src={interaction}
              alt="Description of the interaction"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="h-full px-6 md:px-28 py-4 md:py-8">
        <div className="mb-8 md:mb-12">
          <p className="text-4xl font-bold text-black text-center">
            Our Results
          </p>
        </div>
        <ul className="mx-6 md:mx-28 my-8 md:my-12 flex flex-col space-y-14 md:space-y-0 md:space-x-4 md:flex-row">
          <li className="flex flex-col items-center mb-6 md:mb-0 md:flex-1 text-center">
            <img
              className="w-6/12 mb-4 md:mb-6 shadow-sm"
              src={handshake}
              alt="Handshake Icon"
            ></img>
            <p className="text-3xl font-bold text-black">500k</p>
            <p className="text-2xl font-semibold text-black">
              Partners created
            </p>
          </li>
          <li className="flex flex-col items-center mb-6 md:mb-0 md:flex-1 text-center">
            <img
              className="w-6/12 mb-4 md:mb-6 shadow-sm"
              src={goals}
              alt="Goals Icon"
            ></img>
            <p className="text-3xl font-bold text-black">900k</p>
            <p className="text-2xl font-semibold text-black">Goals hit</p>
          </li>
          <li className="flex flex-col items-center mb-6 md:mb-0 md:flex-1 text-center">
            <img
              className="w-6/12 mb-4 md:mb-6 shadow-sm"
              src={weights}
              alt="Weights Icon"
            ></img>
            <p className="text-3xl font-bold text-black">920k</p>
            <p className="text-2xl font-semibold text-black">Habits formed</p>
          </li>
          <li className="flex flex-col items-center mb-6 md:mb-0 md:flex-1 text-center">
            <img
              className="w-6/12 mb-4 md:mb-6 shadow-sm"
              src={money}
              alt="Money Icon"
            ></img>
            <p className="text-3xl font-bold text-black">$870M</p>
            <p className="text-2xl font-semibold text-black">On the line</p>
          </li>
        </ul>
      </div>

      {/* 3rd group */}
      <div className="bg-[#662c91] h-full">
        <p className="pt-24 pb-12 text-4xl font-bold text-white text-center capitalize">
          How does it work?
        </p>

        {/* Calendar */}
        <div className="flex flex-col md:flex-row-reverse">
          <div className="flex-1 text-white p-6 md:p-12 lg:pr-44">
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-4">
              Select a time frame you want to achieve your goals by!
            </p>
            <p className="text-md font-light text-white mb-4">
              First you have to select a time frame that you want to complete
              your goal by! This ensures that our matching system finds the best
              partner for you
            </p>
            <button
              className="text-sm sm:text-md md:text-lg lg:text-xl font-bold rounded-md bg-[#FF3737] px-4 py-2"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign Up Today
            </button>
          </div>
          <div className="flex-1 md:p-12 flex flex-col justify-center items-center">
            <img
              className="max-h-80 w-auto"
              src={calendar}
              alt="Description of the interaction"
            />
          </div>
        </div>

        {/* friends */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 text-white p-6 md:p-12 lg:pl-44">
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-4">
              Get instantly matched with a friend or a stranger!
            </p>
            <p className="text-md font-light text-white mb-4">
              Find someone that you find interesting and get matched with them!
              This person will most likely be aligned to your interests and
              goals!
            </p>
            <button
              className="text-sm sm:text-md md:text-lg lg:text-xl font-bold rounded-md bg-[#FF3737] px-4 py-2"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign Up Today
            </button>
          </div>
          <div className="flex-1 md:p-12 flex flex-col justify-center items-center">
            <img
              className="max-h-80 w-auto"
              src={friends}
              alt="Description of the interaction"
            />
          </div>
        </div>

        {/* Therapy */}
        <div className="flex flex-col md:flex-row-reverse">
          <div className="flex-1 text-white p-6 md:p-12 lg:pr-44">
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-4">
              Break the ice with your partner!
            </p>
            <p className="text-md font-light text-white mb-4">
              Introduce yourselves through a video or a phone call first! This
              is crucial in getting to know someone better!
            </p>
            <button
              className="text-sm sm:text-md md:text-lg lg:text-xl font-bold rounded-md bg-[#FF3737] px-4 py-2"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign Up Today
            </button>
          </div>
          <div className="flex-1 md:p-12 flex flex-col justify-center items-center">
            <img
              className="max-h-80 w-auto"
              src={therapy}
              alt="Description of the interaction"
            />
          </div>
        </div>

        {/* group */}
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 text-white p-6 md:p-12 lg:pl-44">
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-4">
              On the call, define steps to achieve your goals!
            </p>
            <p className="text-md font-light text-white mb-4">
              Define what goals you guys have and share some insights about each
              other! Lastly, place a wager on if someone doesn’t achieve their
              goals!
            </p>
            <button
              className="text-sm sm:text-md md:text-lg lg:text-xl font-bold rounded-md bg-[#FF3737] px-4 py-2"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign Up Today
            </button>
          </div>
          <div className="flex-1 md:p-12 flex flex-col justify-center items-center">
            <img
              className="max-h-80 w-auto"
              src={group}
              alt="Description of the interaction"
            />
          </div>
        </div>

        {/* checklist */}
        <div className="flex flex-col md:flex-row-reverse">
          <div className="flex-1 text-white p-6 md:p-12 lg:pr-44">
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-white mb-4">
              Report to your partner each day by taking a photo of the habit!
            </p>
            <p className="text-md font-light text-white mb-4">
              Every day we will prompt you to report about your daily tasks! If
              not, have a discussion with your partner!
            </p>
            <button
              className="text-sm sm:text-md md:text-lg lg:text-xl font-bold rounded-md bg-[#FF3737] px-4 py-2"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign Up Today
            </button>
          </div>
          <div className="flex-1 md:p-12 flex flex-col justify-center items-center">
            <img
              className="max-h-80 w-auto"
              src={checklist}
              alt="Description of the interaction"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-8 md:p-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-6 md:space-x-12">
            <img
              className="w-16 h-16 md:w-24 md:h-24"
              src={logo}
              alt="Oathopal Logo"
            />
            <p className="text-4xl font-extrabold">Oathopal</p>
          </div>
          <div className="mt-8 md:mt-0">
            <ul className="space-y-4">
              <li className="text-xl font-semibold hover:underline cursor-pointer">
                General
              </li>
              <li className="text-xl font-semibold hover:underline cursor-pointer">
                How it works
              </li>
              <li className="text-xl font-semibold hover:underline cursor-pointer">
                About us
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t pt-8 border-gray-700">
          <div className="container mx-auto text-center md:text-left">
            <p className="text-xl font-semibold">
              &copy; 2023 Oathopal.com. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Public;
