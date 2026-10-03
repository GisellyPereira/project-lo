import Image from "next/image";
import Link from "next/link";
import { journalEntries } from "../lib/journal";

export function Hero() {
  return (
    <section className="hero">
      <div className="shell hero-inner">
        <div className="hero-copy">
          <h1>
            Comer bem
            <br />é para a<br />
            <span>vida real.</span>
          </h1>
          <p>
            Com prazer, com as suas escolhas e com espaço para tudo o que
            acontece fora do prato. Esse é o nosso jeito de pensar a nutrição.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/servicos">
              Conhecer o acompanhamento
            </Link>
            <Link className="plain-link" href="/sobre">
              Como a Nutriviva cuida
            </Link>
          </div>
        </div>
        <div className="hero-art">
          <Image
            className="hero-food"
            src="/images/hero-food.webp"
            alt="Prato cerâmico com figos, morangos, vegetais e grãos"
            width={1374}
            height={1145}
            priority
            sizes="(max-width:700px) 120vw, 62vw"
          />
          <Image
            className="hero-berry"
            src="/images/strawberry-splash.webp"
            alt=""
            width={1147}
            height={1371}
            sizes="(max-width:700px) 30vw, 15vw"
          />
        </div>
      </div>
      <div className="hero-paths shell" aria-label="Caminhos de acompanhamento">
        <Link href="/contato?assunto=rotina">Alimentação & rotina</Link>
        <Link href="/contato?assunto=relacao">Uma relação mais leve</Link>
        <Link href="/contato?assunto=movimento">Vida em movimento</Link>
      </div>
    </section>
  );
}

export function Manifesto() {
  return (
    <section className="food-story shell">
      <div className="food-story-intro">
        <h2>
          O seu gosto também
          <br />
          faz parte do cuidado.
        </h2>
        <p>
          Comida tem memória, vontade, companhia. Um acompanhamento nutricional
          pode considerar tudo isso, sem pedir que você deixe a sua vida de
          lado.
        </p>
      </div>
      <div className="food-mosaic">
        <article className="mosaic-choice">
          <div>
            <h3>
              Seu prato.
              <br />
              Suas escolhas.
            </h3>
            <p>
              Seus alimentos favoritos, sua cultura e seu jeito de comer entram
              na conversa desde o começo.
            </p>
            <Link className="plain-link" href="/sobre">
              Conheça a nossa abordagem
            </Link>
          </div>
          <Image
            src="/images/fig-stack.webp"
            alt="Figo roxo cortado em fatias, com o interior rosado em destaque"
            width={1024}
            height={1536}
            sizes="(max-width:700px) 35vw, 25vw"
          />
        </article>
        <div className="mosaic-person">
          <Image
            src="/images/meal-lifestyle.webp"
            alt="Cena editorial de uma mulher sorrindo com um prato de frutas sob o céu azul"
            fill
            sizes="(max-width:700px) 90vw, 33vw"
          />
        </div>
        <div className="mosaic-picnic">
          <Image
            src="/images/picnic-lilac.webp"
            alt="Cena editorial de mãos compartilhando alimentos em um piquenique sobre tecido lilás"
            fill
            sizes="(max-width:700px) 90vw, 33vw"
          />
        </div>
        <article className="mosaic-routine">
          <h3>
            Cabe no prato.
            <br />
            Cabe no dia.
          </h3>
          <p>
            Planejar refeições também é pensar no tempo, nas compras e no que é
            possível preparar na sua rotina.
          </p>
        </article>
        <div className="mosaic-fruit">
          <Image
            src="/images/strawberry-splash.webp"
            alt="Morango fresco em uma composição fotográfica com respingos rosados"
            width={1147}
            height={1371}
            sizes="(max-width:700px) 50vw, 28vw"
          />
        </div>
        <article className="mosaic-flexibility">
          <h3>
            A vida muda.
            <br />O plano pode mudar.
          </h3>
          <p>
            Existe espaço para adaptar as escolhas, conversar sobre dificuldades
            e encontrar outros caminhos com você.
          </p>
        </article>
      </div>
    </section>
  );
}

export function OurApproach() {
  return (
    <section className="approach-band">
      <div className="approach-band-image">
        <Image
          src="/images/cooking-editorial.webp"
          alt="Cena editorial de duas pessoas preparando uma refeição juntas na cozinha"
          fill
          sizes="100vw"
        />
      </div>
      <div className="shell approach-band-layout">
        <div className="approach-note">
          <h2>A conversa vem antes do cardápio.</h2>
          <p>
            Seus horários, preferências e possibilidades de preparo ajudam a
            construir um planejamento que faça sentido para você.
          </p>
          <Link className="plain-link" href="/contato">
            Prepare sua primeira conversa
          </Link>
        </div>
      </div>
    </section>
  );
}

export function JournalPreview() {
  const [featured, ...otherEntries] = journalEntries;

  return (
    <section className="journal-editorial shell">
      <header className="journal-editorial-heading">
        <h2>Leituras para o dia a dia.</h2>
        <Link href="/blog" className="plain-link">
          Abrir o caderno completo
        </Link>
      </header>
      <div className="journal-editorial-layout">
        <article className="journal-feature">
          <Link
            href={`/blog/${featured.slug}`}
            className="journal-feature-link"
          >
            <div className="journal-feature-photo">
              <Image
                src={featured.image}
                alt=""
                fill
                sizes="(max-width:800px) 90vw, 54vw"
              />
            </div>
            <div className="journal-feature-copy">
              <h3>{featured.title}</h3>
              <p>{featured.excerpt}</p>
              <span className="plain-link">Ler esta história</span>
            </div>
          </Link>
        </article>
        <div className="journal-digest">
          {otherEntries.map((entry) => (
            <article className="journal-digest-item" key={entry.slug}>
              <Link
                href={`/blog/${entry.slug}`}
                className="journal-digest-link"
              >
                <div className="journal-digest-photo">
                  <Image
                    src={entry.image}
                    alt=""
                    fill
                    sizes="(max-width:800px) 35vw, 18vw"
                  />
                </div>
                <div className="journal-digest-copy">
                  <h3>{entry.title}</h3>
                  <p>{entry.excerpt}</p>
                  <span className="plain-link">Continuar a leitura</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Questions() {
  return (
    <section className="questions-editorial" id="perguntas">
      <div className="shell">
        <header className="questions-editorial-heading">
          <h2>O que vale saber antes de começar.</h2>
          <p>Algumas respostas para preparar a sua primeira conversa.</p>
        </header>
        <dl className="questions-notes">
          <div>
            <dt>O que posso levar para a primeira conversa?</dt>
            <dd>
              Suas dúvidas, preferências e uma ideia de como são os seus dias.
              Falar sobre o que já faz parte da sua rotina ajuda a conhecer o
              seu momento.
            </dd>
          </div>
          <div>
            <dt>As minhas comidas favoritas têm espaço?</dt>
            <dd>
              Seu gosto, sua cultura alimentar e as possibilidades de preparo
              entram na conversa. As escolhas são pensadas considerando a sua
              vida fora do consultório também.
            </dd>
          </div>
          <div>
            <dt>E quando a rotina muda?</dt>
            <dd>
              Mudanças de horários, novas preferências e dificuldades podem ser
              compartilhadas nos encontros. O acompanhamento abre espaço para
              revisar o planejamento com você.
            </dd>
          </div>
        </dl>
        <Link href="/contato" className="plain-link">
          Quero conversar sobre outra dúvida
        </Link>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="closing-fruit shell">
      <div className="closing-fruit-panel">
        <div className="closing-fruit-copy">
          <h2>Conte o que faz parte do seu dia.</h2>
          <p>
            Seus horários, as comidas de que gosta e as dúvidas que quer
            esclarecer. Esse pode ser o começo da nossa conversa.
          </p>
          <Link href="/contato" className="button">
            Preparar meu primeiro contato
          </Link>
        </div>
        <div className="closing-fruit-image">
          <Image
            src="/images/citrus-splash.webp"
            alt=""
            fill
            sizes="(max-width:800px) 80vw, 48vw"
          />
        </div>
      </div>
    </section>
  );
}
