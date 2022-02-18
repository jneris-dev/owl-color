import type { AppProps } from 'next/app'
import { ColorContextProvider } from '../context/ColorContext';

import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ColorContextProvider>
      <Component {...pageProps} />
    </ColorContextProvider>
  )
}

export default MyApp
