export function CountriesSkeleton() {
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

export function CountrySkeleton() {
  return (
    <div className="relative select-none mx-6 mt-20 flex flex-col sm:mx-16">
      <div className="relative flex w-full flex-col-reverse justify-between sm:flex-row ">
        <div className="items-left relative ml-3 flex flex-col text-left text-lg">
          <h1 className="mt-8 w-fit animate-pulse rounded-md bg-gray-400 text-gray-400 text-3xl font-bold sm:mt-0">
            Azerbaijan
          </h1>
          <div className=" flex flex-col gap-x-20 sm:flex-row">
            <div className="flex flex-col gap-y-1 sm:gap-y-2">
              <p className="mt-12 w-fit animate-pulse rounded-md bg-gray-400 text-gray-400 font-bold">
                Native Name: <span className="font-normal">Azərbaycan</span>
              </p>
              <p className="font-bold w-fit animate-pulse rounded-md bg-gray-400 text-gray-400">
                Region: <span className="font-normal">Asia</span>
              </p>
              <p className="font-bold w-fit animate-pulse rounded-md bg-gray-400 text-gray-400">
                Capital: <span className="font-normal">Baku</span>
              </p>
              <p className="font-bold w-fit animate-pulse rounded-md bg-gray-400 text-gray-400">
                Currencies:
                <span className="font-normal">Azerbaijani Manat</span>
              </p>
            </div>
            <div className="mb-8 flex flex-col gap-y-2">
              <p className="mt-12 font-bold w-fit animate-pulse rounded-md bg-gray-400 text-gray-400">
                Population: <span className="font-normal">10928189</span>
              </p>
              <p className="font-bold w-fit animate-pulse rounded-md bg-gray-400 text-gray-400">
                Sub Region: <span className="font-normal">Western Asia</span>
              </p>
              <p className="mr-5 font-bold w-fit animate-pulse rounded-md bg-gray-400 text-gray-400">
                Top Level Domain: <span className="font-normal">.az</span>
              </p>
              <p className="font-bold w-fit animate-pulse rounded-md bg-gray-400 text-gray-400">
                Languages:{" "}
                <span className="font-normal">Azerbaijani, English</span>
              </p>
            </div>
          </div>
          <div className="relative w-fit animate-pulse rounded-md bg-gray-400 text-gray-400 mb-16 flex flex-col items-start sm:mb-auto sm:mr-6 sm:max-w-[700px] sm:flex-row sm:items-center">
            <p className="mr-2 text-wrap font-bold">Border Countries: </p>
            <div className="relative mt-6 flex flex-row flex-wrap gap-2 sm:mr-5 sm:mt-auto">
              {Array(5)
                .fill()
                .map((index) => (
                  <div
                    key={index}
                    href={`/countries/AZE`}
                    className=" flex-1 w-fit animate-pulse rounded-md bg-gray-400 text-gray-400 select-none text-nowrap border-solid p-2 text-centersm:flex-none"
                  >
                    <p className="font-normal">Georgia</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="relative mx-5  flex bg-transparent max-h-[400px] drop-shadow-2xl sm:mx-0 ">
          <div className="w-[600px] h-[200px] sm:h-[400px] animate-pulse rounded-md bg-gray-400 text-gray-400 select-none object-cover" />
        </div>
      </div>
      <div className="font-bold text-lg w-fit animate-pulse rounded-md bg-gray-400 text-gray-400">
        Show More
      </div>
    </div>
  );
}
