import { Suspense } from "react";
import Countries from "./components/countries";

export default async function Home() {
  async function getData() {
    const query = `https://restcountries.com/v3.1/all?fields=name,flags,translations,capital,region,population`;
    const data = await fetch(
      query,
      { cache: "force-cache" },
      { next: { revalidate: 3600 } }
    ).then((res) => res.json());
    return data;
  }

  const countries = await getData();
  return (
    <main className="mb-10 mt-12">
      <Suspense fallback={<p className="mt-20">Loading...</p>}>
        <Countries countries={countries} />
      </Suspense>
    </main>
  );
}
