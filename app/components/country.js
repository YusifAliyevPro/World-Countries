import Link from "next/link";
import ShowMore from "./showMore";
import { MotionDiv } from "./motionDiv";
import { MotionH1 } from "./motionH1";
import { Suspense } from "react";
import Breadcrumb from "./breadcrumb";
import Share from "./share";

export default async function Country({ country }) {
  const borderCountryCodes = country.borders;
  const searchQuery = `alpha?codes=${
    borderCountryCodes ? borderCountryCodes.join(",") : ""
  }`;

  async function getData() {
    const query = `https://restcountries.com/v3.1/${searchQuery}&fields=name,cca3`;
    const data = await fetch(
      query,
      { cache: "force-cache" },
      { next: { revalidate: 604800 } }
    ).then((res) => res.json());
    return data;
  }
  const borderCountries = await getData();

  return (
    <div className="relative mx-6 mt-5 flex flex-col sm:mx-16">
      <div className="relative flex w-full mb-12 flex-col-reverse justify-between sm:flex-row ">
        <div className="items-left relative sm:max-w-[50%] ml-3 flex flex-col text-left text-lg">
          <MotionH1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4, type: "spring" }}
            title={country.name.common}
            className="mt-8 text-4xl w-fit sm:text-nowrap font-bold sm:mt-0"
          >
            {country.name.common}
          </MotionH1>
          <MotionDiv
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2, type: "spring" }}
            className=" flex flex-col gap-x-20 sm:flex-row"
          >
            <div className="flex flex-col gap-y-1 sm:gap-y-2">
              <p className="mt-12 font-bold">
                Native Name:{" "}
                <span className="font-normal">
                  {country.name.nativeName
                    ? Object.values(country.name.nativeName)[0].common
                    : ""}
                </span>
              </p>
              <p className="font-bold">
                Region: <span className="font-normal">{country.region}</span>
              </p>
              <p className="font-bold truncate sm:max-w-[250px]">
                Capital:{" "}
                <span
                  title={country.capital ? country.capital.join(", ") : ""}
                  className="font-normal"
                >
                  {country.capital ? country.capital.join(", ") : ""}
                </span>
              </p>
              <p className="font-bold">
                Currencies:{" "}
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
                Population:{" "}
                <span className="font-normal">
                  {country.population.toLocaleString("en")}
                </span>
              </p>
              <p className="font-bold">
                Sub Region:{" "}
                <span className="font-normal">{country.subregion}</span>
              </p>
              <p className="font-bold sm:truncate sm:max-w-[230px]">
                Top Level Domain:{" "}
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
              <p className="font-bold sm:truncate sm:max-w-[200px]">
                Languages:{" "}
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
          </MotionDiv>
          {borderCountries.status !== 400 ? (
            <MotionDiv
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.8, type: "spring" }}
              className="relative flex flex-col items-start sm:mb-auto sm:mr-6 sm:max-w-[700px] sm:flex-row sm:items-center"
            >
              <p className="mr-2 text-wrap font-bold">Border Countries: </p>
              <div className="relative mt-6 flex flex-row flex-wrap gap-2 sm:mr-5 sm:mt-auto">
                {borderCountries.map((country, index) => (
                  <Link
                    key={index}
                    href={`/countries/${country.cca3}`}
                    className=" flex-1 select-none text-nowrap rounded-lg border-1 border-solid p-2 text-center hover:border-black hover:text-neutral-600 sm:flex-none"
                  >
                    <p className="font-normal">{country.name.common}</p>
                  </Link>
                ))}
              </div>
            </MotionDiv>
          ) : (
            ""
          )}
        </div>
        <MotionDiv
          initial={{ opacity: 0, y: -600 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.5,
            type: "spring",
            stiffness: 70,
          }}
          className="relative mx-5 flex flex-col gap-y-6 items-end bg-transparent h-auto sm:max-w-[50%] sm:mx-0 "
        >
          <img
            src={country.flags.svg}
            alt={country.flags.alt}
            className=" select-none object-cover h-auto drop-shadow-2xl shadow-large rounded-md"
          />
          <div className="hidden lg:flex">
            <Share country={country} />
          </div>
        </MotionDiv>
      </div>
      <div className="flex select-none flex-col">
        <div className="flex self-end lg:hidden">
          <Share country={country} />
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <ShowMore country={country} />
        </Suspense>
      </div>
    </div>
  );
}
