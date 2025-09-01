import Image from 'next/image'

interface LogoProps {
  variant?: 'white' | 'colored'
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Logo({ variant = 'white', className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-12 w-auto',
    xl: 'h-14 w-auto'
  }

  const iconSrc = variant === 'white' 
    ? '/logo-para fundo-branco (500 x 500 px).png' 
    : '/logo-para fundo-colorido (500 x 500 px) (1).png'

  const textColor = variant === 'white' ? 'text-gray-900' : 'text-gray-900'
  const accentColor = variant === 'white' ? 'text-green-600' : 'text-green-600'

  return (
    <div className={`flex items-center gap-2 ${sizeClasses[size]} ${className}`}>
      {/* Ícone das imagens PNG */}
      <div className="relative">
        <Image
          src={iconSrc}
          alt="Ícone Nutrição"
          width={size === 'sm' ? 32 : size === 'md' ? 36 : size === 'lg' ? 40 : 44}
          height={size === 'sm' ? 32 : size === 'md' ? 36 : size === 'lg' ? 40 : 44}
          className="object-contain"
        />
      </div>
      
      {/* Texto da logo */}
      <div className="flex flex-col">
        <span className={`font-bold ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : size === 'lg' ? 'text-lg' : 'text-xl'} ${textColor} leading-tight`}>
          Lorrany Fontinele
        </span>
        <span className={`${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : size === 'lg' ? 'text-sm' : 'text-base'} ${accentColor} font-medium leading-tight`}>
          • nutricionista •
        </span>
      </div>
    </div>
  )
}
