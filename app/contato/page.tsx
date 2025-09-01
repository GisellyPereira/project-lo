import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Logo from '../components/Logo'

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <Logo variant="colored" size="lg" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4 font-playfair">
                Entre em Contato
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estamos aqui para ajudar você a transformar sua vida através da nutrição. 
                Entre em contato e vamos começar sua jornada de transformação.
              </p>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
