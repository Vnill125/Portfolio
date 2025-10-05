import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "../utils/motionVariants";
 
export default function Contact() {
  return (
    <section id="contact" className="py-16 scroll-mt-24 bg-gray-50 dark:bg-gray-900">
      <div className="container text-center">
        <motion.h3
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl font-bold mb-3"
        >
          Get in touch
        </motion.h3>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 mb-6"
        >
          Looking for a junior frontend role. Reach out for collaborations or
          job offers.
        </motion.p>

        <div className="flex justify-center gap-3">
          <motion.a
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:kris125132@gmail.com"
            className="px-4 py-2 bg-primary text-white rounded shadow-md"
          >
            Email me
          </motion.a>
          <motion.a
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/Vnill125"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border rounded shadow-md"
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </section>
  );
}
