import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/dm-sans";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: {
    default: "Nutriviva — Mais sabor na vida",
    template: "%s | Nutriviva",
  },
  description:
    "Uma nova conversa sobre alimentação: mais sabor, escolhas possíveis e espaço para a vida real. Conheça a experiência Nutriviva.",
  openGraph: {
    title: "Nutriviva — Mais sabor na vida",
    description: "Comer bem também é viver do seu jeito.",
    locale: "pt_BR",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <SmoothScroll />
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
