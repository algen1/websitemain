import { Github, Video, Mail } from 'lucide-react'
import Image from 'next/image'
import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-16">
      <Image
        src="/placeholder.svg"
        alt="Avatar"
        width={100}
        height={100}
        className="rounded-full"
      />
      
      <h1 className={`${caveat.className} text-5xl`}>
        Hello! I'm Algen
      </h1>
      
      <p className="text-center text-xl text-gray-600 dark:text-gray-400">
        I{' '}
        <a href="/dev" className="underline decoration-orange-500 hover:text-black dark:hover:text-white">
          like to code
        </a>
        {' '}and{' '}
        <a href="/videos" className="underline decoration-orange-500 hover:text-black dark:hover:text-white">
          make videos
        </a>
      </p>

      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <span>Currently in Education</span>
        <a
          href="/education"
          className="rounded-full bg-orange-500/10 text-orange-500 px-3 py-1 hover:bg-orange-500/20 transition-colors"
        >
          @ Brunel University
        </a>
      </div>

      <div className="flex gap-6 text-gray-600 dark:text-gray-400">
        <a
          href="https://github.com/algen1"
          className="hover:text-black dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.youtube.com/@algenr"
          className="hover:text-black dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Video className="h-6 w-6" />
          <span className="sr-only">YouTube</span>
        </a>
        <a
          href="mailto:rrihnajalgen@gmail.com"
          className="hover:text-black dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="h-6 w-6" />
          <span className="sr-only">Email</span>
        </a>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        rrihnajalgen@gmail.com
      </div>
    </div>
  )
}

