import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8"
          alt="menu"
          src="https://cdn3.iconfinder.com/data/icons/outline-style-1/512/hamburger-512.png"
        />
        <img
          className="h-8 mx-2"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png"
        />
      </div>
      <div className="col-span-10 flex justify-center">
        <input
          type="text"
          className="w-1/2 border border-gray-400 rounded-l-full py-2 px-4"
          placeholder="Search"
        />
        <button
          type="button"
          className="border border-gray-400 rounded-r-full  px-5 py-2 bg-gray-200"
        >
          🔍
        </button>
        <img
          alt="voice"
          className="h-8 w-8 border border-gray-300 rounded-full p-1 mx-3 m-1"
          src="https://icons-for-free.com/download-icon-voice+icon-1320183328753591744_512.png"
        />
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
