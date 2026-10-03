import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
export const metadata: Metadata = { title: "Vamos conversar" };
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
