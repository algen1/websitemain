'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  
  const links = [
    { href: '/', label: 'home' },
    { href: '/dev', label: 'dev' },
    { href: '/education', label: 'education' },
    { href: '/experiences', label: 'experiences' },
    { href: '/videos', label: 'videos' },
    { href: '/goodies', label: 'goodies' },
  ]

  return (
    <div className="flex items-center gap-4">
      <nav className="flex gap-4">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`relative py-1 transition-colors hover:text-gray-600 dark:hover:text-gray-300
              ${pathname === href ? 'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-orange-500' : ''}`}
          >
            {label}
          </Link>
        ))}
      </nav>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </div>
  )
}

