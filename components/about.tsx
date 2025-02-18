"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <p>Before university, I started my journey with <strong>HTML</strong> and <strong>CSS</strong>, designing websites and gradually learning <strong>JavaScript</strong> and <strong>PHP</strong> to add more functionality. I later transitioned to <strong>WordPress</strong> as a website designer, collaborating with experts on <strong>performance optimization</strong>, <strong>SEO</strong>, and <strong>content creation</strong>. However, my true passion is <strong>programming</strong>, and I’m now focused on leveraging <strong>cutting-edge technologies</strong> and <strong>AI</strong> to improve my work and solve real-world problems.</p>
      </p>

      <p>
        <p><span className="italic">When I'm not coding</span>, I enjoy playing video games, playing football, and reading management books to enhance my <span className="font-medium">soft skills</span> like leadership, time management, and communication. I believe in balancing technical expertise with personal growth and staying curious about new opportunities.</p>

      </p>
    </motion.section>
  );
}
