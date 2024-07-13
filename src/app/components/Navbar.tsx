'use client'

import { useState } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { FC } from "react";

interface IconProps {
  className?: string;
}

const MenuIcon: FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
);

const CloseIcon: FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-black z-50">
      <div className="px-4">
        <div className="py-4 flex justify-between items-center">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-menu-bg blur-md"></div>
            <Image src={Logo} alt="Logo" className="h-12 w-12 relative" />
          </div>
          <div
            className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <CloseIcon className="h-6 w-6 text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </div>
          <nav className="sm:flex gap-6 items-center hidden">
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About Us
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Customers
            </a>
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for Free
            </button>
          </nav>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 transform -translate-y-full"
        enterTo="opacity-100 transform translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 transform translate-y-0"
        leaveTo="opacity-0 transform -translate-y-full"
      >
        <div className="sm:hidden absolute top-15 left-0 w-full bg-black p-4">
          <nav className="flex flex-col gap-4">
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About Us
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href=""
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Customers
            </a>
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for Free
            </button>
          </nav>
        </div>
      </Transition>
    </div>
  );
};
