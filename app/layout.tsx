import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dra. Lorrany Fontinele - Nutricionista Especialista',
  description: 'Nutrição personalizada, emagrecimento saudável, performance esportiva e bem-estar. Agende sua consulta com a Dra. Lorrany Fontinele (CRN-15 98765).',
  robots: 'index, follow',
  openGraph: {
    title: 'Dra. Lorrany Fontinele - Nutricionista Especialista',
    description: 'Transforme sua vida através da nutrição personalizada. Emagrecimento saudável, performance esportiva e bem-estar.',
    url: 'https://lorranyfontinele.com.br',
    siteName: 'Dra. Lorrany Fontinele',
    locale: 'pt_BR',
    type: 'website'
  }
}

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  )
}
