"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css"; // Assuming you have a styles.css for auth layout

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [userInput, setUserInput] = useState();
  const pathname = usePathname();
  return (
    <>
      {/* <div>
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="border p-2 rounded"
          />
        </div> */}
      <header>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </header>

      {children}
    </>
  );
};

export default AuthLayout;
