import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const blogPosts = [
  {
    slug: 'plano-alimentar-sustentavel',
    title: 'Como Criar um Plano Alimentar Sustentável',
    excerpt: 'Descubra os princípios fundamentais para criar um plano alimentar que você consegue seguir na vida real, sem restrições extremas.',
    date: '15 Jan 2025',
    readTime: '5 min',
    category: 'Nutrição',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop&crop=center',
    author: 'Dra. Lorrany Fontinele'
  },
  {
    slug: 'alimentos-nutritivos',
    title: 'Os 10 Alimentos Mais Nutritivos para Incluir na Sua Dieta',
    excerpt: 'Conheça os superalimentos que devem estar presentes na sua alimentação diária para maximizar sua saúde e bem-estar.',
    date: '12 Jan 2025',
    readTime: '7 min',
    category: 'Alimentação',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=250&fit=crop&crop=center',
    author: 'Dra. Lorrany Fontinele'
  },
  {
    slug: 'mindset-emagrecimento',
    title: 'Mindset e Emagrecimento: A Chave para Resultados Duradouros',
    excerpt: 'Entenda como sua mentalidade pode ser o fator determinante para alcançar e manter seus objetivos de peso e saúde.',
    date: '10 Jan 2025',
    readTime: '6 min',
    category: 'Bem-estar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center',
    author: 'Dra. Lorrany Fontinele'
  },
  {
    slug: 'nutricao-performance-esportiva',
    title: 'Nutrição para Performance Esportiva: O que Comer Antes e Depois do Treino',
    excerpt: 'Guia completo sobre alimentação para atletas e praticantes de atividade física que querem maximizar seus resultados.',
    date: '8 Jan 2025',
    readTime: '8 min',
    category: 'Esportes',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center',
    author: 'Dra. Lorrany Fontinele'
  },
  {
    slug: 'organizar-semana-alimentar',
    title: 'Como Organizar Sua Semana Alimentar e Economizar Tempo',
    excerpt: 'Dicas práticas para planejar suas refeições da semana e ter uma alimentação saudável mesmo com a rotina corrida.',
    date: '5 Jan 2025',
    readTime: '4 min',
    category: 'Organização',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&crop=center',
    author: 'Dra. Lorrany Fontinele'
  },
  {
    slug: 'intolerancias-alimentares',
    title: 'Intolerâncias Alimentares: Como Identificar e Tratar',
    excerpt: 'Aprenda a reconhecer os sinais de intolerâncias alimentares e como adaptar sua dieta para melhorar sua qualidade de vida.',
    date: '3 Jan 2025',
    readTime: '9 min',
    category: 'Saúde',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center',
    author: 'Dra. Lorrany Fontinele'
  }
]

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-4 font-playfair">
                Blog da Dra. Lorrany
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Artigos, dicas e insights sobre nutrição, saúde e bem-estar
                para ajudar você em sua jornada de transformação.
              </p>
            </div>
          </div>
        </div>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-green-600 transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-600 font-medium">{post.author}</span>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-green-600 hover:text-green-700 font-semibold text-sm transition-colors"
                      >
                        Ler mais →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
