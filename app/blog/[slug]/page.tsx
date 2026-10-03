import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getJournalEntry, journalEntries } from "../../lib/journal";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journalEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getJournalEntry(slug);
  if (!entry) notFound();
  return { title: entry.title, description: entry.excerpt };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getJournalEntry(slug);
  if (!entry) notFound();
  const otherEntries = journalEntries.filter(
    (item) => item.slug !== entry.slug,
  );

  return (
    <>
      <Navbar />
      <main id="conteudo">
        <header className="page-intro shell">
          <Link href="/blog" className="article-back">
            Voltar ao caderno
          </Link>
          <h1>{entry.title}</h1>
          <p>{entry.excerpt}</p>
          <p className="journal-meta">Nutriviva · Caderno de ideias</p>
        </header>
        <div className="article-layout shell">
          <article className="article-main prose" aria-label={entry.title}>
            <div className="journal-image">
              <Image
                src={entry.image}
                alt={entry.imageAlt}
                fill
                sizes="(max-width: 900px) 90vw, 65vw"
              />
            </div>
            {entry.paragraphs.map((paragraph) => (
              <section key={paragraph.heading}>
                <h2>{paragraph.heading}</h2>
                <p>{paragraph.body}</p>
              </section>
            ))}
          </article>
          <aside className="article-sidebar" aria-label="Outras leituras">
            <h2>Mais ideias para o seu dia</h2>
            {otherEntries.map((item) => (
              <Link
                href={`/blog/${item.slug}`}
                className="text-link"
                key={item.slug}
              >
                {item.title}
              </Link>
            ))}
            <p>
              Um caderno editorial criado para este projeto conceitual da
              Nutriviva.
            </p>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
