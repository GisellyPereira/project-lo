import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { journalEntries } from "../lib/journal";

export const metadata: Metadata = {
  title: "Caderno de ideias",
  description:
    "Leituras sobre comida, rotina e pequenos momentos à mesa. O caderno de ideias da Nutriviva.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <header className="page-intro shell">
          <h1>
            Ideias para levar
            <br />à sua mesa
          </h1>
          <p>
            Comida tem sabor, história e lugar na rotina. Aqui, a gente abre
            espaço para olhar tudo isso com curiosidade.
          </p>
        </header>
        <section
          className="shell journal-grid"
          aria-label="Leituras do caderno"
        >
          {journalEntries.map((entry) => (
            <article className="journal-card" key={entry.slug}>
              <Link href={`/blog/${entry.slug}`}>
                <div className="journal-image">
                  <Image
                    src={entry.image}
                    alt={entry.imageAlt}
                    fill
                    sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 30vw"
                  />
                </div>
                <h2>{entry.title}</h2>
                <p>{entry.excerpt}</p>
                <span className="text-link">Abrir leitura</span>
              </Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
