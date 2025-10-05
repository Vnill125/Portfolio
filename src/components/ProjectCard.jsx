import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { scaleIn } from "../utils/motionVariants";

export default function ProjectCard({ p }) {
  return (
    <motion.article
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group"
    >
      <div className="relative">
        <img
          src={p.img}
          alt={p.title}
          className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center gap-3 text-white">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 bg-primary rounded flex items-center gap-2 hover:bg-primary/80 transition-colors"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
          <a
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1 bg-gray-700 rounded flex items-center gap-2 hover:bg-gray-600 transition-colors"
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
          {p.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {p.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-gray-700 dark:text-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
