import Experiencia from "@/components/Experiencia";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import ProjetosRecentes from "@/components/ProjetosRecentes";
import { FloatingNav } from "@/components/ui/FloatingNav";
import QuadroLogos from "@/components/QuadroLogos";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip selection:bg-slate-800">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <ProjetosRecentes />
        <QuadroLogos />
        <Experiencia />
        <Footer />
      </div>
    </main>
  );
}
