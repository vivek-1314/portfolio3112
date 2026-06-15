export default function BlogsWork() {
    return (
        <div className="w-full md:h-screen h-full flex flex-col items-center justify-center">
            
            <div className="mb-4 flex items-center gap-2 ">
                <span className="h-2 w-2 rounded-full bg-[#222222]" />
                <span className="text-sm font-medium text-[#222222]">
                    Blogs
                </span>
            </div>
            <h2 className="text-3xl font-medium leading-tight text-[#222222] md:text-5xl">
                Explore Blogs
            </h2>
            <h2 className="text-3xl mb-[5rem] font-medium leading-tight text-[#222222] md:text-5xl">
                Creative writings
            </h2>

            <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-2 grid-rows-1 md:px-0 md:gap-10 gap-2 w-full h-full">
                <div className="border bg-gray-200 rounded-xl flex flex-col md:h-full h-80">
                    <div className="w-full rounded-xl bg-gray-300 h-[60%]"></div>

                </div>
                <div className="border bg-gray-200 rounded-xl flex flex-col">
                    <div className="w-full rounded-xl bg-gray-300 h-[60%]"></div>

                </div>
                <div className="border md:block hidden bg-gray-200 rounded-xl flex flex-col">
                    <div className="w-full rounded-xl bg-gray-300 h-[60%]"></div>
                </div>
            </div>

        </div>
    );
    }
