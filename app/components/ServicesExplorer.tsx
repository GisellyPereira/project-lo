"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { services } from "../lib/services";
export default function ServicesExplorer() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const s = services[selected];
  return (
    <section className="services-section" id="acompanhamento">
      <div className="shell">
        <header className="services-heading">
          <h2>
            O acompanhamento
            <br />
            começa por você.
          </h2>
        </header>
        <div className="service-workspace">
          <div
            className="service-choices"
            role="tablist"
            aria-label="Encontre um acompanhamento"
            aria-orientation="horizontal"
          >
            {services.map((item, i) => (
              <button
                id={`service-tab-${item.id}`}
                type="button"
                key={item.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                aria-selected={selected === i}
                aria-controls="service-panel"
                tabIndex={selected === i ? 0 : -1}
                onClick={() => setSelected(i)}
                onKeyDown={(e) => {
                  let next = i;
                  if (e.key === "ArrowDown" || e.key === "ArrowRight")
                    next = (i + 1) % services.length;
                  else if (e.key === "ArrowUp" || e.key === "ArrowLeft")
                    next = (i - 1 + services.length) % services.length;
                  else if (e.key === "Home") next = 0;
                  else if (e.key === "End") next = services.length - 1;
                  else return;
                  e.preventDefault();
                  setSelected(next);
                  tabs.current[next]?.focus();
                }}
              >
                <span>{item.title}</span>
              </button>
            ))}
          </div>
          <div
            id="service-panel"
            className="service-panel"
            data-kind={s.id}
            role="tabpanel"
            aria-labelledby={`service-tab-${s.id}`}
            tabIndex={0}
          >
            <div className="service-photo">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="(max-width:700px) 90vw, 92vw"
              />
            </div>
            <div className="service-description">
              <h3>{s.short}</h3>
              <p>{s.description}</p>
              <ul>
                {s.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <Link className="button" href={`/contato?assunto=${s.id}`}>
                Quero conversar sobre isso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
