import React from "react";
import { motion } from "framer-motion";
export const footerVariants = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
    },
  },
  exit: {
    opacity: 0,
    y: 50,
  },
};

export default function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      className="w-full p-4 text-center text-lg absolute bottom-0 left-0"
    >
      2023 &copy; تم إنشائه بواسطه{" "}
      <a
        className="text-primary font-bold"
        href="https://scorpions-store.vercel.app/"
        target="_blank"
      >
        Scorpions
      </a>
    </motion.footer>
  );
}
