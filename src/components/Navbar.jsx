import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="max-w-[80vw] mx-auto py-2 rounded-full bg-gray-900/90 backdrop-blur border border-gray-800 shadow-lg">
            <div className="my-2">
                <ul className="flex items-center justify-between px-6 py-3 text-sm md:text-base">
                    <li className="font-bold tracking-wide">
                        <Link href="/">Sharad Vyas</Link>
                    </li>

                    <div className="flex justify-around gap-4 md:gap-8">
                        <li>
                            <Link href="/home">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/project">Project</Link>
                        </li>
                        <li>
                            <Link href="/skills">Skills</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
