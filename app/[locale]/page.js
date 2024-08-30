import { Suspense } from "react";
import Countries from "@/app/components/Countries";
import PaginationUI from "@/app/components/Pagination";
import Search from "@/app/components/Search";
import { getScopedI18n, getStaticParams } from "@/locales/server";
import { Motion } from "../components/Motion";
import { I18nProviderClient } from "@/locales/client";
import { setStaticParamsLocale } from "next-international/server";
import { getCountries } from "@/lib/utils";
import { CountriesSkeleton } from "../components/Skeletons";

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

  const countries = await getCountries();
  const resultCount = Number(
    countries.length !== undefined ? countries.length : 0,
  );
  return (
    <main className="mb-10 mt-12 min-h-svh">
      <I18nProviderClient locale={locale}>
        <Suspense
          fallback={
            <div>
              <div className="mx-auto mb-4 mt-6 h-[44px] w-[300px] animate-pulse rounded-full bg-gray-400 sm:w-[500px]"></div>
            </div>
          }
        >
          <Search />
        </Suspense>
      </I18nProviderClient>
      <Suspense
        fallback={
          <div className="relative mt-5 flex w-full items-center justify-center rounded-xl">
            <div className="h-[36px] w-[236px] animate-pulse rounded-xl bg-gray-400"></div>
          </div>
        }
      >
        <PaginationUI count={resultCount} />
      </Suspense>
      <Motion
        initial={{ y: 600, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 50,
          duration: 1.5,
        }}
      >
        <Suspense fallback={<CountriesSkeleton />}>
          {resultCount !== 0 && (
            <I18nProviderClient locale={locale}>
              <Countries countriess={countries} locale={locale} />
            </I18nProviderClient>
          )}
        </Suspense>
      </Motion>
    </main>
  );
}
