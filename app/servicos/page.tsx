import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesExplorer from "../components/ServicesExplorer";
import { OurApproach, Questions, Closing } from "../components/Nutriviva";
export const metadata: Metadata = { title: "Acompanhamento" };
export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <div className="page-intro shell">
          <h1>
            O cuidado encontra
            <br />o seu <em>momento.</em>
          </h1>
          <p>
            Um caminho construído com você, que respeita sua rotina, suas
            escolhas e o que faz sentido para a sua vida.
          </p>
        </div>
        <ServicesExplorer />
        <OurApproach />
        <Questions />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
