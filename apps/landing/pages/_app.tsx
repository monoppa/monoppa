import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import '../src/styles/global.css'
import Seo from '../src/components/Seo/Seo'
import GoogleTag from '../src/components/GoogleAnalytics/GoogleTag'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTag />
      <Seo />

      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default CustomApp
