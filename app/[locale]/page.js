import { Suspense } from "react";
import Countries from "@/app/components/Countries";
import PaginationUI from "@/app/components/Pagination";
import PaginationSkeleton from "@/app/components/PaginationSkeleton";
import CountriesSkeleton from "@/app/components/CountriesSkeleton";
import Search from "@/app/components/Search";
import SearchSkeleton from "@/app/components/SearchSkeleton";
import { getScopedI18n, getStaticParams } from "@/locales/server";
import { Motion } from "../components/Motion";
import { I18nProviderClient } from "@/locales/client";
import { setStaticParamsLocale } from "next-international/server";
import { getCountries } from "@/lib/utils";

export async function generateMetadata({ params }) {
  const locale = params.locale;
  const t = await getScopedI18n("Home.MetaData");
  return {
    title: `${t("title")} | World Countriess`,
    url: `/${locale}`,
    alternates: {
      canonical: `/`,
      languages: {
        "en-US": `/en`,
        "en-GB": `/en`,
        "az-AZ": `/az`,
      },
    },
    openGraph: {
      title: `${t("title")} | World Countriess`,
      url: `/${locale}`,
    },
  };
}

export function generateStaticParams() {
  return getStaticParams();
}

export default async function Home({ params }) {
  const { locale } = params;
  setStaticParamsLocale(locale);
  const search = undefined;
  const page = 1;

  const countries = await getCountries();
  const resultCount = Number(
    countries.length !== undefined ? countries.length : 0
  );
  return (
    <main className="mb-10 mt-12">
      <I18nProviderClient locale={locale}>
        <Suspense fallback={<SearchSkeleton />}>
          <Search
            resultCount={resultCount}
            searchQuery={search}
            pageQuery={page}
          />
        </Suspense>
      </I18nProviderClient>
      <Suspense fallback={<PaginationSkeleton />}>
        <PaginationUI
          count={resultCount}
          searchQuery={search}
          pageQuery={page}
        />
      </Suspense>
      <Suspense fallback={<CountriesSkeleton />}>
        <Motion
          initial={{ y: 600, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 1.5,
          }}
        >
          {resultCount !== 0 && (
            <I18nProviderClient locale={locale}>
              <Countries countriess={countries} locale={locale} page={page} />
            </I18nProviderClient>
          )}
        </Motion>
      </Suspense>
    </main>
  );
}
