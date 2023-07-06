import { AppProps } from 'next/app';
import localFont from 'next/font/local'

import './globals.scss'

const myFont = localFont({ 
  src: [
    {
      path: '../assets/fonts/HelveticaNowDisplay-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/HelveticaNowDisplay-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/HelveticaNowDisplay-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ]
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={myFont.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default App;
