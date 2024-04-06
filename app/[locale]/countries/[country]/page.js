import Breadcrumb from "../../components/breadcrumb";
import Country from "../../components/country";
import CountrySkeleton from "../../components/countrySkeleton";
import { baseURL } from "../../lib/bases";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import countries from "i18n-iso-countries";
import { getTranslations } from "next-intl/server";

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
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "Country.MetaData" });
  const country = await getData({ params });
  if (!country) {
    return notFound();
  }

  return {
    title: `${country ? country.name.common : "Loading..."}`,
    url: `${baseURL}/${locale}/countries/${country.cca3}`,
    description: `${country.name.official}`,
    alternates: {
      canonical: `${baseURL}/countries/${country.cca3}`,
      languages: {
        "en-US": `${baseURL}/en/countries/${country.cca3}`,
        "en-GB": `${baseURL}/en/countries/${country.cca3}`,
        "az-AZ": `${baseURL}/az/countries/${country.cca3}`,
      },
    },
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
      url: `${baseURL}/${locale}/countries/${country.cca3}`,
      description: `${country.name.official}`,
      type: "website",
    },
  };
}

export default async function CountryPage({ params }) {
  const countryData = await getData({ params });
  const locale = params.locale;
  if (!countryData) {
    return notFound();
  }
  return (
    <main>
      <Breadcrumb
        countryCCA3={countryData.cca3}
        countryName={countries.getName(countryData.cca2, locale)}
      />
      <Suspense fallback={<CountrySkeleton />}>
        <Country country={countryData} locale={locale} />
      </Suspense>
    </main>
  );
}
