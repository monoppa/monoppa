import { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'

import '../src/styles/global.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to landing!</title>
      </Head>

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
