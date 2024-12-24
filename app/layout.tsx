import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import '@/styles/globals.css'

export const metadata = {
  title: 'Algen Rrihnaj',
  description: 'Personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistMono.className}`} suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-[#1c1c1c] text-black dark:text-white antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="mx-auto max-w-2xl px-4 min-h-screen flex flex-col">
            <header className="flex items-center justify-between py-8">
              <a href="/" className="text-xl">
                (ƒ);
              </a>
              <Navigation />
            </header>
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

