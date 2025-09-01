'use client'

import { cn } from '../lib/cn'

type Props = {
  id?: string
  className?: string
  children: React.ReactNode
}

export default function Section({ id, className, children }: Props) {
  return (
    <section id={id} className={cn('section', className)}>
      <div className="container">
        {children}
      </div>
    </section>
  )
}
