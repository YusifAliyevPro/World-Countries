import Breadcrumb from "@/app/components/breadcrumb";
import Country from "@/app/components/country";
import CountrySkeleton from "@/app/components/countrySkeleton";
import { baseURL } from "@/app/lib/bases";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function getData({ params }) {
  const query = `https://restcountries.com/v3.1/alpha?codes=${params.country}`;
  const data = await fetch(
    query,
    { cache: "force-cache" },
    { next: { revalidate: 3600 } }
  ).then((res) => res.json());
  return data[0];
}

export async function generateMetadata({ params }) {
  const country = await getData({ params });
  if (!country) {
    return notFound();
  }

  const borderCountryCodes = country.borders;
  const searchQuery = `alpha?codes=${
    borderCountryCodes ? borderCountryCodes.join(",") : ""
  }`;

  async function getBorder() {
    const query = `https://restcountries.com/v3.1/${searchQuery}&fields=name,cca3`;
    const data = await fetch(
      query,
      { cache: "force-cache" },
      { next: { revalidate: 604800 } }
    ).then((res) => res.json());
    return data;
  }

  const borderCountries = await getBorder();

  const generateDescription = () => {
    let description = `${country.name.common} is${country.independent ? " an independent" : " a"} country in ${country.region} with a population of ${country.population.toLocaleString("en")}. `;
    if (country.name.nativeName) {
      description += ` The official name of ${country.name.common} is "${country.name.official}", and its native name is "${
        country.name.nativeName
          ? Object.values(country.name.nativeName)[0].common
          : ""
      }".`;
    } else {
      description += ` The official name of ${country.name.common} is "${country.name.official}".`;
    }
    description += country.capital
      ? `The capital of this country is ${country.capital[0]}. `
      : "This country does not have a capital city. ";
    description += country.currencies
      ? `The official currency is the ${Object.values(country.currencies)[0].name} (${Object.values(country.currencies)[0].symbol}). `
      : `${country.name.common} does not have an official currency. `;
    description +=
      country.borders && country.borders.length > 0
        ? `${country.name.common} borders ${borderCountries.map((border) => border.name.common).join(", ")}. `
        : `${country.name.common} does not border any other countries. `;
    description += country.languages
      ? `The official language${Object.values(country.languages).length > 1 ? "s" : ""} ${Object.values(country.languages).length > 1 ? "are" : "is"} ${Object.values(country.languages).join(", ")}. `
      : "This country does not have an official language. ";
    description += country.tld
      ? `The top-level domain in ${country.name.common} is "${country.tld[0]}". `
      : "This country does not have a top-level domain. ";
    description +=
      country.landlocked === false
        ? `${country.name.common} has access to international waters. `
        : country.landlocked === true
          ? `${country.name.common} does not have access to international waters. `
          : `It is unknown if ${country.name.common} has access to international waters. `;
    description += country.unMember
      ? "It is a member of the United Nations."
      : "It is not a member of the United Nations.";
    return description;
  };

  return {
    title: `${country ? country.name.common : "Loading..."}`,
    url: `${baseURL}/countries/${country.cca3}`,
    description: generateDescription(),
    keywords: [
      "countries",
      `${country.name.common}`,
      `${country.name.official}`,
      "world",
      "World-Countriess",
      "World Countriess",
      "world countriess",
      "countries information",
      "country flags",
      "filmisbest.com",
      "filmisbest",
      "yusifaliyevpro",
      "yusifaliyevpro.com",
      "yusifaliyev",
      "yusif",
      "aliyev",
    ],
    openGraph: {
      title: `${country.name.common} | World Countriess`,
      url: `${baseURL}/countries/${country.cca3}`,
      description: generateDescription(),
      type: "website",
    },
  };
}

export default async function CountryPage({ params }) {
  const countryData = await getData({ params });
  if (!countryData) {
    return notFound();
  }
  return (
    <main>
      <Breadcrumb
        countryCCA3={countryData.cca3}
        countryName={countryData.name.common}
      />
      <Suspense fallback={<CountrySkeleton />}>
        <Country country={countryData} />
      </Suspense>
    </main>
  );
}
