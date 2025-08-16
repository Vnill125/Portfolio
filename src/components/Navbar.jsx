import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const baseLink =
    "relative cursor-pointer select-none text-sm md:text-base text-gray-700 dark:text-gray-300 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full " +
    "after:scale-x-0 after:origin-left after:bg-rose-400 after:transition-transform after:duration-300 " +
    "hover:after:scale-x-100";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white/90 dark:bg-gray-800/80 backdrop-blur sticky top-0 z-40 border-b border-black/5 dark:border-white/5"
    >
      <div className="container flex items-center justify-between py-4">
        <a href="#top" className="text-xl font-bold text-gray-900 dark:text-white">
          Krystian Muszyński
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#work" className={baseLink}>Projects</a>
          <a href="#about" className={baseLink}>About</a>
          <a href="#contact" className={baseLink}>Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}
