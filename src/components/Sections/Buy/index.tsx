"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const MotionButton = motion(Button);

export function Buy() {
  return (
    <>
      <motion.div
        layout
        data-section="offer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container items-center justify-center gap-4 my-14 lg:my-20"
      >
        <div className="flex flex-col items-center justify-center space-y-20">
          <div className="flex flex-col lg:flex-row items-center justify-end relative md:w-3/4">
            <div className="relative xl:absolute xl:-top-[10px] xl:-left-0">
              <Image
                src="/assets/tablet.webp"
                alt=""
                width={580}
                height={580}
              />
            </div>
            <Card className="bg-primary rounded-3xl border-0 p-5 w-full md:w-[580px] md:h-[340px]">
              <CardContent className="flex flex-col items-center justify-center gap-4">
                <h2 className="antialiased drop-shadow-2xl font-bold text-3xl lg:text-5xl text-secondary-foreground text-center uppercase animate-pulse">
                  Oferta Especial
                </h2>
                <div className="antialiased font-semibold text-xl lg:text-3xl text-accent text-center uppercase space-y-2">
                  <p>
                    De{" "}
                    <span className="line-through decoration-secondary-foreground">
                      R$97,00
                    </span>{" "}
                    por 12X
                  </p>
                  <p className="antialiased text-background">R$6,73</p>
                  <p className="antialiased">ou R$67,00 à vista</p>
                </div>
                <Link
                  href="https://bit.ly/gdb-guiadefinitivodobras4"
                  passHref
                  target="_blank"
                >
                  <MotionButton
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    variant="secondary"
                    hover="effect"
                    color="primary"
                    size="2xl"
                    rounded="full"
                    className="my-5"
                  >
                    QUERO TUDO AGORA
                  </MotionButton>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
            <Card className="lg:absolute lg:z-[10] flex flex-col bg-accent rounded-[100px] border-8 border-primary p-3 justify-center w-full lg:w-[800px]">
              <CardHeader>
                <h2 className="font-bold text-xl lg:text-3xl text-primary">
                  Garantia de 7 Dias
                </h2>
              </CardHeader>
              <CardContent className="relative">
                <p className="font-light text-lg lg:text-xl text-foreground w-full lg:w-3/4">
                  Nossa intenção é te ajudar. De nada adianta a nós que você
                  compre algo que não será útil. Pensando nisso, se por um acaso
                  você não gostar do conteúdo, você tem 7 dias para pedir
                  reembolso. Assim, você não será prejudicada e terá todo seu
                  investimento de volta.
                </p>
              </CardContent>
            </Card>
            <div className="lg:z-[20] translate-y-10 md:translate-x-20 md:-translate-y-14 lg:translate-x-full lg:translate-y-0">
              <Image
                src="/assets/warranty.png"
                alt=""
                width={350}
                height={350}
                className="max-w-[180px] max-h-[180px] lg:max-w-[320px] lg:max-h-[320px] xl:max-w-[350px] xl:max-h-[350px]"
              />
            </div>
          </div>
          <div>
            <h4 className="text-md md:text-lg lg:text-xl text-accent font-light text-center">
              CLIQUE NO BOTÃO ABAIXO
              <br />
              para ter mudar o patamar das suas compras
            </h4>
            <Link
              href="https://bit.ly/gdb-guiadefinitivodobras5"
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
                QUERO ACESSO A TUDO ISSO
              </MotionButton>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
