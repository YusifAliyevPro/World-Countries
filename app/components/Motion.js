//app/Motion.js
"use client";
import { motion } from "framer-motion";

export const Motion = ({ type, children, ...props }) => {
  if (type === undefined) {
    return <motion.div {...props}>{children}</motion.div>;
  } else if (type === "h1") {
    return <motion.h1 {...props}>{children}</motion.h1>;
  } else if (type === "h2") {
    return <motion.h2 {...props}>{children}</motion.h2>;
  } else if (type === "p") {
    return <motion.p {...props}>{children}</motion.p>;
  }
};
