"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  return (
    <motion.div
      layout
      data-section="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="container flex flex-col items-center justify-center gap-4 relative my-14 lg:my-20"
    >
      <motion.h4 className="md:leading-[3.5rem] text-xl md:text-2xl lg:text-4xl text-accent font-bold text-center uppercase">
        <p>
          Veja alguns dos{" "}
          <span className="text-primary">depoimentos</span> <br />
          de quem já usa o{" "}
          <span className="text-secondary-foreground">
            Guia definitivo do Brás
          </span>
        </p>
      </motion.h4>
      <div className="grid grid-cols-4 gap-3">
        <div className="flex flex-col gap-2">
          <div className="relative md:h-[280px] overflow-hidden border-4 border-primary">
            <Image
              src="/assets/testimonial-1.png"
              alt=""
              width={200}
              height={280}
              className="h-auto max-w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative md:h-[220px] overflow-hidden border-4 border-primary">
            <Image
              src="/assets/testimonial-2.png"
              alt=""
              width={200}
              height={220}
              className="h-auto max-w-full"
            />
          </div>
          <div className="relative md:h-[180px] overflow-hidden border-4 border-primary">
            <Image
              src="/assets/testimonial-3.png"
              alt=""
              width={200}
              height={180}
              className="h-auto max-w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative md:h-[180px] overflow-hidden border-4 border-primary">
            <Image
              src="/assets/testimonial-4.png"
              alt=""
              width={200}
              height={180}
              className="h-auto max-w-full"
            />
          </div>
          <div className="relative md:h-[180px] overflow-hidden border-4 border-primary">
            <Image
              src="/assets/testimonial-5.png"
              alt=""
              width={200}
              height={180}
              className="h-auto max-w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative md:h-[280px] overflow-hidden border-4 border-primary">
            <Image
              src="/assets/testimonial-6.png"
              alt=""
              width={200}
              height={280}
              className="h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
