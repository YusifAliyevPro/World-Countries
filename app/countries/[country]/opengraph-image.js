import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function getData({ params }) {
  const query = `https://restcountries.com/v3.1/alpha?codes=${params.country}`;
  const data = await fetch(
    query,
    { cache: "force-cache" },
    { next: { revalidate: 3600 } }
  ).then((res) => res.json());
  return data[0];
}

export const alt = "Country OpenGraph";
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = "image/png";

export default async function Image({ params }) {
  const country = await getData({ params });
  const interSemiBold = fetch(
    new URL("/public/fonts/Inter-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full items-center justify-center">
        <div tw="absolute flex inset-0 w-[1200px] h-[600px]">
          <img
            src={country.flags.svg}
            alt={country.name.common}
            tw="object-cover w-[1200px] h-[600px] flex flex-1"
          />
          <div tw="absolute flex inset-0 bg-black bg-opacity-70 z-10" />
        </div>
        <div tw="flex flex-col text-neutral-50">
          <div tw="text-8xl font-bold">{country.name.common}</div>
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: "Inter",
          data: await interSemiBold,
          style: "normal",
          weight: 700,
        },
      ],
      height: 600,
      width: 1200,
      alt: `World Countries | ${country.flags.alt}`,
    }
  );
}
