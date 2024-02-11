"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Award, Download, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { slideUpVariants } from "@/config/animation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MotionButton = motion(Button);
const MotionCard = motion(Card);

export function Home() {
  return (
    <motion.div
      layout
      data-section="home"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="container flex flex-col items-center justify-center gap-4 relative"
    >
      <motion.h2
        className="leading-[3.5rem] text-2xl md:text-3xl lg:text-5xl text-accent font-bold text-center uppercase"
        variants={slideUpVariants}
        initial="initial"
        animate="animate"
      >
        <p>
          <span className="text-primary-foreground">Multiplique</span> suas
          vendas! <br />
          Não perca <span className="text-secondary-foreground">
            tempo
          </span> e <span className="text-secondary-foreground">dinheiro</span>!
        </p>
      </motion.h2>
      <motion.h4
        className="text-md md:text-xl lg:text-2xl font-bold text-accent text-center uppercase"
        variants={slideUpVariants}
        initial="initial"
        animate="animate"
      >
        Veja o vídeo e{" "}
        <span className="text-primary-foreground">saiba mais</span>.
      </motion.h4>
      <motion.iframe
        className="my-10 border-4 border-primary-foreground rounded-3xl aspect-video"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        width="800"
        height="400"
        src="https://www.youtube.com/embed/BU3hTo08Erw"
        title="GDB - Guia Definitivo do Brás"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></motion.iframe>
      <motion.h4
        className="text-md md:text-xl lg:text-2xl text-accent font-bold text-center uppercase"
        variants={slideUpVariants}
        initial="initial"
        animate="animate"
      >
        <p>
          Clique no{" "}
          <span className="text-primary-foreground">botão abaixo</span> e saiba
          como ter <br />
          acesso ao{" "}
          <span className="text-primary-foreground">
            único e mais completo
          </span>{" "}
          <span className="text-secondary-foreground">
            guia de compras do brás
          </span>
        </p>
      </motion.h4>
      <Link
        href="https://bit.ly/gdb-guiadefinitivodobras1"
        passHref
        target="_blank"
      >
        <MotionButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          variants={slideUpVariants}
          variant="default"
          hover="effect"
          color="primary"
          size="4xl"
          rounded="full"
          className="my-5"
        >
          QUERO MEU ACESSO
        </MotionButton>
      </Link>
      <Carousel className="md:hidden w-full max-w-xs">
        <CarouselContent>
          <CarouselItem>
            <MotionCard
              className="bg-transparent rounded-[100px] border-4 border-secondary-foreground h-80 p-5"
              initial={{ opacity: 0, marginLeft: -100 }}
              animate={{ opacity: 1, marginLeft: 0 }}
              exit={{ opacity: 0, marginLeft: -100 }}
              transition={{ delay: 0.1 }}
            >
              <CardHeader>
                <CardTitle className="flex justify-center">
                  <Download className="stroke-accent" size="96px" />
                </CardTitle>
              </CardHeader>
              <CardContent className="font-light text-lg text-accent text-center">
                <p>
                  <span className="text-secondary-foreground font-bold">
                    Acesso imediato
                  </span>{" "}
                  pelo celular ou computador
                </p>
              </CardContent>
            </MotionCard>
          </CarouselItem>
          <CarouselItem>
            <MotionCard
              className="bg-transparent rounded-[100px] border-4 border-secondary-foreground h-80 p-5"
              initial={{ opacity: 0, marginLeft: -100 }}
              animate={{ opacity: 1, marginLeft: 0 }}
              exit={{ opacity: 0, marginLeft: -100 }}
              transition={{ delay: 0.1 }}
            >
              <CardHeader>
                <CardTitle className="flex justify-center">
                  <Download className="stroke-accent" size="96px" />
                </CardTitle>
              </CardHeader>
              <CardContent className="font-light text-lg text-accent text-center">
                <p>
                  <span className="text-secondary-foreground font-bold">
                    Acesso imediato
                  </span>{" "}
                  pelo celular ou computador
                </p>
              </CardContent>
            </MotionCard>
          </CarouselItem>
          <CarouselItem>
            <MotionCard
              className="bg-transparent rounded-[100px] border-4 border-secondary-foreground h-80 p-5"
              initial={{ opacity: 0, marginLeft: -100 }}
              animate={{ opacity: 1, marginLeft: 0 }}
              exit={{ opacity: 0, marginLeft: -100 }}
              transition={{ delay: 0.1 }}
            >
              <CardHeader>
                <CardTitle className="flex justify-center">
                  <Download className="stroke-accent" size="96px" />
                </CardTitle>
              </CardHeader>
              <CardContent className="font-light text-lg text-accent text-center">
                <p>
                  <span className="text-secondary-foreground font-bold">
                    Acesso imediato
                  </span>{" "}
                  pelo celular ou computador
                </p>
              </CardContent>
            </MotionCard>
          </CarouselItem>
          <CarouselItem>
            <MotionCard
              className="bg-transparent rounded-[100px] border-4 border-secondary-foreground h-80 p-5"
              initial={{ opacity: 0, marginLeft: -100 }}
              animate={{ opacity: 1, marginLeft: 0 }}
              exit={{ opacity: 0, marginLeft: -100 }}
              transition={{ delay: 0.1 }}
            >
              <CardHeader>
                <CardTitle className="flex justify-center">
                  <Download className="stroke-accent" size="96px" />
                </CardTitle>
              </CardHeader>
              <CardContent className="font-light text-lg text-accent text-center">
                <p>
                  <span className="text-secondary-foreground font-bold">
                    Acesso imediato
                  </span>{" "}
                  pelo celular ou computador
                </p>
              </CardContent>
            </MotionCard>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="md:gap-7 md:grid md:grid-cols-2 lg:grid-cols-4 hidden">
        <MotionCard
          className="bg-transparent rounded-[100px] border-4 border-secondary-foreground w-60 h-80 p-5"
          initial={{ opacity: 0, marginLeft: -100 }}
          animate={{ opacity: 1, marginLeft: 0 }}
          exit={{ opacity: 0, marginLeft: -100 }}
          transition={{ delay: 0.1 }}
        >
          <CardHeader>
            <CardTitle className="flex justify-center">
              <Download className="stroke-accent" size="96px" />
            </CardTitle>
          </CardHeader>
          <CardContent className="font-light text-lg text-accent text-center">
            <p>
              <span className="text-secondary-foreground font-bold">
                Acesso imediato
              </span>{" "}
              pelo celular ou computador
            </p>
          </CardContent>
        </MotionCard>
        <MotionCard
          className="bg-transparent rounded-[100px] border-4 border-secondary-foreground w-60 h-80 p-5"
          initial={{ opacity: 0, marginLeft: -200 }}
          animate={{ opacity: 1, marginLeft: 0 }}
          exit={{ opacity: 0, marginLeft: -200 }}
          transition={{ delay: 0.3 }}
        >
          <CardHeader>
            <CardTitle className="flex justify-center">
              <ShieldCheck className="stroke-accent" size="96px" />
            </CardTitle>
          </CardHeader>
          <CardContent className="font-light text-lg text-accent text-center">
            <p>
              Tenha acesso{" "}
              <span className="text-secondary-foreground font-bold">
                vitalício
              </span>
              , compra única
            </p>
          </CardContent>
        </MotionCard>
        <MotionCard
          className="bg-transparent rounded-[100px] border-4 border-secondary-foreground w-60 h-80 p-5"
          initial={{ opacity: 0, marginLeft: -300 }}
          animate={{ opacity: 1, marginLeft: 0 }}
          exit={{ opacity: 0, marginLeft: -300 }}
          transition={{ delay: 0.5 }}
        >
          <CardHeader>
            <CardTitle className="flex justify-center">
              <Users className="stroke-accent" size="96px" />
            </CardTitle>
          </CardHeader>
          <CardContent className="font-light text-lg text-accent text-center">
            <p>
              + de 10.000 pesssoas já economizaram{" "}
              <span className="text-secondary-foreground font-bold">
                tempo e dinheiro
              </span>
            </p>
          </CardContent>
        </MotionCard>
        <MotionCard
          className="bg-transparent rounded-[100px] border-4 border-secondary-foreground w-60 h-80 p-5"
          initial={{ opacity: 0, marginLeft: -400 }}
          animate={{ opacity: 1, marginLeft: 0 }}
          exit={{ opacity: 0, marginLeft: -400 }}
          transition={{ delay: 0.7 }}
        >
          <CardHeader>
            <CardTitle className="flex justify-center">
              <Award className="stroke-accent" size="96px" />
            </CardTitle>
          </CardHeader>
          <CardContent className="font-light text-lg text-accent text-center">
            <p>
              <span className="text-secondary-foreground font-bold">
                Garantia
              </span>{" "}
              incondicional de 7 dias
            </p>
          </CardContent>
        </MotionCard>
      </div>
    </motion.div>
  );
}
