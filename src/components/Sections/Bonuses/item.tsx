import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

const MotionCard = motion(Card);

export function BonusItem({
  delayMs,
  title,
  image,
  even = false,
  odd = false,
  children
}: {
  title: string;
  image: string;
  delayMs: number;
  even?: boolean;
  odd?: boolean;
  children: ReactNode
}) {
  const classes = cn("rounded-tr-3xl rounded-br-3xl w-full flex flex-row items-center gap-3 overflow-hidden", {
    "bg-accent/90": odd,
    "bg-accent/70": even,
  });

  return (
    <MotionCard
      className={classes}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ delay: delayMs }}
    >
      <CardHeader className="p-0">
        <div className="flex justify-center relative w-[80px] h-[100px]">
          <Image src={`/assets/${image}.jpg`} alt="" fill />
        </div>
      </CardHeader>
      <CardContent className="p-0 w-3/4">
        <h2 className="text-secondary-foreground font-bold text-2xl">
          {title}
        </h2>
        <p className="text-background text-xl">
          {children}
        </p>
      </CardContent>
    </MotionCard>
  );
}
