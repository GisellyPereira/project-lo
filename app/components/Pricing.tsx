'use client'

import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Consulta Individual',
    price: 'R$ 150',
    period: 'por consulta',
    description: 'Avaliação completa e plano alimentar personalizado.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop&crop=center',
    features: [
      'Avaliação nutricional completa',
      'Plano alimentar personalizado',
      'Acompanhamento por 30 dias',
      'Suporte via WhatsApp',
      'Receitas exclusivas'
    ],
    popular: false
  },
  {
    name: 'Pacote Mensal',
    price: 'R$ 280',
    period: 'por mês',
    description: 'Acompanhamento completo com consultas semanais.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center',
    features: [
      '4 consultas mensais',
      'Avaliação de composição corporal',
      'Ajustes semanais do plano',
      'Suporte prioritário',
      'Grupo exclusivo no WhatsApp',
      'Receitas e dicas diárias'
    ],
    popular: true
  },
  {
    name: 'Programa Completo',
    price: 'R$ 480',
    period: 'por mês',
    description: 'Transformação completa com coaching nutricional.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center',
    features: [
      'Tudo do pacote mensal',
      'Coaching comportamental',
      'Avaliação de exames',
      'Suporte 24/7',
      'Sessões de mindset',
      'Comunidade exclusiva',
      'Material didático completo'
    ],
    popular: false
  }
]

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
            Investimento
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 font-playfair">
            Planos e Preços
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para seus objetivos e transforme sua vida
            através da nutrição personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                plan.popular ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div className="relative h-48 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-green-600">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Escolher Plano
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
