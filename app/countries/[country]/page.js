import Country from "@/app/components/country";
import CountrySkeleton from "@/app/components/countrySkeleton";
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

  const ogImage1 = [
    {
      url: `https://countries-of-world.vercel.app/countries/${country.cca3}/opengraph-image`,
      width: 1200,
      height: 600,
      alt: country.flags.alt,
    },
  ];
  return {
    title: `${country.name.common}`,
    url: `https://countries-of-world.vercel.app/countries/${country.cca3}`,
    description:
      "World Countries is a website which you can get information about countries all around world",
    keywords: [
      "countries",
      `${country.name.common}`,
      `${country.name.official}`,
      "world",
      "world countries",
      "countries information",
      "country flags",
      "World Countries.com",
      "yusifaliyevpro",
      "yusifaliyevpro.com",
      "yusifaliyev",
      "yusif",
      "aliyev",
    ],
    openGraph: {
      title: `${country.name.common} | World Countries`,
      images: ogImage1,
      url: `https://countries-of-world.vercel.app/countries/${country.cca3}`,
      description:
        "World Countries is a website which you can get information about countries all around world",
      type: "website",
    },
  };
}

export default async function CountryPage({ params }) {
  const countryData = await getData({ params });
  return (
    <main>
      <Suspense fallback={<CountrySkeleton />}>
        <Country country={countryData} />
      </Suspense>
    </main>
  );
}
