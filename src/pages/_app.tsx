import { IntervalProvider } from '../context/IntervalContext';

import '../styles/globals.css'; 

function MyApp({ Component, pageProps }) {
  return (
    <IntervalProvider>
      <Component {...pageProps} />
    </IntervalProvider>
  )
}

export default MyApp
