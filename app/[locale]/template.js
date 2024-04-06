"use client";
import { motion } from "framer-motion";

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{
        ease: "easeInOut",
        type: "spring",
        stiffness: 90,
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}
