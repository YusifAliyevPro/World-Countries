import { baseURL } from "./lib/bases";

export default async function sitemap() {
  async function getData() {
    const query = `https://restcountries.com/v3.1/all?fields=cca3,name`;
    const data = await fetch(
      query,
      { cache: "force-cache" },
      { next: { revalidate: 604800 } }
    ).then((res) => res.json());
    return data;
  }

  const countriesData = await getData();
  const sortedCountries = countriesData.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  const countries = sortedCountries.map((country) => ({
    url: `${baseURL}/countries/${country.cca3}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const routes = ["/", "/about"].map((route) => ({
    url: `${baseURL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 0.99,
  }));

  return [...routes, ...countries];
}
