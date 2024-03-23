import { Suspense } from "react";
import Countries from "./components/countries";
import PaginationUI from "./components/pagination";
import PaginationSkeleton from "./components/paginationSkeleton";
import CountriesSkeleton from "./components/countriesSkeleton";
import Search from "./components/search";
import SearchSkeleton from "./components/searchSkeleton";
import { baseURL } from "./lib/bases";
import { MotionDiv } from "./components/motionDiv";

const ogImage = [
  {
    url: `${baseURL}/World-countriess.png`,
    width: 1400,
    height: 1080,
    alt: "World Countriess",
  },
];

export const metadata = {
  title: "Home | World Countriess",
  openGraph: {
    title: `Home | World Countriess`,
    images: ogImage,
  },
};

export default async function Home({ searchParams }) {
  async function getData() {
    const query = search
      ? `https://restcountries.com/v3.1/name/${search}?fields=name,flags,translations,capital,region,population,cca3`
      : `https://restcountries.com/v3.1/all?fields=name,flags,translations,capital,region,population,cca3`;
    const data = await fetch(
      query,
      { cache: "force-cache" },
      { next: { revalidate: 604800 } }
    ).then((res) => res.json());
    return data;
  }

  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const countries = await getData({ search });
  const resultCount = Number(
    countries.length !== undefined ? countries.length : 0
  );
  return (
    <main className="mb-10 mt-12">
      <Suspense fallback={<SearchSkeleton />}>
        <Search
          resultCount={resultCount}
          searchQuery={search}
          pageQuery={page}
        />
      </Suspense>
      <Suspense fallback={<PaginationSkeleton />}>
        <PaginationUI
          count={resultCount}
          searchQuery={search}
          pageQuery={page}
        />
      </Suspense>
      <Suspense fallback={<CountriesSkeleton />}>
        <MotionDiv
          initial={{ y: 600, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 1.5,
          }}
        >
          {resultCount !== 0 ? (
            <Countries countries={countries} page={page} />
          ) : (
            ""
          )}
        </MotionDiv>
      </Suspense>
      <div className="my-8">
        <Suspense fallback={<PaginationSkeleton />}>
          <PaginationUI
            count={resultCount}
            searchQuery={search}
            pageQuery={page}
          />
        </Suspense>
      </div>
    </main>
  );
}
