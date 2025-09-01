'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Como funciona a primeira consulta?',
    answer: 'A primeira consulta dura aproximadamente 60-75 minutos. Fazemos uma avaliação completa do seu histórico de saúde, hábitos alimentares, objetivos e estilo de vida. Com base nessas informações, criamos um plano alimentar personalizado que se adapta à sua rotina.'
  },
  {
    question: 'Preciso fazer exames antes da consulta?',
    answer: 'Não é obrigatório, mas é recomendado. Se você já tem exames recentes (últimos 6 meses), pode trazê-los. Caso contrário, posso solicitar exames específicos durante a consulta para uma avaliação mais precisa.'
  },
  {
    question: 'O plano alimentar é muito restritivo?',
    answer: 'Não! Meu objetivo é criar um plano que você consiga seguir na vida real. Não trabalho com dietas restritivas, mas sim com reeducação alimentar que permite flexibilidade e inclui alimentos que você gosta.'
  },
  {
    question: 'Como funciona o acompanhamento?',
    answer: 'O acompanhamento varia conforme o plano escolhido. Pode ser via WhatsApp, consultas de retorno ou ambos. O importante é que você tenha suporte para ajustar o plano conforme sua evolução e necessidades.'
  },
  {
    question: 'Atendo online ou presencial?',
    answer: 'Atendo tanto online quanto presencialmente. As consultas online são tão eficazes quanto as presenciais e oferecem mais flexibilidade de horários. Você escolhe o formato que preferir.'
  },
  {
    question: 'Quanto tempo leva para ver resultados?',
    answer: 'Os resultados variam de pessoa para pessoa, mas geralmente os primeiros sinais de melhora (mais energia, melhor sono, menos inchaço) aparecem nas primeiras 2-3 semanas. Resultados mais visíveis costumam aparecer em 1-2 meses.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
            Dúvidas Frequentes
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 font-playfair">
            Perguntas Frequentes
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre o processo de consulta e acompanhamento nutricional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-2xl">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop&crop=center"
                      alt="Dra. Lorrany Fontinele"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Dra. Lorrany Fontinele</h3>
                  <p className="text-green-600 font-medium">Nutricionista Especialista</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Consultas online e presenciais</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Planos personalizados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Acompanhamento contínuo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Suporte via WhatsApp</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Agendar Consulta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
