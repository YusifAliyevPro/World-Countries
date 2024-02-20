export default function CountriesSkeleton() {
  return (
    <div className="justify-content-center mx-4 flex flex-wrap items-center justify-center gap-x-10">
      {Array(42)
        .fill()
        .map((i) => (
          <div
            key={i}
            scroll={false}
            className="justify-content-center transition-transform duration-300 ease-in-out hover:scale-110 relative mt-10 inline-block w-[325px] select-none items-center justify-center rounded-xl bg-gray-200 text-center"
          >
            <div className="relative">
              <div className="object-cover bg-gray-400 animate-pulse h-[185px] w-full rounded-t-md" />
            </div>
            <p className="text-black text-left ml-8 font-bold text-2xl my-3">
              <span className=" bg-gray-400 w-fit animate-pulse text-gray-400 rounded-md">
                Azerbaijan
              </span>
            </p>
            <p className="text-slate-900 text-left ml-8  text-md my-3">
              <span className="font-bold">Capital: </span>{" "}
              <span className=" bg-gray-400 w-fit animate-pulse text-gray-400 rounded-md">
                Canberra
              </span>
            </p>
            <p className="text-slate-900 text-left ml-8  text-md my-3">
              <span className="font-bold">Region: </span>{" "}
              <span className=" bg-gray-400 w-fit animate-pulse text-gray-400 rounded-md">
                Asia
              </span>
            </p>
            <p className="text-slate-900 text-left ml-8  text-md my-3">
              <span className="font-bold">Population: </span>{" "}
              <span className=" bg-gray-400 w-fit animate-pulse text-gray-400 rounded-md">
                2932932929
              </span>
            </p>
          </div>
        ))}
    </div>
  );
}
