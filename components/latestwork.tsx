export default function LatestWork() {
  return (
    <div className="latest-work text-[#222222] flex flex-col justify-center items-center h-full">

      <div className="mb-4 flex items-center gap-2 ">
          <span className="h-2 w-2 rounded-full bg-[#222222]" />
          <span className="text-sm font-medium text-[#222222]">
            Portfolio
          </span>
      </div>
      <h2 className="text-3xl font-medium leading-tight text-[#222222] md:text-5xl">
        Explore My Dev Portfolio
      </h2>
       <h2 className="text-3xl mb-[5rem] font-medium leading-tight text-[#222222] md:text-5xl">
        Creative Solutions
      </h2>

      
      <div className="grid w-full h-full gap-4
        grid-cols-2
        md:grid-cols-3 md:grid-rows-3">

        {/* Cell 1 */}
        <div className="
          col-start-1 row-start-1
          md:col-start-1 md:row-start-1
          bg-[#e2e2e2] rounded-2xl flex items-center justify-center text-[#222222] font-medium md:h-[16rem] h-[10rem]">
          1
        </div>

        {/* Cell 2 */}
        <div className="
          col-start-2 row-start-1
          md:col-start-2 md:row-start-1
          bg-[#e2e2e2] rounded-2xl flex items-center justify-center text-[#222222] font-medium md:h-[16rem] h-[10rem]">
          2
        </div>

        {/* Cell 3 — hidden on small, visible on md+ */}
        <div className="
          hidden
          md:flex md:col-start-3 md:row-start-1
          bg-[#e2e2e2] rounded-2xl items-center justify-center text-[#222222] font-medium md:h-[16rem] h-[10rem]">
          3
        </div>

        {/* Cell 4 — full width on small, spans 2 cols 2 rows on md+ */}
        <div className="
            col-span-2 row-start-2
            md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-2
            bg-[#222222] p-2 rounded-[12px] flex items-center gap-2 justify-center text-[#f8f8f8] font-medium md:h-full h-[16rem]">
            
            <div className="h-full w-[75%] bg-red-300 rounded-[7px]">
              <img src="images/image.png" className="w-full h-full" alt="" />
            </div>

            <div className="flex-1 h-full flex flex-col gap-2">
              <div className="h-1/2 w-full bg-[#1C1A17] rounded-[7px]"></div>
              <div className="h-1/2 w-full bg-[#1C1A17] rounded-[7px]"></div>
            </div>
        </div>

        {/* Cell 5 */}
        <div className="
          col-start-1 row-start-3
          md:col-start-3 md:row-start-2
          bg-[#e2e2e2] rounded-2xl flex items-center justify-center text-[#222222] font-medium md:h-[16rem] h-[10rem]">
          5
        </div>

        {/* Cell 6 */}
        <div className="
          col-start-2 row-start-3
          md:col-start-3 md:row-start-3
          bg-[#e2e2e2] rounded-2xl flex items-center justify-center text-[#222222] font-medium md:h-[16rem] h-[10rem]">
          6
        </div>
        </div>
    </div>
  );
}