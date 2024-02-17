import Image from "next/image";

export async function getData({ params }) {
  const query = `https://restcountries.com/v3.1/name/${params.country}`;
  const data = await fetch(
    query,
    { cache: "force-cache" },
    { next: { revalidate: 3600 } }
  ).then((res) => res.json());
  return data[0];
}

export default async function Country({ params }) {
  const country = await getData({ params });
  return (
    <main className="mt-20 min-h-screen relative flex flex-col items-center gap-y-6">
      <p className="text-black font-bold text-2xl mx-9">
        Country Name (Common):{" "}
        <span className=" text-blue-main">{country.name.common}</span>
      </p>
      <p className="text-black font-bold text-2xl mx-9">
        Country Name (Official):{" "}
        <span className=" text-blue-main">{country.name.official}</span>
      </p>
      <p className="text-black font-bold text-2xl mx-9">
        Capital: <span className=" text-blue-main">{country.capital}</span>
      </p>
      <Image
        alt={country.flags.alt}
        src={country.flags.svg}
        width={325}
        height={180}
      />
    </main>
  );
}
