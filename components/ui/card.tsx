import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  href?: string
  accent?: 'orange' | 'yellow' | 'pink' | 'purple'
}

const accentBorderMap = {
  orange: 'border-accent-orange',
  yellow: 'border-accent-yellow',
  pink: 'border-accent-pink',
  purple: 'border-accent-purple',
}

export function Card({ 
  children, 
  className, 
  as: Component = 'div',
  href,
  accent = 'orange',
}: CardProps) {
  const baseClasses = cn(
    'relative glass rounded-2xl p-6 border-l-8 transition-all duration-300 card-hover',
    accentBorderMap[accent],
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