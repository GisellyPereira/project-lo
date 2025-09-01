'use client'

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-700">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-playfair">
            Pronto para Transformar Sua Vida?
          </h2>
          
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Junte-se a centenas de pessoas que já transformaram sua relação com a alimentação
            e alcançaram seus objetivos de saúde e bem-estar com a Dra. Lorrany Fontinele.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contato"
              className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Agendar Consulta Gratuita
            </Link>
            
            <Link
              href="/servicos"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-block"
            >
              Conhecer Serviços
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-green-100">Pacientes Atendidos</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-green-100">Taxa de Sucesso</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl font-bold text-white mb-2">8+</div>
              <div className="text-green-100">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
