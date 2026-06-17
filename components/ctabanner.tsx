export default function CtaBanner() {
    return (
        <div className="w-full h-full rounded-2xl flex items- justify-center font-neo">
        <div className="relative w-full md:h-110 h-90 overflow-hidden rounded-xl flex justify-center items-center overflow-hidden">

            <img
            src="images/bkg.png"
            className="h-auto w-full rotate-90"
            alt=""
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0  bg-black/69" />

            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
            <p className="text-sm tracking-wider text-zinc-400 uppercase mb-4">
                Open to Collaboration
            </p>

            <h2 className="text-white text-4xl md:text-6xl font-semibold mb-4">
                Have a Project in Mind?
            </h2>

            <p className="text-zinc-300 max-w-xl text-base md:text-lg leading-relaxed mb-8">
                I'm always excited to discuss new ideas
                <br />
                and interesting challenges.
            </p>

            <a
                href="https://wa.me/918817358864?text=Hi%20Vivek,%20I%20have%20a%20project%20idea%20and%20would%20like%20to%20discuss%20it."
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 rounded-full bg-white text-black text-lg font-medium transition-all duration-300 hover:px-8"
                >
                Let's Talk
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                </span>
                </a>
            </div>

        </div>
        </div>
    );
    }