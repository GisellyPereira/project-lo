import Navbar from '../components/Navbar'
import About from '../components/About'
import MediaAppearances from '../components/MediaAppearances'
import SocialImpact from '../components/SocialImpact'
import Footer from '../components/Footer'

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-4 font-playfair">
                Sobre a Dra. Lorrany
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Conheça a história, formação e missão da Dra. Lorrany Fontinele, 
                especialista em nutrição personalizada e transformação de vidas.
              </p>
            </div>
          </div>
        </div>
        <About />
        <MediaAppearances />
        <SocialImpact />
      </main>
      <Footer />
    </>
  )
}
