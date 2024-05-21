"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { useScopedI18n } from "@/locales/client";
import { Motion } from "./Motion";

export default function Breadcrumb({ countryCCA3, countryName }) {
  const t = useScopedI18n("Header");
  return (
    <Motion
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className=" font-bold select-none mx-7 lg:mx-20 mt-10 lg:mt-14 mb-0 flex h-fit text-nowrap relative"
    >
      <Breadcrumbs size="lg" color="primary">
        <BreadcrumbItem href="/">{t("homePage")}</BreadcrumbItem>
        <BreadcrumbItem href={`/countries/${countryCCA3}`}>
          {countryName}
        </BreadcrumbItem>
      </Breadcrumbs>
    </Motion>
  );
}
