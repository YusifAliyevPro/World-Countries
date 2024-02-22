"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { FcGlobe } from "react-icons/fc";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar
      className="select-none"
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      isBlurred={false}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link
            href="/"
            className="relative left-0 flex flex-row items-center gap-1.5 text-xl font-bold"
          >
            <FcGlobe className=" text-3xl font-normal text-blue-600" />
            <p className="font-bold text-black">World Countries</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="gap-6">
        <NavbarItem>
          <Link
            color="foreground"
            className="hover: hidden text-lg font-bold text-slate-700 hover:text-black sm:flex"
            href="/"
            aria-current="page"
          >
            Home Page
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="hover: hidden text-lg font-bold text-slate-700 hover:text-black sm:flex"
            href="/about"
            aria-current="page"
          >
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <div className="hidden">hello</div>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="max-h-[200px] items-center justify-center gap-3 overflow-hidden bg-gray-100/90 backdrop-blur-md ">
        <NavbarMenuItem key={1}>
          <Link href="/" className={` w-full text-xl font-bold`}>
            Home Page
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key={2}>
          <Link href="/about" className={` w-full text-xl font-bold`}>
            About
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
    </Navbar>
  );
}
