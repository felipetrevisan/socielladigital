"use client";

import { motion } from "framer-motion";
import { BonusItem } from "./item";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { slideUpVariants } from "@/config/animation";

const MotionButton = motion(Button);

export function Bonuses() {
  return (
    <motion.div
      layout
      data-section="bonuses"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container flex flex-col items-center justify-center gap-4 relative my-20"
    >
      <motion.h4 className="leading-[3.5rem] text-xl md:text-2xl lg:text-4xl text-accent font-bold text-center uppercase">
        <p>
          Mas afinal, o que é o <br />
          <span className="text-secondary-foreground">
            Guia definitivo do Brás
          </span>
          ?
        </p>
      </motion.h4>
      <div className="flex flex-col space-y-4 w-full my-10">
        <BonusItem
          delayMs={0.1}
          image="checklist"
          title="Bônus 1 - Checklist Exclusivo"
          even
        >
          Oferecemos um checklist prático, garantindo que você se sinta segura e
          não deixe nada de fora no planejamento desse dia incrível no Brás.
        </BonusItem>
        <BonusItem
          delayMs={0.3}
          image="shopping"
          title="Bônus 2 - Lista dos Melhores Shoppings"
          odd
        >
          Tenha acesso exclusivo às melhores opções de compras, os maiores e
          melhores shoppings e galerias da região, otimizando sua experiência no
          Brás.
        </BonusItem>
        <BonusItem
          delayMs={0.5}
          image="stock"
          title="Bônus 3 - Controle de Estoque"
          even
        >
          Sinta a segurança de saber exatamente o que está disponível,
          prevenindo surpresas desagradáveis e maximizando sua jornada de
          compras através das melhores oportunidades.
        </BonusItem>
        <BonusItem
          delayMs={0.7}
          image="sheet"
          title="Bônus 4 - Planilha de Precificação"
          odd
        >
          Essa planilha irá te ajudar a identificar o preço ideal para seu
          produto, considerando todos os custos e sua margem de lucro.
        </BonusItem>
        <BonusItem
          delayMs={0.7}
          image="suppliers"
          title="Bônus 5 - Top Fornecedores do Brás"
          even
        >
          Você terá acesso a mais de 200 contatos atualizados de fornecedores de
          qualidade, com preços acessíveis e que seguem as tendências do que
          mais vende.
        </BonusItem>
        <BonusItem
          delayMs={0.9}
          image="planner"
          title="Bônus 6 - Planner de Relatório Diário de Vendas"
          odd
        >
          Um planejador em formato de relatório diário para suas vendas ao longo
          do mês. Através dele, você monitora e acompanha seu desempenho nas
          vendas.
        </BonusItem>
        <BonusItem
          delayMs={0.9}
          image="whatsapp"
          title="Bônus 7 - Fast WhatsApp"
          even
        >
          Um roteiro com scripts para conduzir sua comunicação em cada uma das
          etapas na jornada do atendimento ao cliente. Você irá ganhar tempo e
          padronizará seu atendimento.
        </BonusItem>
      </div>
      <motion.h4
        className="text-2xl text-accent font-bold text-center"
        variants={slideUpVariants}
        initial="initial"
        animate="animate"
      >
        <p>
          Para ter acesso a{" "}
          <span className="text-secondary-foreground uppercase">TUDO</span>{" "}
          isso, clique no{" "}
          <span className="text-primary-foreground">botão abaixo</span>
        </p>
      </motion.h4>
      <Link
        href="https://bit.ly/gdb-guiadefinitivodobras3"
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
          QUERO ACESSO A TUDO ISSO
        </MotionButton>
      </Link>
    </motion.div>
  );
}
