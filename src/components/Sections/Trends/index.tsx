"use client";

import { motion } from "framer-motion";
import { slideUpVariants } from "@/config/animation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MotionButton = motion(Button);

export function Trends() {
  return (
    <>
      <motion.div
        layout
        data-section="trends"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container flex flex-col items-center justify-center gap-4 my-20"
      >
        <div className="flex items-center justify-center relative max-w-full max-h-full">
          <Image src="/assets/cloths.png" alt="" width={1100} height={1100} />
          <h2 className="absolute -left-[100px] -rotate-90 text-xl md:text-2xl lg:text-4xl text-accent font-bold text-center uppercase">
            <p>
              <span className="text-secondary-foreground">
                Tendências no Brás
              </span>
            </p>
          </h2>
        </div>
        <Link
          href="https://bit.ly/gdb-guiadefinitivodobras2"
          passHref
          target="_blank"
        >
          <MotionButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            variant="default"
            hover="effect"
            color="primary"
            size="4xl"
            rounded="full"
            className="my-5"
          >
            QUERO MEU ACESSO AGORA
          </MotionButton>
        </Link>
      </motion.div>
    </>
  );
}
