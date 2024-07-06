import countriesTranslation from "i18n-iso-countries";

export async function getSlugs() {
  const query = `https://restcountries.com/v3.1/all?fields=cca3`;
  const data = await fetch(query).then((res) => res.json());
  return data;
}

export async function getData({ params }) {
  const query = `https://restcountries.com/v3.1/alpha?codes=${params.country}`;
  const data = await fetch(
    query,
    { cache: "force-cache" },
    { next: { revalidate: 3600 } },
  ).then((res) => res.json());
  return data[0];
}

export async function getCountries() {
  const query = `https://restcountries.com/v3.1/all?fields=name,flags,translations,capital,region,population,cca3,cca2`;
  const data = await fetch(
    query,
    { cache: "force-cache" },
    { next: { revalidate: 604800 } },
  ).then((res) => res.json());
  return data;
}

export async function getCountryName({ cca3, locale }) {
  const getTrans = async () => {
    return countriesTranslation.getName(cca3, locale);
  };
  return await getTrans();
}
