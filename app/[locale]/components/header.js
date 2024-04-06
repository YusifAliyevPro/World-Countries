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
import LanguageSwitcher from "./languageSwitcher";
import { useTranslations } from "next-intl";

export default function Header({ locale }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Header");
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
            href={`/${locale}/`}
            className="relative left-0 flex flex-row items-center gap-1.5 text-xl font-bold"
          >
            <FcGlobe className=" text-3xl font-normal text-blue-600" />
            <p className="font-bold text-black">World Countriess</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="gap-6">
        <NavbarItem>
          <Link
            color="foreground"
            className="hover: hidden text-lg font-bold text-slate-700 hover:text-black sm:flex"
            href={`/${locale}/`}
            aria-current="page"
          >
            {t("homePage")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="hover: hidden text-lg font-bold text-slate-700 hover:text-black sm:flex"
            href={`/${locale}/about`}
            aria-current="page"
          >
            {t("about")}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <LanguageSwitcher locale={locale} />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="max-h-[200px] items-center justify-center gap-3 overflow-hidden bg-gray-100/90 backdrop-blur-md ">
        <NavbarMenuItem key={1}>
          <Link href={`/${locale}/`} className={` w-full text-xl font-bold`}>
            {t("homePage")}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key={2}>
          <Link
            href={`/${locale}/about`}
            className={` w-full text-xl font-bold`}
          >
            {t("about")}
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <LanguageSwitcher locale={locale} />
        </NavbarMenuItem>
      </NavbarMenu>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
    </Navbar>
  );
}
