"use client"; // Required for hooks in Next.js App Router

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  // Check if the current route matches the href
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors duration-200 font-medium ${
        isActive
          ? "text-sky-600 border-b-2 border-sky-600" // Active Styles
          : "text-slate-600 hover:text-sky-500" // Inactive Styles
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
