"use client";

import { footerVariants } from "@/config/animation";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="bg-background flex w-full select-none items-center justify-center px-5 py-4"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={footerVariants}
    >
      <div className="container flex items-center justify-center">
        <p className="m-0 text-center text-white text-opacity-75">
          Todos os direitos reservados a Sociella Digital® -{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </motion.footer>
  );
}
