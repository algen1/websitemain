import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ['latin'] })

export function Footer() {
  return (
    <footer className="py-8 mt-auto">
      <div className="flex justify-center">
        <p className={`${caveat.className} text-2xl text-gray-600 dark:text-gray-400`}>
          Algen Rrihnaj
        </p>
      </div>
    </footer>
  )
}

