import Image from "next/image";
import Link from "next/link";

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
    <div className="relative mt-20 flex flex-col mx-16">
      <div className="relative flex flex-col-reverse sm:flex-row justify-around w-full ">
        <div className="relative ml-3 flex flex-col text-left text-lg items-left">
          <h1 className="font-bold text-3xl mt-8 sm:mt-0">
            {country.name.common}
          </h1>
          <div className=" flex-col sm:flex-row flex gap-x-20">
            <div className="flex flex-col gap-y-1 sm:gap-y-2">
              <p className="font-bold mt-12">
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
            <div className="flex flex-col gap-y-2">
              <p className="font-bold mt-12">
                Population:{" "}
                <span className="font-normal">
                  {country.population.toLocaleString("en")}
                </span>
              </p>
              <p className="font-bold">
                Sub Region:{" "}
                <span className="font-normal">{country.subregion}</span>
              </p>
              <p className="font-bold mr-5">
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
            <div className="relative mt-8 mb-16 sm:mb-auto sm:mr-6 flex flex-col sm:flex-row sm:max-w-[700px] items-start sm:items-center">
              <p className="text-wrap font-bold mr-2">Border Countries: </p>
              <div className="flex-row flex mt-6 sm:mt-auto relative flex-wrap gap-2 sm:mr-5">
                {borderCountries.map((country, index) => (
                  <Link
                    key={index}
                    href={`/countries/${country.cca3}`}
                    className=" p-2 border-solid border-1 text-center flex-1 sm:flex-none rounded-lg hover:text-neutral-600 hover:border-black"
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
        <div className="relative flex max-h-[200px] sm:max-h-[400px] bg-transparent">
          <Image
            src={country.flags.svg}
            width={600}
            height={400}
            alt={country.flags.alt}
            className=" object-fill bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
