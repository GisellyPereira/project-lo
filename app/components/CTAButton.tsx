'use client'

import Link from 'next/link'
import { Phone, MessageSquare } from 'lucide-react'

export default function CTAButton() {
  const whatsapp = 'https://wa.me/5598999999999?text=Oi%2C%20quero%20agendar%20minha%20consulta%20de%20nutri%C3%A7%C3%A3o!'
  const tel = 'tel:+5598999999999'
  return (
    <div className="flex flex-col sm:flex-row items-stretch gap-3">
      <Link href={whatsapp} className="btn btn-primary">
        <MessageSquare className="mr-2 h-5 w-5" />
        Agendar pelo WhatsApp
      </Link>
      <Link href={tel} className="btn btn-outline">
        <Phone className="mr-2 h-5 w-5" />
        Ligar agora
      </Link>
    </div>
  )
}
