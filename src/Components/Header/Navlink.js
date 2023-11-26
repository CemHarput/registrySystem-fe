// Navlink.js
import React from "react";

const NavLink = ({ href, label }) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
      aria-current="page"
    >
      {label}
    </a>
  );
};

export default NavLink;
