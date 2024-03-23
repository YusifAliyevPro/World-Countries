"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { MotionDiv } from "./motionDiv";

export default function Breadcrumb({ countryCCA3, countryName }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      className=" font-bold select-none mx-7 lg:mx-20 mt-10 lg:mt-14 mb-0 flex h-fit text-nowrap relative"
    >
      <Breadcrumbs size="lg" color="primary">
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href={`/countries/${countryCCA3}`}>
          {countryName}
        </BreadcrumbItem>
      </Breadcrumbs>
    </MotionDiv>
  );
}
