import { Header } from "@/components/ui/header";
import { Home as HomeComponent } from "@/components/Sections/Home";
import { Testimonials as TestimonialsComponent } from "@/components/Sections/Testimonials";
import { Faq as FaqComponent } from "@/components/Sections/Faq";
import { Trends as TrendsComponent } from "@/components/Sections/Trends";
import { Bonuses as BonusesComponent } from "@/components/Sections/Bonuses";
import { Buy as BuyComponent } from "@/components/Sections/Buy";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="flex flex-col md:justify-center md:items-center">
      <Header />
      <section
        id="home"
        className="relative flex w-screen items-center justify-center my-20"
      >
        <HomeComponent />
      </section>
      <Separator />
      <section
        id="testimonials"
        className="relative flex w-screen items-center justify-center bg-primary/70"
      >
        <TestimonialsComponent />
      </section>
      <Separator />
      <section
        id="faq"
        className="container bg-faq bg-contain bg-no-repeat bg-center relative flex w-screen items-center justify-center my-20"
      >
        <FaqComponent />
      </section>
      <Separator />
      <section
        id="trends"
        className="relative flex w-screen items-center justify-center bg-primary/70"
      >
        <TrendsComponent />
      </section>
      <Separator />
      <section
        id="bonuses"
        className="container relative flex w-screen items-center justify-center my-20"
      >
        <BonusesComponent />
      </section>
      <Separator />
      <section
        id="offer"
        className="relative flex w-screen items-center justify-center bg-primary/70"
      >
        <BuyComponent />
      </section>
      <Footer />
    </main>
  );
}
