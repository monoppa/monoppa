import React, { ReactNode } from 'react'
import Head from 'next/head'

type SeoProps = {
  children?: ReactNode
}

const Seo = (props: SeoProps) => {
  const title = 'monoppa - Blog by Mon Quindoza'
  const metaDescription =
    'Everything tech, react, software development and travel + productivity tips.'

  return (
    <Head>
      {/* HTML Meta Tags */}
      <title>{title}</title>
      <meta name='description' content={metaDescription}></meta>
      <link rel='icon' href='/favicon.png' />

      {/* Facebook Meta Tags */}
      <meta property='og:url' content='https://monoppa.com/' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metaDescription} />
      <meta
        property='og:image'
        content='https://firebasestorage.googleapis.com/v0/b/travy-staging.appspot.com/o/opengraph-3.png?alt=media'
      />

      {/* Twitter Meta Tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:domain' content='monoppa.com' />
      <meta property='twitter:url' content='https://monoppa.com/' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={metaDescription} />
      <meta
        name='twitter:image'
        content='https://firebasestorage.googleapis.com/v0/b/travy-staging.appspot.com/o/opengraph-3.png?alt=media'
      />

      {props.children}
    </Head>
  )
}

export default Seo
