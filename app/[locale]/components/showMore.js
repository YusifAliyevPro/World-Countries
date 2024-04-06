"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import MapModal from "./mapModal";
import { useRouter } from "next/navigation";
import { MotionDiv } from "./motionDiv";
import { useTranslations } from "next-intl";

export default function ShowMore({ country }) {
  const router = useRouter();
  const t = useTranslations("Country.MoreInfo");
  return (
    <MotionDiv
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: country.borders ? 4.2 : 3.4,
        type: "spring",
        stiffness: 100,
      }}
      className="mb-10 w-full sm:w-3/5"
    >
      <Accordion>
        <AccordionItem
          classNames={{
            title: " font-bold hover:text-blue-600 text-blue-500",
            indicator: " text-blue-600 font-bold text-2xl",
            heading: " w-fit",
          }}
          key="1"
          aria-label={t("moreInfo")}
          title={t("moreInfo")}
        >
          <div className=" flex-col text-base sm:flex-row flex justify-between">
            <div className="flex flex-col mb-10 gap-y-1 sm:gap-y-2">
              <p className="font-bold">
                {t("officialName")}{" "}
                <span className="font-normal">{country.name.official}</span>
              </p>
              <p className="font-bold text-nowrap">
                {t("isCountryIndependent")}{" "}
                <span className="font-normal">
                  {country.independent ? t("yes") : t("no")}
                </span>
              </p>
              <p className="font-bold">
                {t("timezones")}{" "}
                <span
                  title={country.timezones}
                  className="font-normal line-clamp-1"
                >
                  {country.timezones.map((timezone, index) => (
                    <span className="" key={index}>
                      {index > 0 && ", "}
                      <span>{timezone}</span>
                    </span>
                  ))}
                </span>
              </p>
            </div>
            <div className=" flex flex-col gap-y-2">
              <p className=" font-bold">
                {t("traffic")}{" "}
                <span className="font-normal">
                  {country.car.side === "right"
                    ? t("rightHand")
                    : t("leftHand")}
                </span>
              </p>
              <p className="font-bold text-nowrap">
                {t("isCountryLandlocked")}{" "}
                <span className="font-normal">
                  {country.landlocked ? t("yes") : t("no")}
                </span>
              </p>
              <p title={t("unAbbr")} className="mr-5 font-bold">
                {t("memberUN")}:{" "}
                <span className="font-normal">
                  {" "}
                  {country.unMember ? t("yes") : t("no")}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:gap-y-0 gap-y-4 mt-8 sm:mt-0 sm:flex-row justify-between">
            <MapModal
              country={country}
              ButtonText={t("showOnMap")}
              mapOrCoat="map"
            />
            <MapModal
              country={country}
              ButtonText={t("showCoatOfArmy")}
              mapOrCoat="coat"
            />
          </div>
        </AccordionItem>
      </Accordion>
    </MotionDiv>
  );
}
