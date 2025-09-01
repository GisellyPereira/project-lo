'use client'

import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { notFound } from 'next/navigation'

// Dados dos posts do blog
const blogPosts = [
  {
    slug: 'plano-alimentar-sustentavel',
    title: 'Como Criar um Plano Alimentar Sustentável',
    excerpt: 'Descubra os princípios fundamentais para criar um plano alimentar que você consegue seguir na vida real, sem restrições extremas.',
    content: `
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Criar um plano alimentar sustentável é fundamental para alcançar seus objetivos de saúde e bem-estar de forma duradoura. 
        Muitas pessoas desistem de suas dietas porque elas são muito restritivas ou não se adaptam ao seu estilo de vida.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Por que a Sustentabilidade é Importante?</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Um plano alimentar sustentável é aquele que você consegue seguir por toda a vida, não apenas por algumas semanas. 
        Ele deve se adaptar à sua rotina, preferências alimentares e objetivos pessoais.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Princípios Fundamentais</h2>
      <ul class="mb-6 space-y-3">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">Inclua alimentos que você gosta</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">Adapte-se à sua rotina diária</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">Permita flexibilidade nos fins de semana</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">Foque na qualidade, não apenas na quantidade</span>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Como Implementar na Prática</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Comece identificando seus alimentos favoritos e como eles podem ser incorporados de forma saudável. 
        Planeje suas refeições com antecedência, mas mantenha espaço para improvisações.
      </p>

      <div class="bg-green-50 p-6 rounded-xl my-8">
        <h3 class="text-xl font-bold text-green-800 mb-3">💡 Dica da Dra. Lorrany</h3>
        <p class="text-green-700">
          "O segredo não está em seguir uma dieta perfeita, mas em criar hábitos que você consegue manter. 
          Pequenas mudanças consistentes têm muito mais impacto do que mudanças drásticas temporárias."
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Conclusão</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Lembre-se: a sustentabilidade é a chave para o sucesso a longo prazo. 
        Um plano alimentar que funciona para você é aquele que você consegue seguir com prazer e consistência.
      </p>
    `,
    date: '15 Jan 2025',
    readTime: '5 min',
    category: 'Nutrição',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=400&fit=crop&crop=center',
    author: 'Dra. Lorrany Fontinele'
  },
  {
    slug: 'alimentos-nutritivos',
    title: 'Os 10 Alimentos Mais Nutritivos para Incluir na Sua Dieta',
    excerpt: 'Conheça os superalimentos que devem estar presentes na sua alimentação diária para maximizar sua saúde e bem-estar.',
    content: `
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        A qualidade dos alimentos que consumimos é fundamental para nossa saúde e bem-estar. 
        Alguns alimentos são verdadeiros superalimentos, ricos em nutrientes essenciais que nosso corpo precisa.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Espinafre</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Rico em ferro, cálcio, vitamina K e antioxidantes. Perfeito para saladas, smoothies e refogados.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Salmão</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Excelente fonte de ômega-3, proteína de alta qualidade e vitamina D. Ideal para saúde cardiovascular.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Quinoa</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Proteína completa, rica em fibras e minerais. Substitui perfeitamente o arroz em muitas receitas.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Mirtilos</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Antioxidantes poderosos, vitamina C e fibras. Perfeitos para smoothies, iogurtes e sobremesas.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Aveia</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Fibras solúveis, proteína e carboidratos complexos. Ideal para o café da manhã.
      </p>

      <div class="bg-green-50 p-6 rounded-xl my-8">
        <h3 class="text-xl font-bold text-green-800 mb-3">💡 Dica da Dra. Lorrany</h3>
        <p class="text-green-700">
          "Não existe um alimento milagroso. O segredo está na variedade e na combinação inteligente 
          de diferentes grupos alimentares ao longo do dia."
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Como Incorporar na Rotina</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Comece incluindo um ou dois desses alimentos por semana. Experimente diferentes formas de preparo 
        e descubra o que funciona melhor para você.
      </p>
    `,
    date: '12 Jan 2025',
    readTime: '7 min',
    category: 'Alimentação',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop&crop=center',
    author: 'Dra. Lorrany Fontinele'
  },
  {
    slug: 'mindset-emagrecimento',
    title: 'Mindset e Emagrecimento: A Chave para Resultados Duradouros',
    excerpt: 'Entenda como sua mentalidade pode ser o fator determinante para alcançar e manter seus objetivos de peso e saúde.',
    content: `
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        O emagrecimento não é apenas uma questão de dieta e exercícios. Sua mentalidade e relação com a comida 
        são fundamentais para resultados duradouros e uma vida mais saudável.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">A Importância do Mindset</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Muitas pessoas focam apenas no que comer, mas se esquecem de trabalhar sua relação emocional com a comida. 
        O mindset determina como você encara os desafios e mantém a motivação.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Mudanças de Mentalidade Essenciais</h2>
      <ul class="mb-6 space-y-3">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">De "dieta" para "estilo de vida"</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">De "restrição" para "escolhas conscientes"</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">De "perfeição" para "progresso"</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">De "culpa" para "autocompaixão"</span>
        </li>
      </ul>

      <div class="bg-green-50 p-6 rounded-xl my-8">
        <h3 class="text-xl font-bold text-green-800 mb-3">💡 Dica da Dra. Lorrany</h3>
        <p class="text-green-700">
          "O emagrecimento sustentável começa na mente. Quando você muda sua mentalidade, 
          as mudanças no corpo se tornam consequência natural do processo."
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Estratégias Práticas</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Pratique a atenção plena durante as refeições, celebre pequenas vitórias e mantenha um diário 
        de gratidão pelos progressos alcançados.
      </p>
    `,
    date: '10 Jan 2025',
    readTime: '6 min',
    category: 'Bem-estar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop&crop=center',
    author: 'Dra. Lorrany Fontinele'
  },
  {
    slug: 'nutricao-performance-esportiva',
    title: 'Nutrição para Performance Esportiva: O que Comer Antes e Depois do Treino',
    excerpt: 'Guia completo sobre alimentação para atletas e praticantes de atividade física que querem maximizar seus resultados.',
    content: `
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        A nutrição é um dos pilares fundamentais para maximizar sua performance esportiva. 
        O que você come antes, durante e depois do treino pode fazer toda a diferença nos seus resultados.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Alimentação Pré-Treino</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        A refeição pré-treino deve fornecer energia suficiente para o exercício, sem causar desconforto. 
        O ideal é comer 2-3 horas antes do treino.
      </p>

      <h3 class="text-xl font-bold text-gray-900 mb-3">Opções de Pré-Treino:</h3>
      <ul class="mb-6 space-y-2">
        <li class="text-lg text-gray-700">• Aveia com banana e mel</li>
        <li class="text-lg text-gray-700">• Pão integral com pasta de amendoim</li>
        <li class="text-lg text-gray-700">• Iogurte com granola</li>
        <li class="text-lg text-gray-700">• Smoothie de frutas</li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Hidratação Durante o Treino</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Para treinos de até 1 hora, água é suficiente. Para treinos mais longos, considere bebidas 
        esportivas com eletrólitos.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Alimentação Pós-Treino</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        A janela de oportunidade pós-treino é crucial para recuperação muscular. 
        Consuma proteína e carboidratos nas primeiras 2 horas.
      </p>

      <div class="bg-green-50 p-6 rounded-xl my-8">
        <h3 class="text-xl font-bold text-green-800 mb-3">💡 Dica da Dra. Lorrany</h3>
        <p class="text-green-700">
          "A nutrição esportiva é individual. O que funciona para um atleta pode não funcionar para outro. 
          Teste diferentes estratégias e observe como seu corpo responde."
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Suplementação</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Suplementos podem ser úteis, mas nunca substituem uma alimentação equilibrada. 
        Consulte um profissional antes de iniciar qualquer suplementação.
      </p>
    `,
    date: '8 Jan 2025',
    readTime: '8 min',
    category: 'Esportes',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&crop=center',
    author: 'Dra. Lorrany Fontinele'
  },
  {
    slug: 'organizar-semana-alimentar',
    title: 'Como Organizar Sua Semana Alimentar e Economizar Tempo',
    excerpt: 'Dicas práticas para planejar suas refeições da semana e ter uma alimentação saudável mesmo com a rotina corrida.',
    content: `
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        A organização é a chave para manter uma alimentação saudável na correria do dia a dia. 
        Com um pouco de planejamento, você pode economizar tempo e dinheiro enquanto cuida da sua saúde.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Planejamento Semanal</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Reserve 30 minutos no domingo para planejar suas refeições da semana. 
        Isso vai economizar muito tempo e evitar decisões impulsivas durante a semana.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Lista de Compras Inteligente</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Baseie sua lista de compras no seu planejamento semanal. Isso evita desperdícios 
        e garante que você tenha todos os ingredientes necessários.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Preparação Antecipada</h2>
      <ul class="mb-6 space-y-3">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">Corte vegetais e frutas</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">Cozinhe grãos e leguminosas</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">Prepare molhos e temperos</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">Congele porções individuais</span>
        </li>
      </ul>

      <div class="bg-green-50 p-6 rounded-xl my-8">
        <h3 class="text-xl font-bold text-green-800 mb-3">💡 Dica da Dra. Lorrany</h3>
        <p class="text-green-700">
          "A preparação antecipada não significa perder o prazer de cozinhar. 
          Significa ter mais tempo para desfrutar suas refeições e menos estresse na rotina."
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Receitas Versáteis</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Aprenda receitas que podem ser adaptadas com diferentes ingredientes. 
        Isso torna o planejamento mais flexível e interessante.
      </p>
    `,
    date: '5 Jan 2025',
    readTime: '4 min',
    category: 'Organização',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop&crop=center',
    author: 'Dra. Lorrany Fontinele'
  },
  {
    slug: 'intolerancias-alimentares',
    title: 'Intolerâncias Alimentares: Como Identificar e Tratar',
    excerpt: 'Aprenda a reconhecer os sinais de intolerâncias alimentares e como adaptar sua dieta para melhorar sua qualidade de vida.',
    content: `
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        As intolerâncias alimentares são mais comuns do que imaginamos e podem causar diversos 
        sintomas que afetam nossa qualidade de vida. Identificá-las é o primeiro passo para uma vida mais saudável.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Diferença entre Alergia e Intolerância</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Alergias alimentares envolvem o sistema imunológico e podem ser fatais. 
        Intolerâncias são reações digestivas que causam desconforto, mas não são fatais.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Sintomas Comuns</h2>
      <ul class="mb-6 space-y-3">
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">Distensão abdominal e gases</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">Náuseas e vômitos</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">Diarreia ou constipação</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">Dores de cabeça</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
          <span class="text-lg text-gray-700">Fadiga e irritabilidade</span>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Intolerâncias Mais Comuns</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Lactose, glúten, frutose e histamina são algumas das intolerâncias mais frequentes. 
        Cada uma tem características específicas e tratamentos diferentes.
      </p>

      <div class="bg-green-50 p-6 rounded-xl my-8">
        <h3 class="text-xl font-bold text-green-800 mb-3">💡 Dica da Dra. Lorrany</h3>
        <p class="text-green-700">
          "Não faça autodiagnóstico. Consulte um profissional para identificar corretamente 
          suas intolerâncias e receber orientações adequadas para sua dieta."
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Processo de Identificação</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        O processo envolve diário alimentar, testes específicos e eliminação gradual de alimentos. 
        É importante fazer isso com acompanhamento profissional.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">Adaptação da Dieta</h2>
      <p class="mb-6 text-lg text-gray-700 leading-relaxed">
        Identificar intolerâncias não significa restrição total. Existem muitas alternativas 
        deliciosas e nutritivas para substituir os alimentos problemáticos.
      </p>
    `,
    date: '3 Jan 2025',
    readTime: '9 min',
    category: 'Saúde',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&crop=center',
    author: 'Dra. Lorrany Fontinele'
  }
]

interface PageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Link 
                  href="/blog" 
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Voltar ao Blog
                </Link>
              </div>
              
              <div className="text-center mb-8">
                <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {post.category}
                </span>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-playfair leading-tight">
                  {post.title}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-center gap-6 text-gray-500">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {post.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <div className="mb-12">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Bio */}
              <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src="/lorrany-fontinele.jpg"
                      alt="Dra. Lorrany Fontinele"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h3>
                    <p className="text-gray-600 mb-4">
                      Nutricionista especialista em nutrição personalizada, com mais de 8 anos de experiência 
                      ajudando pessoas a transformarem suas vidas através da alimentação.
                    </p>
                    <Link 
                      href="/contato" 
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
                    >
                      Agendar Consulta
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
