import Link from "next/link";
import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="Nutriviva, início">
            <Logo light />
          </Link>
          <p>
            Mais sabor na vida.
            <br />
            Mais vida à sua mesa.
          </p>
        </div>
        <div>
          <p className="footer-label">Conheça</p>
          <Link href="/sobre">O nosso jeito</Link>
          <Link href="/servicos">Acompanhamento</Link>
          <Link href="/blog">Caderno de ideias</Link>
        </div>
        <div>
          <p className="footer-label">Comece por aqui</p>
          <Link href="/contato">Prepare sua conversa</Link>
          <Link href="/servicos#perguntas">Antes de começar</Link>
          <Link href="/contato#privacidade">Privacidade</Link>
        </div>
        <div className="footer-note">
          <span>
            Projeto conceitual de nutrição.
            <br />
            Identidade e conteúdo demonstrativos.
          </span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Nutriviva</span>
        <span>Comida, afeto e possibilidades.</span>
        <Link href="#inicio">Voltar ao começo</Link>
      </div>
    </footer>
  );
}
