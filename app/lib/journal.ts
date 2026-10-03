export type JournalEntry = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  paragraphs: { heading: string; body: string }[];
};

export const journalEntries: JournalEntry[] = [
  {
    slug: "mesa-com-mais-cores",
    title: "Uma mesa com mais cores",
    category: "À mesa",
    excerpt:
      "Ingredientes conhecidos, novas combinações e espaço para descobrir o que você gosta.",
    image: "/images/journal-table.webp",
    imageAlt:
      "Pequenas porções de frutas, iogurte com granola e café sobre uma mesa creme",
    paragraphs: [
      {
        heading: "Comece pelo que já faz parte da sua mesa",
        body: "Uma receita de família, a fruta que você escolhe na feira, o acompanhamento que nunca falta. A variedade pode nascer desse repertório. Pense nos ingredientes que você já gosta de preparar e nas pequenas mudanças que despertam sua curiosidade: outro tempero, uma textura diferente ou uma combinação que ainda não experimentou.",
      },
      {
        heading: "Olhe além da aparência",
        body: "As cores são um convite visual, mas não precisam virar uma regra. Uma mesa também tem cheiros, temperaturas, lembranças e histórias. Arroz, feijão, legumes, pães e frutas podem aparecer em preparações simples, cada um com seu lugar. Não é preciso transformar a refeição em uma competição entre ingredientes.",
      },
      {
        heading: "Faça uma descoberta de cada vez",
        body: "Escolher um ingrediente diferente na próxima compra pode ser um começo. Procure uma receita que desperte vontade de cozinhar, adapte ao que tem em casa e permita-se mudar o resultado. A descoberta pode ser uma forma nova de usar algo conhecido, sem depender de uma lista de alimentos especiais.",
      },
      {
        heading: "Deixe a mesa ter a sua cara",
        body: "O prato que cabe no seu dia considera gosto, tempo, orçamento e companhia. Há espaço para a comida feita com calma e para a refeição de um dia corrido. Encontrar combinações que você quer repetir faz parte de construir esse repertório pessoal, sem exigir uma apresentação perfeita.",
      },
    ],
  },
  {
    slug: "rotina-sem-complicar",
    title: "A rotina pode ser mais simples",
    category: "Vida cotidiana",
    excerpt:
      "Um pouco de organização, algumas receitas favoritas e liberdade para mudar os planos.",
    image: "/images/cooking.jpg",
    imageAlt: "Duas pessoas preparando uma refeição juntas na cozinha",
    paragraphs: [
      {
        heading: "Planeje a semana que você realmente tem",
        body: "Antes de pensar no cardápio, olhe para os seus compromissos. Em quais dias haverá tempo para cozinhar? Em quais será melhor escolher algo rápido? O planejamento pode ser um pequeno apoio para essas decisões: algumas ideias anotadas, os ingredientes disponíveis e uma alternativa para quando o dia mudar.",
      },
      {
        heading: "Dê um lugar às receitas favoritas",
        body: "Anote preparações que você gosta e consegue fazer sem muita pesquisa. Escolha algumas para os próximos dias, variando os acompanhamentos conforme a vontade e o que encontrar na compra. Repetir uma receita pode fazer parte da rotina; ela não precisa se reinventar a cada refeição.",
      },
      {
        heading: "Faça a lista olhando para a cozinha",
        body: "Uma visita aos armários e à geladeira ajuda a montar a lista de compras a partir do que já está em casa. Pense no que pretende preparar e no espaço disponível para guardar os ingredientes. A lista pode ser curta e aberta a ajustes, acompanhando o seu jeito de comprar e cozinhar.",
      },
      {
        heading: "Reserve espaço para o improviso",
        body: "Convites, mudanças de horário e novas vontades também fazem parte da semana. Uma organização útil aceita esses desvios. O plano serve à rotina, e pode ser adaptado quando ela pede. No fim, o que vale guardar são as ideias que tornaram o seu dia mais prático e agradável.",
      },
    ],
  },
  {
    slug: "comer-com-presenca",
    title: "Uma pausa para estar à mesa",
    category: "Pequenas pausas",
    excerpt:
      "Prestar atenção à refeição, à companhia e aos detalhes que passam despercebidos na pressa.",
    image: "/images/breakfast.jpg",
    imageAlt: "Uma refeição servida à mesa",
    paragraphs: [
      {
        heading: "Uma pausa possível no seu dia",
        body: "Nem toda refeição acontece em silêncio ou com tempo sobrando. A proposta aqui é perceber como ela acontece para você. Talvez seja possível sentar por alguns minutos, arrumar um lugar na mesa ou deixar uma tarefa para depois. Escolha um detalhe que faça sentido naquele momento.",
      },
      {
        heading: "Observe o que está no prato",
        body: "Que cheiro chega primeiro? Qual textura você mais gosta nessa preparação? Há algum ingrediente que lembra a cozinha de alguém? Essas perguntas são convites à curiosidade. Não existe uma resposta certa, nem a obrigação de transformar cada refeição em um exercício.",
      },
      {
        heading: "Abra espaço para a companhia",
        body: "A conversa, a pessoa que cozinhou e a receita compartilhada também fazem parte de estar à mesa. Quando houver companhia, pode ser um momento para trocar uma história ou simplesmente ficar junto. Quando a refeição for só sua, você pode escolher o ambiente e o ritmo que preferir.",
      },
      {
        heading: "Leve uma lembrança da refeição",
        body: "Talvez você queira repetir um tempero, anotar a receita ou lembrar daquela conversa. Uma refeição cotidiana pode deixar esses pequenos registros. Perceber o que foi agradável é uma forma pessoal de explorar a sua relação com a mesa, sem criar mais uma tarefa para cumprir.",
      },
    ],
  },
];

export function getJournalEntry(slug: string) {
  return journalEntries.find((entry) => entry.slug === slug);
}
