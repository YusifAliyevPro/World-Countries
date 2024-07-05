"use client";
import Link from "next/link";
import Image from "next/image";
import { Motion } from "./Motion";
import { useScopedI18n } from "@/locales/client";
import countriesTranslation from "i18n-iso-countries";
import azeLocale from "i18n-iso-countries/langs/az.json";
import turLocale from "i18n-iso-countries/langs/tr.json";
import useStore from "@/lib/store";
import Fuse from "fuse.js";
import { useEffect } from "react";

export default function Countries({ countriess, locale }) {
  countriesTranslation.registerLocale(azeLocale);
  countriesTranslation.registerLocale(turLocale);
  const t = useScopedI18n("Country");
  const search = useStore((state) => state.search);
  const page = useStore((state) => state.page);
  const setResultCount = useStore((state) => state.setResultCount);
  let countries = countriess;
  countries = countries.map((country) => ({
    ...country,
    name: {
      ...country.name,
      officialAze: countriesTranslation.getName(country.cca3, "az"),
    },
  }));

  let renderedCountries;
  if (search) {
    const options = {
      keys: ["name.common", "name.official", "name.officialAze", "capital"],
      threshold: 0.4, // Film adı için daha esnek eşleşme
    };
    const fuse = new Fuse(countries, options);
    const result = fuse.search(search);
    renderedCountries = result.map(({ item }) => item);
  } else {
    renderedCountries = countries
      .sort((a, b) => a.name.common.localeCompare(b.name.common))
      .slice((page - 1) * 30, page * 30);
  }
  useEffect(() => {
    setResultCount(renderedCountries.length);
  }, [renderedCountries]);
  return (
    <div className="justify-content-center mx-4 flex flex-wrap items-center justify-center gap-x-10">
      {renderedCountries.map((country, index) => (
        <Motion
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          key={index + 30 * (page - 1)}
          transition={{ type: "spring", stiffness: 120, duration: 0.6 }}
        >
          <Link
            href={`/${country.cca3.toLowerCase()}`}
            className="justify-content-center relative mt-10 inline-block w-[325px] select-none shadow-medium items-center justify-center rounded-xl bg-gray-200 text-center"
          >
            <div className="relative">
              <Image
                src={country.flags.svg}
                height={180}
                width={325}
                alt={country.flags.alt}
                className="h-[185px] w-full rounded-t-xl object-cover"
              />
            </div>
            <p className="my-3 ml-8 mr-6 truncate text-left text-2xl font-bold text-black">
              {countriesTranslation.getName(country.cca3, locale) ||
                country.name.common}
            </p>
            <p className="text-md my-3 ml-8  text-left text-slate-900">
              <span className="font-bold">{t("capital")} </span>{" "}
              {country.capital}
            </p>
            <p className="text-md my-3 ml-8  text-left text-slate-900">
              <span className="font-bold">{t("region")} </span>{" "}
              {t(`Continents.${country.region.toLowerCase()}`) ||
                country.region}
            </p>
            <p className="text-md my-3 ml-8  text-left text-slate-900">
              <span className="font-bold">{t("population")} </span>{" "}
              {country.population.toLocaleString(locale)}
            </p>
          </Link>
        </Motion>
      ))}
    </div>
  );
}
