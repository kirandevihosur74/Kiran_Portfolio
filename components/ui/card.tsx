import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  href?: string
  accent?: 'orange' | 'yellow' | 'pink' | 'purple'
}

const accentOutlineMap = {
  orange: 'outline outline-2 outline-[#fbbf24]',
  yellow: 'outline outline-2 outline-yellow-400',
  pink: 'outline outline-2 outline-pink-400',
  purple: 'outline outline-2 outline-purple-400',
}

export function Card({ 
  children, 
  className, 
  as: Component = 'div',
  href,
  accent = 'orange',
}: CardProps) {
  const baseClasses = cn(
    'relative glass rounded-2xl p-6 transition-all duration-300 card-hover',
    accentOutlineMap[accent],
    className
  )

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    )
  }

  return (
    <Component className={baseClasses}>
      {children}
    </Component>
  )
} 