'use client'

import { motion } from 'framer-motion'

const appearances = [
  {
    title: 'Revista Saúde & Bem-estar',
    date: 'Out 2024',
    description: 'Entrevista sobre alimentação funcional e seus benefícios para a saúde.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center',
    type: 'Revista'
  },
  {
    title: 'Podcast Saúde em Pauta',
    date: 'Set 2024',
    description: 'Bate-papo sobre hábitos alimentares e produtividade.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=250&fit=crop&crop=center',
    type: 'Podcast'
  }
]

export default function MediaAppearances() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                Mídia
              </span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 font-playfair">
                Aparições na Mídia
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compartilhando conhecimento e experiências através de diferentes canais de comunicação
                para inspirar e educar sobre nutrição e bem-estar.
              </span>
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {appearances.map((appearance, index) => (
              <motion.div
                key={appearance.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={appearance.image}
                      alt={appearance.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {appearance.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{appearance.title}</h3>
                      <span className="text-sm text-gray-500">{appearance.date}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{appearance.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
