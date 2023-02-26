import '@/styles/globals.css';
import { ContextProvider } from '@/context/mobile';

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      {' '}
      <Component {...pageProps} />{' '}
    </ContextProvider>
  );
}
