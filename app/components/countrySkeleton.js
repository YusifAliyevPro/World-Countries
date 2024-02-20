export default function CountrySkeleton() {
  return (
    <div className="relative mt-20 flex select-none flex-col mx-16">
      <div className="relative flex flex-col-reverse sm:flex-row justify-around w-full ">
        <div className="relative ml-3 flex flex-col text-left text-lg items-left">
          <h1 className="font-bold text-3xl animate-pulse mt-8 sm:mt-0 bg-gray-400 text-gray-400 w-fit rounded-lg">
            Azerbaijan
          </h1>
          <div className="flex-col sm:flex-row flex gap-x-20">
            <div className="flex flex-col gap-y-1 sm:gap-y-2">
              <p className="font-bold mt-12 animate-pulse bg-gray-400 text-gray-400 w-fit rounded-lg">
                Native Name: <span className="font-normal  ">Azərbaycan</span>
              </p>
              <p className="font-bold  animate-pulse bg-gray-400 text-gray-400 w-fit rounded-lg">
                Region: <span className="font-normal ">Avropa</span>
              </p>
              <p className="font-bold animate-pulse bg-gray-400 text-gray-400 w-fit rounded-lg">
                Capital: <span className="font-normal">Massaou</span>
              </p>
              <p className="font-bold animate-pulse bg-gray-400 text-gray-400 w-fit rounded-lg">
                Currencies: <span className="font-normal">Euro (k)</span>
                <span></span>
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="font-bold mt-12 animate-pulse bg-gray-400 text-gray-400 w-fit rounded-lg">
                Population: <span className="font-normal">9238329</span>
              </p>
              <p className="font-bold animate-pulse bg-gray-400 text-gray-400 w-fit rounded-lg">
                Sub Region: <span className="font-normal">Western Asia</span>
              </p>
              <p className="font-bold animate-pulse bg-gray-400 text-gray-400 w-fit rounded-lg">
                Top Level Domain: <span className="font-normal"> .az</span>
              </p>
              <p className="font-bold  animate-pulse bg-gray-400 text-gray-400 w-fit rounded-lg">
                Languages: <span className="font-normal">Swedish</span>
              </p>
            </div>
          </div>
          <div className="relative mt-8 mb-16 sm:mb-auto sm:mr-6  animate-pulse bg-gray-400 text-gray-400 w-fit rounded-lg flex flex-col sm:flex-row sm:max-w-[700px] items-center">
            <p className="text-wrap font-bold mr-2">Border Countries: </p>
            <div className="flex-row flex mt-6  text-center flex-1 sm:flex-none sm:mt-auto relative flex-wrap gap-2 sm:mr-5">
              {Array(4)
                .fill()
                .map((i) => (
                  <div key={i} className="w-fit p-2 border-solid rounded-lg">
                    <p className="font-normal">Azerbaijan</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="relative animate-pulse bg-gray-400 text-gray-400 rounded-sm  flex h-[200px] sm:h-[400px]">
          <div className=" object-fill w-[600px]" />
        </div>
      </div>
    </div>
  );
}
