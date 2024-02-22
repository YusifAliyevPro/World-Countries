import Image from "next/image";
import Link from "next/link";
import ShowMore from "./showMore";

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
    <div className="relative mx-6 mt-20 flex flex-col sm:mx-16">
      <div className="relative flex w-full mb-12 flex-col-reverse justify-between sm:flex-row ">
        <div className="items-left relative ml-3 flex flex-col text-left text-lg">
          <h1 className="mt-8 text-3xl font-bold sm:mt-0">
            {country.name.common}
          </h1>
          <div className=" flex flex-col gap-x-20 sm:flex-row">
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
              <p className="font-bold">
                Capital: <span className="font-normal">{country.capital}</span>
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
              <p className="mr-5 font-bold">
                Top Level Domain:{" "}
                <span className="font-normal">
                  {" "}
                  {country.tld ? Object.values(country.tld).join(", ") : ""}
                </span>
              </p>
              <p className="font-bold">
                Languages:{" "}
                <span className="font-normal">
                  {" "}
                  {country.languages
                    ? Object.values(country.languages).join(", ")
                    : ""}
                </span>
              </p>
            </div>
          </div>
          {borderCountries.status !== 400 ? (
            <div className="relative flex flex-col items-start sm:mb-auto sm:mr-6 sm:max-w-[700px] sm:flex-row sm:items-center">
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
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="relative mx-5 flex bg-transparent h-auto max-w-[100%] sm:mx-0 ">
          <Image
            src={country.flags.svg}
            width={600}
            height={400}
            alt={country.flags.alt}
            className=" select-none object-cover drop-shadow-2xl rounded-md shadow-large"
          />
        </div>
      </div>
      <ShowMore country={country} />
    </div>
  );
}
