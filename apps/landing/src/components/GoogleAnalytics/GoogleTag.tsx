import React from 'react'
import Script from 'next/script'

// Google tag (gtag.js)
const GoogleTag = () => {
  return (
    <>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-NX1QKQBNTC'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-NX1QKQBNTC');
        `}
      </Script>
    </>
  )
}

export default GoogleTag
