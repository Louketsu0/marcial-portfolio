'use client'

import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="w-full bg-[#0f0020] text-[#f0f0f0] px-6 py-4 fixed top-0 left-0 z-50 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex flex-col items-start">
                    <h1 className="text-xl font-bold tracking-wide text-[#FFFFFF]">
                        Marcial Jiménez
                    </h1>
                </div>
                <ul className="flex gap-6 text-sm sm:text-base">
                    {[
                        { name: "Home", href: "/" },
                        { name: "About", href: "/about" },
                        { name: "Projects", href: "/projects" },
                        { name: "Contact", href: "/contact" },
                        { name: "Game", href: "/game" },
                     

                    ].map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="relative inline-block transition-transform duration-150 ease-in-out hover:text-[#3b82f6] hover:scale-105 active:scale-95"
                            >
                                <span className="relative z-10">{item.name}</span>
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3b82f6] transition-all duration-300 ease-in-out group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

