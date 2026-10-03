import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Manifesto, OurApproach, Closing } from "../components/Nutriviva";
export const metadata: Metadata = { title: "O nosso jeito" };
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <div className="page-intro shell">
          <h1>
            Tem muita vida
            <br />
            em cada <em>prato.</em>
          </h1>
          <p>
            A Nutriviva nasce da ideia de que a alimentação pode ter mais espaço
            para o prazer, para as suas histórias e para a vida real.
          </p>
        </div>
        <Manifesto />
        <OurApproach />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
