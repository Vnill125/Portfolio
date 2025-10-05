import React from "react";
import { FaReact, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../utils/motionVariants";
     
export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Hi! I'm <strong>Krystian</strong> — a self-taught Frontend Developer
            from Żory (near Katowice). I started my programming journey in early
            2024 and I’m passionate about building interactive UIs with React
            and modern CSS. Currently, I’m sharpening my skills in JavaScript,
            React hooks, and smooth animations.
          </p>

          <div className="flex gap-6 mt-6">
            <div className="flex items-center gap-2">
              <FaReact className="text-4xl text-blue-500 drop-shadow-md" />
              <span className="font-medium">React</span>
            </div>
            <div className="flex items-center gap-2">
              <FaJsSquare className="text-4xl text-yellow-400 drop-shadow-md" />
              <span className="font-medium">JavaScript</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTypescript className="text-4xl text-blue-600 drop-shadow-md" />
              <span className="font-medium">TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTailwindcss className="text-4xl text-teal-400 drop-shadow-md" />
              <span className="font-medium">Tailwind</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative group flex justify-center"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/30 to-transparent blur-xl opacity-70 group-hover:opacity-100 transition-all"></div>
          <img
            src="/images/me.png"
            alt="Krystian"
            className="relative w-72 h-72 object-cover rounded-3xl shadow-xl border-4 border-white dark:border-gray-800 transform group-hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
