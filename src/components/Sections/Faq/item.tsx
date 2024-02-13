import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

const MotionCard = motion(Card);

export function FaqItem({
  delayMs,
  children,
}: {
  delayMs: number;
  children: ReactNode;
}) {
  return (
    <MotionCard
      className="flex bg-accent rounded-[100px] border-8 border-primary w-72 h-72 p-3 justify-center items-center"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ delay: delayMs }}
    >
      <CardContent className="font-light text-xl lg:text-2xl text-foreground text-center p-0">
        {children}
      </CardContent>
    </MotionCard>
  );
}
