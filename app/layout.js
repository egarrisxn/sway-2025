import {Poppins, Sansita} from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  style: ['normal', 'italic'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

const sansita = Sansita({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sansita',
  style: ['normal', 'italic'],
  weight: ['400', '700', '800', '900'],
})

export const metadata = {
  title: 'Sway 2025',
  description: 'Next + Sanity',
}

export default function RootLayout({children}) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${sansita.variable} grid min-h-[100dvh] w-full grid-rows-[auto_1fr_auto] font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
