import Breadcrumb from "../../../components/Breadcrumb";
import Country from "../../../components/Country";
import CountrySkeleton from "../../../components/CountrySkeleton";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import countries from "i18n-iso-countries";
import { getScopedI18n } from "@/locales/server";
import { I18nProviderClient } from "@/locales/client";
import { setStaticParamsLocale } from "next-international/server";
import { getData, getSlugs } from "@/lib/utils";

export async function generateMetadata({ params }) {
  const locale = params.locale;
  const t = await getScopedI18n("Country.MetaData");
  const country = await getData({ params });
  if (!country) {
    return notFound();
  }

  return {
    title: `${country ? country.name.common : "Loading..."}`,
    url: `/${locale}/countries/${country.cca3}`,
    description: `${country.name.official}`,
    alternates: {
      canonical: `/countries/${country.cca3}`,
      languages: {
        "en-US": `/en/countries/${country.cca3}`,
        "en-GB": `/en/countries/${country.cca3}`,
        "az-AZ": `/az/countries/${country.cca3}`,
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
      url: `/${locale}/countries/${country.cca3}`,
      description: `${country.name.official}`,
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const countryData = await getSlugs();
  const staticParams = countryData.flatMap((country) => [
    { locale: "az", country: country.cca3.toLowerCase() },
    { locale: "en", country: country.cca3.toLowerCase() },
  ]);
  return staticParams;
}

export default async function CountryPage({ params }) {
  const locale = params.locale;
  setStaticParamsLocale(locale);
  const countryData = await getData({ params });
  if (!countryData) {
    return notFound();
  }
  return (
    <main>
      <I18nProviderClient locale={locale}>
        <Suspense fallback={<p>Loading...</p>}>
          <Breadcrumb
            countryCCA3={countryData.cca3}
            countryName={countries.getName(countryData.cca2, locale)}
          />
        </Suspense>
      </I18nProviderClient>
      <Suspense fallback={<CountrySkeleton />}>
        <Country country={countryData} locale={locale} />
      </Suspense>
    </main>
  );
}
