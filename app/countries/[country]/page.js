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
