import Link from "next/link";
import ShowMore from "./ShowMore";
import { Suspense } from "react";
import Share from "./Share";
import countries from "i18n-iso-countries";
import { getScopedI18n } from "@/locales/server";
import { Motion } from "./Motion";
import { I18nProviderClient } from "@/locales/client";
import Image from "next/image";

export default async function Country({ country, locale }) {
  const borderCountryCodes = country.borders;
  const searchQuery = `alpha?codes=${
    borderCountryCodes ? borderCountryCodes.join(",") : ""
  }`;

  async function getData() {
    const query = `https://restcountries.com/v3.1/${searchQuery}&fields=name,cca3,cca2`;
    const data = await fetch(
      query,
      { cache: "force-cache" },
      { next: { revalidate: 604800 } },
    ).then((res) => res.json());
    return data;
  }
  const borderCountries = await getData();
  const t = await getScopedI18n("Country");

  return (
    <div className="relative mx-6 mt-5 flex flex-col sm:mx-16">
      <div className="relative mb-12 flex w-full flex-col-reverse justify-between sm:flex-row">
        <div className="items-left relative ml-3 flex flex-col text-left text-lg sm:max-w-[50%]">
          <Motion
            type="h1"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, type: "spring" }}
            title={country.name.common}
            className="mt-8 w-fit text-4xl font-bold sm:mt-0 sm:text-nowrap"
          >
            {countries.getName(country.cca3, locale) || country.name.common}
          </Motion>
          <Motion
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2, type: "spring" }}
            className="flex flex-col gap-x-20 sm:flex-row"
          >
            <div className="flex flex-col gap-y-1 sm:gap-y-2">
              <p className="mt-12 font-bold">
                {t("nativeName")}{" "}
                <span className="font-normal">
                  {country.name.nativeName
                    ? Object.values(country.name.nativeName)[0].common
                    : ""}
                </span>
              </p>
              <p className="font-bold">
                {t("region")}{" "}
                <span className="font-normal">
                  {t(`Continents.${country.region.toLowerCase()}`) ||
                    country.region}
                </span>
              </p>
              <p className="truncate font-bold sm:max-w-[250px]">
                {t("capital")}{" "}
                <span
                  title={country.capital ? country.capital.join(", ") : ""}
                  className="font-normal"
                >
                  {country.capital ? country.capital.join(", ") : ""}
                </span>
              </p>
              <p className="font-bold">
                {t("currencies")}{" "}
                <span className="font-normal">
                  {country.currencies
                    ? Object.values(country.currencies)[0].name
                    : ""}
                </span>
                <span>
                  {country.currencies
                    ? ` (${Object.values(country.currencies)[0].symbol})`
                    : ""}
                </span>
              </p>
            </div>
            <div className="mb-8 flex flex-col gap-y-2">
              <p className="mt-12 font-bold">
                {t("population")}{" "}
                <span className="font-normal">
                  {country.population.toLocaleString(locale)}
                </span>
              </p>
              <p className="font-bold">
                {t("subRegion")}{" "}
                <span className="font-normal">{country.subregion}</span>
              </p>
              <p className="font-bold sm:max-w-[230px] sm:truncate">
                {t("topLevelDomain")}{" "}
                <span
                  title={
                    country.tld ? Object.values(country.tld).join(", ") : ""
                  }
                  className="font-normal"
                >
                  {" "}
                  {country.tld ? Object.values(country.tld).join(", ") : ""}
                </span>
              </p>
              <p className="font-bold sm:max-w-[200px] sm:truncate">
                {t("languages")}{" "}
                <span
                  title={
                    country.languages
                      ? Object.values(country.languages).join(", ")
                      : ""
                  }
                  className="font-normal"
                >
                  {" "}
                  {country.languages
                    ? Object.values(country.languages).join(", ")
                    : ""}
                </span>
              </p>
            </div>
          </Motion>
          {borderCountries.status !== 400 ? (
            <Motion
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.8, type: "spring" }}
              className="relative flex flex-col items-start sm:mb-auto sm:mr-6 sm:max-w-[700px] sm:flex-row sm:items-center"
            >
              <p className="mr-2 text-wrap font-bold">
                {t("borderCountries")}{" "}
              </p>
              <div className="relative mt-6 flex flex-row flex-wrap gap-2 sm:mr-5 sm:mt-auto">
                {borderCountries.map((country, index) => (
                  <Link
                    key={index}
                    href={`/${country.cca3.toLowerCase()}`}
                    className="flex-1 select-none text-nowrap rounded-lg border-1 border-solid p-2 text-center hover:border-black hover:text-neutral-600 sm:flex-none"
                  >
                    <p className="font-normal">
                      {countries.getName(country.cca3, locale) ||
                        country.name.common}
                    </p>
                  </Link>
                ))}
              </div>
            </Motion>
          ) : (
            ""
          )}
        </div>
        <Motion
          initial={{ opacity: 0, y: -600 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            type: "spring",
            stiffness: 70,
          }}
          className="relative mx-5 flex h-auto flex-col items-end gap-y-6 bg-transparent sm:mx-0 sm:max-w-[50%]"
        >
          <Image
            src={country.flags.svg}
            alt={country.flags.alt}
            width={550}
            height={300}
            className="h-auto select-none rounded-md object-cover shadow-large drop-shadow-2xl"
          />
          <div className="hidden lg:flex">
            <I18nProviderClient locale={locale}>
              <Suspense fallback={<p>Loading...</p>}>
                <Share country={country} locale={locale} />
              </Suspense>
            </I18nProviderClient>
          </div>
        </Motion>
      </div>
      <div className="flex select-none flex-col">
        <div className="flex self-end lg:hidden">
          <I18nProviderClient locale={locale}>
            <Suspense fallback={<p>Loading...</p>}>
              <Share country={country} locale={locale} />
            </Suspense>
          </I18nProviderClient>
        </div>
        <I18nProviderClient locale={locale}>
          <Suspense fallback={<p>Loading...</p>}>
            <ShowMore country={country} />
          </Suspense>
        </I18nProviderClient>
      </div>
    </div>
  );
}
