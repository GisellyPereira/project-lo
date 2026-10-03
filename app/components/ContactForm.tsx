"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { services } from "../lib/services";
export default function ContactForm() {
  const [draft, setDraft] = useState({ name: "", email: "", message: "" });
  const resultRef = useRef<HTMLTextAreaElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const changed = useRef(false);
  const [subject, setSubject] = useState("rotina");
  const [message, setMessage] = useState("");
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState("");
  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("assunto");
    if (services.some((s) => s.id === query)) setSubject(query!);
  }, []);
  useEffect(() => {
    if (changed.current) {
      if (ready) resultRef.current?.focus();
      else nameRef.current?.focus();
    }
  }, [ready]);
  function prepare(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    if (!name) {
      e.currentTarget
        .querySelector<HTMLInputElement>("#name")
        ?.setCustomValidity("Escreva seu nome para continuar.");
      e.currentTarget.reportValidity();
      return;
    }
    setMessage(`Olá, Nutriviva!

Meu nome é ${name}.
Meu e-mail: ${data.get("email")}
Quero conversar sobre: ${services.find((s) => s.id === subject)?.title ?? subject}.

${String(data.get("message") ?? "").trim()}`);
    changed.current = true;
    setReady(true);
    setNotice(
      "Sua mensagem está pronta para salvar. Ela ainda não foi enviada.",
    );
  }
  function download() {
    const blob = new Blob([message], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "minha-conversa-nutriviva.txt";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setNotice("Arquivo preparado no seu dispositivo. Nenhum dado foi enviado.");
  }
  return (
    <section className="contact-section shell">
      <div className="contact-intro">
        <h1>
          Vamos deixar
          <br />a vida mais
          <br />
          <em>leve?</em>
        </h1>
        <p>
          Conte um pouco sobre o seu momento. Não precisa ter todas as respostas
          para começar.
        </p>
        <div className="contact-photo">
          <Image
            src="/images/breakfast.jpg"
            alt="Café da manhã com frutas em torradas"
            fill
            sizes="(max-width:700px) 90vw, 35vw"
          />
        </div>
        <p className="contact-caption">Um começo no seu tempo.</p>
      </div>
      <div className="contact-form-wrap">
        <h2>
          Um pouco
          <br />
          sobre <em>você.</em>
        </h2>
        {ready ? (
          <div className="message-result">
            <p>Sua mensagem está pronta.</p>
            <textarea
              ref={resultRef}
              aria-label="Sua mensagem preparada"
              rows={9}
              value={message}
              readOnly
            />
            <button className="button" type="button" onClick={download}>
              Salvar minha mensagem
            </button>
            <button
              className="text-link"
              type="button"
              onClick={() => {
                changed.current = true;
                setReady(false);
                setNotice("");
              }}
            >
              Voltar ao formulário
            </button>
          </div>
        ) : (
          <form onSubmit={prepare}>
            <label htmlFor="name">Como você se chama?</label>
            <input
              ref={nameRef}
              value={draft.name}
              onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome"
              autoComplete="name"
              required
              maxLength={100}
              onInput={(e) => e.currentTarget.setCustomValidity("")}
            />
            <label htmlFor="email">Seu e-mail</label>
            <input
              value={draft.email}
              onChange={(e) => setDraft({ ...draft, email: e.target.value })}
              id="email"
              name="email"
              type="email"
              placeholder="voce@exemplo.com"
              autoComplete="email"
              required
              maxLength={150}
            />
            <label htmlFor="subject">O que faz sentido para você?</label>
            <select
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
              <option value="Quero tirar uma dúvida">
                Quero tirar uma dúvida
              </option>
            </select>
            <label htmlFor="message">
              O que você gostaria de contar? <span>(opcional)</span>
            </label>
            <textarea
              value={draft.message}
              onChange={(e) => setDraft({ ...draft, message: e.target.value })}
              id="message"
              name="message"
              placeholder="Como anda sua rotina? O que você procura?"
              rows={4}
              maxLength={2000}
            />
            <button className="button" type="submit">
              Preparar minha mensagem
            </button>
          </form>
        )}
        <p className="form-notice" role="status" aria-live="polite">
          {notice}
        </p>
        <div className="privacy-note" id="privacidade">
          <strong>Seus dados ficam com você.</strong>
          <p>
            Este é um projeto demonstrativo. O formulário prepara uma mensagem
            para salvar no seu dispositivo, sem envio ou armazenamento em
            servidor. Não inclua informações clínicas ou dados sensíveis.
          </p>
        </div>
      </div>
    </section>
  );
}
