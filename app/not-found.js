import { Suspense } from "react";
import LottieComponent from "./components/LottieAnimation";

export const metadata = {
  title: "404 Not Found",
  description: " The page you're looking for was not found",
  creator: "YusifAliyevPro",
  siteName: "World Countries",
  openGraph: {
    description: " The page you're looking for was not found",
  },
};

export default function NotFound() {
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
        The page you&apos;re looking for was not found
      </h1>
    </div>
  );
}
