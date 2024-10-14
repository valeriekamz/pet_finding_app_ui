"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between items-center flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <div className="flex items-center space-x-2 pl-4 md:pl-12 lg:pl-14">
          <Image src="/paw.svg" width={30} height={30} alt="logo" />
          <h1 className="font-bold text-xl">Pet World</h1>
        </div>
      </Link>

      <div className="flex items-center space-x-6 lg:pr-12">
        <ul className="hidden h-full gap-12 lg:flex lg:pr-12">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        {/* "Add Listing" button for larger screens */}
        <div className="hidden lg:flex items-center justify-center lg:mr-8">
          <Button type="button" title="Add Listing" icon="/plus.svg" />
        </div>
      </div>

      {/* Hamburger Menu Icon */}
      <Image
        src="menu.svg"
        alt="menu"
        width={30}
        height={30}
        className="inline-block cursor-pointer lg:hidden mr-4"
        onClick={toggleMenu}
      />

      {/* Conditionally display the menu items when the hamburger menu is open */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 bg-white shadow-lg flex flex-col space-y-4 p-4 lg:hidden transition duration-300 ease-in-out transform">
          <ul className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="text-gray-500 cursor-pointer transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
            {/* Add Listing styled as a regular link in the mobile menu */}
            <Link
              href="/listings"
              className="text-gray-500 cursor-pointer transition-all hover:font-bold"
            >
              Add Listing
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
