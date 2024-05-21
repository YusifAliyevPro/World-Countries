import { Suspense } from "react";
import LottieComponent from "../components/LottieAnimation";
import { getScopedI18n } from "@/locales/server";

export async function generateMetadata({ params }) {
  const locale = params.locale;
  const t = await getScopedI18n({ locale, namespace: "NotFound" });
  return {
    title: t("title"),
    description: t("notFoundMessage"),
    creator: "YusifAliyevPro",
    siteName: "World Countries",
    openGraph: {
      title: t("title"),
      description: t("notFoundMessage"),
    },
  };
}

export default async function NotFound() {
  const t = await getScopedI18n("NotFound");
  return (
    <div className="relative mt-10 flex w-full flex-col items-center justify-center">
      <div className="relative mx-3 min-h-[240px] sm:min-h-[420px] flex h-full flex-col sm:mt-3">
        <Suspense
          fallback={<div className=" min-h-[240px] sm:min-h-[420px]"></div>}
        >
          <LottieComponent animationPath="/404.lottie" />
        </Suspense>
      </div>
      <h1 className="relative mx-7 mt-4 text-center text-2xl font-bold sm:text-3xl">
        {t("notFoundMessage")}
      </h1>
    </div>
  );
}
