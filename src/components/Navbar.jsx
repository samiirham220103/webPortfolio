import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-nav p-4 sticky top-0 ">
      <div className="flex items-center py-2 px-8 justify-around">
        <span className="font-semibold text-white">Samm</span>
        <div className="text-white">
          <a href="/" className="mx-2 hover:underline">
            Home
          </a>
          <a href="/" className="mx-2 hover:underline">
            About
          </a>
          <a href="/" className="mx-2 hover:underline">
            Portfolio
          </a>
          <a href="/" className="mx-2 hover:underline">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
