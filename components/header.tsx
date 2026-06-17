const navigationLinks = [
    { name: "About Me", href: "#about" },
    { name: "Portfolio", href: "#latest-work" },
    { name: "Services", href: "#experience" },
    { name: "Blog", href: "#blogs-work" },
];

export default function Header() {


    return (
        <header className="flex items-center gap-[4rem] text-[#222222]">
            <img className="h-[3rem] bg-blend-darken" src="/images/logo.png" alt="Logo" />
            <div className="md:flex hidden items-center gap-[2rem] font-neo ">
                {
                    navigationLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-lg font-medium text-[0.88rem]">
                            {link.name}
                        </a>
                    ))
                }
            </div>
            <a
                className="ml-auto mr-2"
                href="https://wa.me/918817358864?text=Hi%20Vivek,%20I%20would%20like%20to%20book%20a%20call."
                target="_blank"
                rel="noopener noreferrer"
                >
                <span className="md:text-[0.9rem] text-[0.8rem] leading-none">
                    Book A Call
                </span>
                <div className="h-[0.09rem] bg-black"></div>
                </a>
        </header>
    ) ;
}