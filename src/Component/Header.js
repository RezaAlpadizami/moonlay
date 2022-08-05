import React from "react";
import Navigation from "./Navigation";

import logo from "../Assets/logo.png";

const Header = () => {
  return (
    <header className="border-b p-3 flex justify-between items-center">
      <span className=" font-bold">
        <img src={logo} className="animate-bounce" width="50" alt="logo" />
      </span>
      <Navigation />
    </header>
  );
};

export default Header;
