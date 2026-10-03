import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServicesExplorer from "./components/ServicesExplorer";
import {
  Hero,
  Manifesto,
  OurApproach,
  JournalPreview,
  Closing,
} from "./components/Nutriviva";
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Manifesto />
        <ServicesExplorer />
        <OurApproach />
        <JournalPreview />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
