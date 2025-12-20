import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
    { text: "Home", link: "/" },
    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
      { text: "Gallery", link: "/Gallery" },
];

export default function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const activeIndex = navLinks.findIndex((link) => link.link === location.pathname);

    return (
        <nav className="max-w-3xl bg-black/30 text-white mx-auto mt-3  rounded-3xl shadow-md relative">
            <div className="flex justify-between items-center py-2 px-4">

                <div className="text-2xl block md:hidden font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-white select-none">
                    TJEW
                </div>


                <div className="hidden sm:flex flex-1 justify-around items-center relative">
                    {navLinks.map((item) => (
                        <a
                            key={item.text}
                            href={item.link}
                            className="relative px-4 py-2 flex items-center justify-center whitespace-nowrap hover:text-yellow-400 transition"
                        >
                            {item.text}
                        </a>
                    ))}

                    <motion.div
                        layout
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className="absolute bottom-1 h-1 bg-yellow-400 rounded-full"
                        style={{
                            width: `100px`,
                            left: `calc(${activeIndex < 0 ? 7 : activeIndex} * ${100 / navLinks.length}% + 70px)`,
                        }}
                    />
                </div>

                <button
                    className="sm:hidden w-10 h-10 flex flex-col items-center justify-center bg-black/30 rounded-full hover:bg-black/50 transition"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="sm:hidden bg-black/30 rounded-b-3xl overflow-hidden mt-1"
                    >
                        <div className="flex flex-col py-2">
                            {navLinks.map((item) => (
                                <a
                                    key={item.text}
                                    href={item.link}
                                    className="py-3 px-6 text-center hover:bg-white/10 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.text}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
