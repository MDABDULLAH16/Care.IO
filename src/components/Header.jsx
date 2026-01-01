"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/my-bookings", label: "My Bookings" },
    { to: "/login", label: "Login" },
    { to: "/register", label: "Join Now" },
  ];
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Section */}
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-sky-600 flex items-center gap-2"
            >
              <span className="p-2 bg-sky-100 rounded-lg">🏥</span>
              <span>
                Care.<span className="text-teal-500">IO</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <NavLink
                href={link.to}
                className="text-slate-600 hover:text-sky-600 font-medium transition"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-sky-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-2">
          <div className="pt-4 flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                href={link.to}
                className="text-slate-600 hover:text-sky-600 font-medium transition"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
