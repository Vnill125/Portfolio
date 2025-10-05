import React from "react";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../utils/motionVariants";

export default function Hero() {
  return (
    <section id="top" className="min-h-[70vh] flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
        
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
            Krystian Muszyński
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Frontend Developer in progress — focusing on <strong>React</strong> &amp; modern UI.  
            I build responsive, animated user interfaces and love crafting great user experiences.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <motion.a
              href="https://movie-app-gamma-sand.vercel.app/"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 bg-primary text-white rounded-lg shadow-lg transition-transform"
            >
              🚀 Live Demo — MovieApp
            </motion.a>
            <motion.a
              href="https://github.com/Vnill125"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              💻 GitHub
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          animate="visible"
          className="relative group flex justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-transparent blur-2xl opacity-70 group-hover:opacity-100 transition-all"></div>
          <img
            src="/images/me.png"
            alt="Krystian"
            className="relative w-80 h-80 object-cover rounded-full shadow-xl border-4 border-white dark:border-gray-800 transform group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
