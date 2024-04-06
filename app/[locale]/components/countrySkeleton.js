export default function CountrySkeleton() {
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
