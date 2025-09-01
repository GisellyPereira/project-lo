'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/lorrany-fontinele.jpg"
                  alt="Dra. Lorrany Fontinele"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">8+</div>
                  <div className="text-sm">Anos de Experiência</div>
                </div>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="space-y-6">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                Sobre a Dra. Lorrany
              </span>
              
              <h2 className="text-4xl font-bold text-gray-900 font-playfair">
                Transformando Vidas Através da Nutrição
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Olá! Sou a Dra. Lorrany Fontinele, nutricionista especialista em nutrição personalizada 
                com mais de 8 anos de experiência ajudando pessoas a transformarem suas vidas através da alimentação.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Minha missão é mostrar que é possível alcançar seus objetivos de saúde e bem-estar 
                sem restrições extremas, criando hábitos sustentáveis que você consegue manter por toda a vida.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Pacientes Atendidos</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">Taxa de Sucesso</div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Especialidades</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Nutrição Personalizada</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Emagrecimento Saudável</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Performance Esportiva</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Saúde da Mulher</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
