import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motionVariants";

export default function Projects() {
  return (
    <section id="work" className="py-16 scroll-mt-24 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
