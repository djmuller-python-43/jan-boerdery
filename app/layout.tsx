import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import Navbar from './(shared)/Navbar'
import Footer from './(shared)/Footer'



const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jan\'s Boerdery',
  description: 'Jan\'s Boerdery is about bringing the freshes greenbeans. Fresh from the farm to your table',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark' style={{colorScheme:'dark'}}>
      <body className={roboto.className}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
