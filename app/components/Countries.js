import Link from "next/link";
import Image from "next/image";
import { Motion } from "./Motion";
import countriesTranslation from "i18n-iso-countries";
import { getScopedI18n } from "@/locales/server";

export default async function Countries({ countries, page, locale }) {
  const t = await getScopedI18n("Country");
  const startIndex = (page - 1) * 42;
  const endIndex = startIndex + 42;
  const sortedCountries =
    countries.status !== 404
      ? countries
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .slice(startIndex, endIndex)
      : [];

  return (
    <div className="justify-content-center mx-4 flex flex-wrap items-center justify-center gap-x-10">
      {sortedCountries.map((country, index) => (
        <Motion
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          key={index}
          transition={{ type: "spring", stiffness: 120, duration: 0.6 }}
        >
          <Link
            href={`/countries/${country.cca3.toLowerCase()}`}
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
