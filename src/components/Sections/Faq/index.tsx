"use client";

import { motion } from "framer-motion";
import { FaqItem } from "./item";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function Faq() {
  return (
    <motion.div
      layout
      data-section="faq"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center gap-4 relative"
    >
      <motion.h2 className="text-xl md:text-2xl lg:text-4xl text-accent font-bold text-center uppercase">
        <p>
          <span className="text-primary-foreground">Para quem</span> é o{" "}
          <span className="text-secondary-foreground">Guia</span> <br />{" "}
          definitivo do Brás?
        </p>
      </motion.h2>
      <div className="mt-10">
        <Carousel className="md:hidden w-full max-w-xs">
          <CarouselContent>
            <CarouselItem>
              <FaqItem delayMs={0.1}>
                <p>
                  Para você que está começando a{" "}
                  <span className="text-secondary-foreground font-bold">
                    empreender
                  </span>{" "}
                  com moda e não sabe{" "}
                  <span className="text-secondary-foreground font-bold">
                    NADA
                  </span>{" "}
                  do Brás
                </p>
              </FaqItem>
            </CarouselItem>
            <CarouselItem>
              <FaqItem delayMs={0.3}>
                <p>
                  Para você que não quer cair em{" "}
                  <span className="text-secondary-foreground font-bold">
                    golpes
                  </span>{" "}
                  comprando de{" "}
                  <span className="text-secondary-foreground font-bold">
                    maneira errada
                  </span>{" "}
                  na região do Brás
                </p>
              </FaqItem>
            </CarouselItem>
            <CarouselItem>
              <FaqItem delayMs={0.5}>
                <p>
                  Para você que está{" "}
                  <span className="text-secondary-foreground font-bold">
                    insegura
                  </span>{" "}
                  e com{" "}
                  <span className="text-secondary-foreground font-bold">
                    medo
                  </span>{" "}
                  em comprar na região do Brás e quer evitar roubos e furtos
                </p>
              </FaqItem>
            </CarouselItem>
            <CarouselItem>
              <FaqItem delayMs={0.7}>
                <p>
                  Para você que quer{" "}
                  <span className="text-secondary-foreground font-bold">
                    multiplicar
                  </span>{" "}
                  suas vendas conhecendo os fornecedores das{" "}
                  <span className="text-secondary-foreground font-bold">
                    tendências da moda
                  </span>
                </p>
              </FaqItem>
            </CarouselItem>
            <CarouselItem>
              <FaqItem delayMs={1.1}>
                <p>
                  Para você que está iniciando com{" "}
                  <span className="text-secondary-foreground font-bold">
                    assessoria de compras
                  </span>{" "}
                  e quer mais clientes sem perder tempo
                </p>
              </FaqItem>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-7 hidden">
          <FaqItem delayMs={0.1}>
            <p>
              Para você que está começando a{" "}
              <span className="text-secondary-foreground font-bold">
                empreender
              </span>{" "}
              com moda e não sabe{" "}
              <span className="text-secondary-foreground font-bold">NADA</span>{" "}
              do Brás
            </p>
          </FaqItem>
          <FaqItem delayMs={0.3}>
            <p>
              Para você que não quer cair em{" "}
              <span className="text-secondary-foreground font-bold">
                golpes
              </span>{" "}
              comprando de{" "}
              <span className="text-secondary-foreground font-bold">
                maneira errada
              </span>{" "}
              na região do Brás
            </p>
          </FaqItem>
          <FaqItem delayMs={0.5}>
            <p>
              Para você que está{" "}
              <span className="text-secondary-foreground font-bold">
                insegura
              </span>{" "}
              e com{" "}
              <span className="text-secondary-foreground font-bold">medo</span>{" "}
              em comprar na região do Brás e quer evitar roubos e furtos
            </p>
          </FaqItem>
          <FaqItem delayMs={0.7}>
            <p>
              Para você que quer{" "}
              <span className="text-secondary-foreground font-bold">
                multiplicar
              </span>{" "}
              suas vendas conhecendo os fornecedores das{" "}
              <span className="text-secondary-foreground font-bold">
                tendências da moda
              </span>
            </p>
          </FaqItem>
          <FaqItem delayMs={0.9}>
            <p>
              Para você que quer{" "}
              <span className="text-secondary-foreground font-bold">
                faturar
              </span>{" "}
              e{" "}
              <span className="text-secondary-foreground font-bold">
                lucrar
              </span>{" "}
              mais, com produtos de qualidade, que{" "}
              <span className="text-secondary-foreground font-bold">
                fidelizam a cliente
              </span>
              .
            </p>
          </FaqItem>
          <FaqItem delayMs={1.1}>
            <p>
              Para você que está iniciando com{" "}
              <span className="text-secondary-foreground font-bold">
                assessoria de compras
              </span>{" "}
              e quer mais clientes sem perder tempo
            </p>
          </FaqItem>
        </div>
      </div>
    </motion.div>
  );
}
