export default function CountriesSkeleton() {
  return (
    <div className="justify-content-center mx-4 flex flex-wrap items-center justify-center gap-x-10">
      {Array(42)
        .fill()
        .map((i) => (
          <div
            key={i}
            scroll={false}
            className="justify-content-center relative mt-10 inline-block w-[325px] select-none items-center justify-center rounded-xl bg-gray-200 text-center transition-transform duration-300 ease-in-out hover:scale-110"
          >
            <div className="relative">
              <div className="h-[185px] w-full animate-pulse rounded-t-md bg-gray-400 object-cover" />
            </div>
            <p className="my-3 ml-8 text-left text-2xl font-bold text-black">
              <span className=" w-fit animate-pulse rounded-md bg-gray-400 text-gray-400">
                AzerbaijanTurkey
              </span>
            </p>
            <p className="text-md my-3 ml-8 animate-pulse rounded-md bg-gray-400 text-gray-400 text-left w-fit">
              <span className="font-bold">Capital: </span> <span>Canberra</span>
            </p>
            <p className="text-md my-3 ml-8 animate-pulse rounded-md bg-gray-400 text-gray-400 text-left w-fit">
              <span className="font-bold">Region: </span>{" "}
              <span className=" w-fit">Asia</span>
            </p>
            <p className="text-md my-3 ml-8  text-left w-fit animate-pulse rounded-md bg-gray-400 text-gray-400">
              <span className="font-bold">Population: </span>{" "}
              <span>2932932</span>
            </p>
          </div>
        ))}
    </div>
  );
}
