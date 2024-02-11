"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Download, ShieldCheck, Users } from "lucide-react";

export function Testimonials() {
  return (
    <motion.div
      layout
      data-section="testimonials"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="container flex flex-col items-center justify-center gap-4 relative my-20"
    >
      <motion.h4 className="leading-[3.5rem] text-xl md:text-2xl lg:text-4xl text-accent font-bold text-center uppercase">
        <p>
          Veja alguns dos{" "}
          <span className="text-primary-foreground">depoimentos</span> <br />
          de quem já usa o{" "}
          <span className="text-secondary-foreground">
            Guia definitivo do Brás
          </span>
        </p>
      </motion.h4>
    </motion.div>
  );
}
