'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-green-50 to-emerald-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Nutrição Personalizada & Performance
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6 font-playfair">
                Transforme Sua Vida Através da{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                  Nutrição
                </span>
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-xl text-gray-600 max-w-2xl mb-8">
                Com a <strong>Dra. Lorrany Fontinele</strong>, especialista em nutrição personalizada,
                você vai descobrir como a alimentação pode ser sua aliada para alcançar
                seus objetivos de saúde e bem-estar.
              </span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contato"
                  className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Agendar Consulta Gratuita
                </Link>
                <Link
                  href="/servicos"
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors text-center"
                >
                  Conhecer Serviços
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Pacientes Atendidos</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Taxa de Sucesso</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative flex justify-center lg:justify-end">
              {/* Main image container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative">
                  {/* Professional photo */}
                  <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/lorrany-fontinele.jpg"
                      alt="Dra. Lorrany Fontinele - Nutricionista"
                      width={320}
                      height={384}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full opacity-60"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-200 rounded-full opacity-40"></div>
                  
                  {/* Floating badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-green-100">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">CRN-15</div>
                        <div className="text-xs text-gray-600">Registro Profissional</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
