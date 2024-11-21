import './globals.css'
import {Poppins, Sansita} from 'next/font/google'
import {ThemeProvider} from 'next-themes'
import {draftMode} from 'next/headers'
import {VisualEditing, toPlainText} from 'next-sanity'
import {sanityFetch, SanityLive} from '@/sanity/live'
import {settingsQuery} from '@/sanity/queries'
import {resolveOpenGraphImage} from '@/sanity/utils'
import {handleError} from './client-utils'
import {Toaster} from 'sonner'
import DraftModeToast from '@/components/draft-mode-toast'
import Header from '@/components/header'
import Footer from '@/components/footer'

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

export async function generateMetadata() {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  })
  const title = settings?.title || demo.title
  const description = settings?.description || demo.description

  const ogImage = resolveOpenGraphImage(settings?.ogImage)
  let metadataBase = undefined
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined
  } catch {}
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export default async function RootLayout({children}) {
  const {isEnabled: isDraftMode} = await draftMode()

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${poppins.variable} ${sansita.variable}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <section className='min-h-screen pt-24'>
            <Toaster />
            {isDraftMode && (
              <>
                <DraftModeToast />
                <VisualEditing />
              </>
            )}
            <SanityLive onError={handleError} />
            <Header />
            <main>{children}</main>
            <Footer />
          </section>
        </ThemeProvider>
      </body>
    </html>
  )
}
