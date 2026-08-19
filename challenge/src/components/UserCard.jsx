import React from "react";
import { FaYoutube, FaUsers, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Button from "./Button";

const UserCard = () => {
  return (
    <div className="w-[20rem] h-[30rem] bg-red-400 rounded-xl overflow-hidden">

      {/* Header */}
      <div className="relative w-full h-[10rem] bg-blue-400">
        <img
          className="absolute left-1/2 -translate-x-1/2 translate-y-1/4 h-full rounded-full border-4 border-blue-400 p-1 bg-white"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwzfwEbn4t5m0NLrMMS9UHMc0k2wb3s3TpgEYT09mOjA&s"
          alt="Profile"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col items-center pt-14">

        <h1 className="text-2xl font-bold">
          Pratyush Singhal
        </h1>

        <p className="text-gray-800">
          Full Stack Developer
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4">
          <FaYoutube className="text-5xl p-2 rounded-full bg-red-500 text-white" />
          <FaYoutube className="text-5xl p-2 rounded-full bg-red-500 text-white" />
          <FaYoutube className="text-5xl p-2 rounded-full bg-red-500 text-white" />
          <FaYoutube className="text-5xl p-2 rounded-full bg-red-500 text-white" />
        </div>

        {/* Buttons */}
        <div className="flex gap-6 mt-5">
          <Button text="Subscribe" />
          <Button text="Message" />
        </div>

        {/* Stats */}
        <div className="flex justify-center items-center gap-4 mt-6">

          <div className="flex items-center gap-2">
            <CiHeart className="text-xl" />
            <span>60.5K</span>
          </div>

          <div className="w-[1px] h-6 bg-black"></div>

          <div className="flex items-center gap-2">
            <FaUsers className="text-lg" />
            <span>120K</span>
          </div>

          <div className="w-[1px] h-6 bg-black"></div>

          <div className="flex items-center gap-2">
            <FaStar className="text-lg text-yellow-500" />
            <span>25K</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default UserCard;