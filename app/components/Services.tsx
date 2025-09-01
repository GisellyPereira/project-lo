'use client'

import { Salad, Dumbbell, Apple, UtensilsCrossed, Heart, Target, Users, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: Target,
    title: 'Nutrição Personalizada',
    desc: 'Planos alimentares 100% personalizados baseados no seu estilo de vida, objetivos e preferências alimentares.',
    color: 'from-green-500 to-emerald-600'
  },
  {
    icon: Salad,
    title: 'Emagrecimento Saudável',
    desc: 'Perda de peso de forma sustentável, sem dietas restritivas e com foco na saúde e bem-estar.',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Dumbbell,
    title: 'Performance Esportiva',
    desc: 'Nutrição especializada para atletas e praticantes de atividade física que buscam melhorar performance.',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Heart,
    title: 'Saúde e Bem-estar',
    desc: 'Melhoria da qualidade de vida através de hábitos alimentares saudáveis e equilibrados.',
    color: 'from-pink-500 to-rose-600'
  },
  {
    icon: Apple,
    title: 'Reeducação Alimentar',
    desc: 'Aprenda a se relacionar melhor com a comida e desenvolva hábitos alimentares duradouros.',
    color: 'from-orange-500 to-red-600'
  },
  {
    icon: UtensilsCrossed,
    title: 'Planejamento de Refeições',
    desc: 'Organize suas refeições de forma prática e eficiente, economizando tempo e dinheiro.',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Users,
    title: 'Acompanhamento Familiar',
    desc: 'Nutrição para toda a família, criando hábitos saudáveis desde a infância.',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    icon: BookOpen,
    title: 'Educação Nutricional',
    desc: 'Aprenda sobre nutrição de forma simples e prática para tomar melhores decisões alimentares.',
    color: 'from-indigo-500 to-purple-600'
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-green-600 font-semibold text-sm uppercase tracking-wide"
          >
            Nossos Serviços
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 font-playfair"
          >
            Soluções Completas para Sua Saúde
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Oferecemos uma abordagem personalizada e científica para transformar sua relação com a alimentação
            e alcançar seus objetivos de saúde e bem-estar.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
