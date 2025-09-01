import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-4 font-playfair">
                Nossos Serviços
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Oferecemos soluções personalizadas para transformar sua relação com a alimentação 
                e alcançar seus objetivos de saúde e bem-estar.
              </p>
            </div>
          </div>
        </div>
        <Services />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
