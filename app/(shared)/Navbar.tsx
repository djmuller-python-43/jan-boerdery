"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.svg";
import { BsList, BsX } from "react-icons/bs";
import DarkMode from "./DarkMode";
/* import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react' */

type Props = {};

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 3,
    title: "Products",
    url: "/products",
  },
  {
    id: 4,
    title: "063 206 5423",
    url: "#"
  },
];

const Navbar = (props: Props) => {
  /* const session = useSession() */
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => setMenuOpen(!menuOpen);
  return (
    <header>
      <nav className=" max-w-screen-2xl mx-auto h-24 fixed top-0 left-0 right-0 z-50">
        {/* Desktop Menu */}
        <div className="flex justify-between items-center w-full h-full px-4">
          <Link href="/">
            <Image
              src={logo}
              height={50}
              width={200}
              quality="85"
              loading="lazy"
              priority={true}
              className="cursor-pointer"
              alt="Duane Muller Web Design logo"
            />
          </Link>
            <DarkMode /> 
          <div className="hidden sm:flex sm:px-4">
            <ul className="hidden sm:flex sm:justify-between sm:items-center sm:gap-4  ">
              {links.map((link) => (
                <Link key={link.id} href={link.url}>
                  <li className="sm:hover:text-[#0eeca2] ease-in-out duration-500">
                    {link.title}
                  </li>
                </Link>
              ))}
	            {/* { session.status === 'authenticated' && 
              <button className={ styles.logout } onClick={ signOut }>Logout</button>
              } */}
            </ul>          </div>

          {/* Mobile Menu */}
          <div className="sm:hidden cursor-pointe">
            <BsList onClick={toggle} className="h-8 w-8 text-[#0eeca2]" />
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "fixed top-0 left-0 w-[75%] bg-[#0b2341] sm:hidden h-screen p-10 ease-in-out duration-500 z-50"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
          }
        >
          <div className="flex w-full items-center justify-end">
            <div className="cursor-pointer">
              <BsX onClick={toggle} className="h-8 w-8 text-[#0eeca2]" />
            </div>
          </div>
          <Link href="/">
            <Image
              src={logo}
              height={50}
              width={200}
              quality="85"
              loading="lazy"
              priority={true}
              className="cursor-pointer"
              alt="Duane Muller Web Design logo"
            />
          </Link>
          {/* Mobile Menu Links */}
          <div className="flex-col py-4">
            <ul className="">
              {links.map((link) => (
                <Link key={link.id} href={link.url}>
                  <li className="py-4 hover:text-[#0eeca2]" onClick={() => setMenuOpen(false)}>{link.title}</li>
                </Link>
              ))}
		           {/*  { session.status === 'authenticated' && 
                  <button className={ styles.logout } onClick={ signOut }>Logout</button>
                } */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
