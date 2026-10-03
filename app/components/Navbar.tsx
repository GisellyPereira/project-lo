"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
const links = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Acompanhamento" },
  { href: "/blog", label: "Caderno" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <header id="inicio" className="site-header">
      <div className="header-inner shell">
        <Link className="home-link" href="/" aria-label="Nutriviva, início">
          <Logo />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname.startsWith(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link className="button header-cta" href="/contato">
          Vamos conversar
        </Link>
        <button
          ref={trigger}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen(!open)}
        >
          <span>Menu</span>
          <span className="menu-bars" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav shell"
        aria-label="Navegação móvel"
        hidden={!open}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={pathname.startsWith(l.href) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contato" onClick={() => setOpen(false)}>
          Vamos conversar
        </Link>
      </nav>
    </header>
  );
}
