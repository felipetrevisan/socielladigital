"use client";

import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.div className="flex justify-center items-center bg-destructive w-full p-4">
      <h2 className="uppercase text-md md:text-xl text-accent animate-bounce flex justify-center items-center">
        <span className="font-bold">Atenção</span>: Garanta seu desconto hoje!
      </h2>
    </motion.div>
  );
}
