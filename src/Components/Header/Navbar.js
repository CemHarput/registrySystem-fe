import React, { useState } from "react";
import UserMenu from "./UserMenu";
import NavLink from "./Navlink";
import NotificationIcon from "./NotificationIcon";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isBookMenuOpen, setIsBookMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen);
  };
  const toggleBookMenu = () => {
    setIsBookMenuOpen((isBookMenuOpen) => !isBookMenuOpen);
  };
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Mobile Menu Icons */}
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-start sm:justify-start">
            <DesktopMenu
              toggleBookMenu={toggleBookMenu}
              isBookMenuOpen={isBookMenuOpen}
            />
          </div>
          {/* Notification and User Menu */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              {/* Notification Icon */}
              <NotificationIcon />
            </button>
            <UserMenu
              toggleUserMenu={toggleUserMenu}
              isUserMenuOpen={isUserMenuOpen}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu />
    </nav>
  );
};

const MobileMenu = () => (
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <NavLink href="#" label="Dashboard" />
      <NavLink href="#" label="Team" />
      <NavLink href="#" label="Projects" />
      <NavLink href="#" label="Calendar" />
    </div>
  </div>
);

export default Navbar;
