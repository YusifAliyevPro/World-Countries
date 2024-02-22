import Link from "next/link";
import Image from "next/image";
import continentTranslations from "../lib/continents";

export default function Countries({ countries, page }) {
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
        <Link
          key={index}
          href={`/countries/${country.cca3}`}
          className="justify-content-center relative mt-10 inline-block w-[325px] select-none items-center justify-center rounded-xl bg-gray-200 text-center transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <div className="relative">
            <Image
              src={country.flags.svg}
              height={180}
              width={325}
              alt={country.flags.alt}
              className="h-[185px] w-full rounded-t-md object-cover"
            />
          </div>
          <p className="my-3 ml-8 mr-6 truncate text-left text-2xl font-bold text-black">
            {country.name.common}
          </p>
          <p className="text-md my-3 ml-8  text-left text-slate-900">
            <span className="font-bold">Capital: </span> {country.capital}
          </p>
          <p className="text-md my-3 ml-8  text-left text-slate-900">
            <span className="font-bold">Region: </span> {country.region}
          </p>
          <p className="text-md my-3 ml-8  text-left text-slate-900">
            <span className="font-bold">Population: </span>{" "}
            {country.population.toLocaleString("en")}
          </p>
        </Link>
      ))}
    </div>
  );
}
