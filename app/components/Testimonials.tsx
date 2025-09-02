'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Ana Paula Santos',
    role: 'Emagrecimento - 15kg em 6 meses',
    message: 'A Dra. Lorrany transformou minha relação com a comida. Perdi 15kg de forma saudável e aprendi a me alimentar melhor. Hoje me sinto mais confiante e com muito mais energia!',
    rating: 5,
    result: '-15kg'
  },
  {
    name: 'Carlos Eduardo Silva',
    role: 'Performance Esportiva',
    message: 'Como corredor, sempre tive dificuldade com minha alimentação. A Dra. Lorrany criou um plano perfeito que melhorou minha performance e recuperação. Recomendo muito!',
    rating: 5,
    result: '+20%'
  },
  {
    name: 'Mariana Costa',
    role: 'Saúde e Bem-estar',
    message: 'Depois de anos tentando dietas que não funcionavam, encontrei a Dra. Lorrany. Ela me ensinou que nutrição é sobre saúde, não sobre restrição. Mudou minha vida!',
    rating: 5,
    result: '100%'
  },
  {
    name: 'Roberto Almeida',
    role: 'Emagrecimento - 12kg em 4 meses',
    message: 'A abordagem da Dra. Lorrany é diferente de tudo que já tentei. Ela entende que cada pessoa é única e cria planos que realmente funcionam na vida real.',
    rating: 5,
    result: '-12kg'
  },
  {
    name: 'Fernanda Lima',
    role: 'Reeducação Alimentar',
    message: 'Aprendi a me alimentar de forma consciente e saudável. A Dra. Lorrany é paciente, atenciosa e realmente se importa com o progresso dos pacientes.',
    rating: 5,
    result: 'Nova vida'
  },
  {
    name: 'Lucas Mendes',
    role: 'Performance Esportiva',
    message: 'Como atleta amador, sempre busquei melhorar minha performance. A Dra. Lorrany me ajudou a otimizar minha alimentação e os resultados foram incríveis!',
    rating: 5,
    result: '+30%'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
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
                Depoimentos
              </span>
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 font-playfair">
                O Que Dizem Nossos Pacientes
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="text-xl text-gray-600 max-w-3xl mx-auto">
                Histórias reais de transformação e resultados alcançados através da nutrição personalizada
                da Dra. Lorrany Fontinele.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Message */}
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.message}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                    <div className="text-2xl font-bold text-green-600">{testimonial.result}</div>
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
