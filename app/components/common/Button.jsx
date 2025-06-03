'use client'
import Link from 'next/link'

const Button = ({ children, variant = 'default', size = 'md', href, className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300'
  
  const variants = {
    default: 'bg-white text-black hover:bg-white/90',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20',
    dark: `relative bg-[#2A1659]/40 backdrop-blur-xl text-white
           before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r 
           before:from-purple-900/50 before:to-indigo-900/50 before:-z-10
           border border-white/10 
           shadow-[0_4px_30px_rgba(0,0,0,0.1)]
           hover:shadow-[0_4px_30px_rgba(108,62,203,0.3)]
           hover:border-purple-500/30`,
    purple: `bg-gradient-to-r from-[#A84BC2] to-[#6C3ECB] text-white
             shadow-[0_8px_32px_0_rgba(168,75,194,0.37)]
             hover:shadow-[0_8px_32px_0_rgba(168,75,194,0.5)]
             border border-white/10
             backdrop-blur-xl`
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-10 py-4 text-lg'
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button 