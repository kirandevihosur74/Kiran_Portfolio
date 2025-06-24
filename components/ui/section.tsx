import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: keyof JSX.IntrinsicElements
}

export function Section({ 
  children, 
  className, 
  id, 
  as: Component = 'section' 
}: SectionProps) {
  return (
    <Component 
      id={id}
      className={cn('section-padding', className)}
    >
      {children}
    </Component>
  )
} 