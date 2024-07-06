"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useScopedI18n } from "@/locales/client";
import { Motion } from "./Motion";
import CoatofArmy from "./CoatofArmy";
import MapModal from "./Map";

export default function ShowMore({ country }) {
  const t = useScopedI18n("Country.MoreInfo");
  return (
    <Motion
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
            <MapModal latlng={country.latlng[0]} latlng2={country.latlng[1]} />
            <CoatofArmy src={country.coatOfArms.svg} alt={country.flags.alt} />
          </div>
        </AccordionItem>
      </Accordion>
    </Motion>
  );
}
