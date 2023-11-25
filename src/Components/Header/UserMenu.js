import React from "react";
import UserDropDown from "./UserDropDown";
const UserMenu = ({ toggleUserMenu, isUserMenuOpen }) => {
  return (
    <div className="relative ml-3">
      <button
        type="button"
        onClick={toggleUserMenu}
        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        id="user-menu-button"
        aria-expanded="{isUserMenuOpen}"
        aria-haspopup="true"
      >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">Open user menu</span>
        {/* User Profile Image */}
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </button>
      {isUserMenuOpen && <UserDropDown />}
    </div>
  );
};

export default UserMenu;
