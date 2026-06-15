const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Me", href: "/about" },
    { name: "Portfolio", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

export default function Footer() {
    return (
        <div className="h-full w-full bg-[#f8f8f8]  font-neo">
            <div className="w-full h-[60vh] bg-[#EEEEEE] rounded-t-[3rem] flex flex-col items-center justify-center gap-6 px-6 ">
 
                {/* Headline */}
                <h2 className="text-4xl text-center max-w-[60ch] sm:text-5xl font-semibold tracking-tight text-[#222222] leading-tight">
                Got a Vision? Let’s Bring It to Life.
                </h2>
        
                {/* Subtext */}
                <p className="text-base sm:text-lg text-center text-[#7b7b7b] leading-relaxed max-w-[60ch]">
                I&apos;m always excited to collaborate on new and innovative projects.
                Whether you&apos;re starting from scratch or refining an existing idea
                </p>
        
                {/* CTA Link */}
                <a
                href="#"
                className="mt-2 inline-flex items-center gap-1 text-[#222222] text-base font-medium underline underline-offset-4 decoration-[#222222] hover:opacity-60 transition-opacity duration-200"
                >
                Book A Call
                <span className="text-sm" aria-hidden="true">↗</span>
                </a>
        
            </div>

            <div className="bg-[url('/images/bkg4.jpg')] font-neo md:h-[26vh] h-[14vh] w-full bg-cover bg-center flex md:justify-between justify-center items-center md:px-[10rem]">
                <div className="md:flex hidden items-center gap-8">
                    {
                    navLinks.map((link, idx) => (
                        <a key={idx} href={link.href} className="text-sm text-[#f8f8f8] font-medium hover:underline hover:underline-offset-4 decoration-[#f8f8f8]">
                            {link.name}
                        </a>
                    ))  
                    }
                </div>
                <a href="mailto:vivek1314gurjar@gmail.com" className="md:text-[1.8rem] text-[1.1rem] text-[#f8f8f8] font-medium hover:underline hover:underline-offset-4 decoration-[#f8f8f8] hover:opacity-60 transition-opacity duration-200">
                    <p className="">vivek131<span>4</span>gurjar<span className="font-sans">@</span>gmail.com</p>
                </a>
            </div>
        </div>
    );
    }