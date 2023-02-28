import '@/styles/globals.css';
import { MobileContextProvider } from '@/context/mobile';
import { PostsContextProvider } from '@/context/posts';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <MobileContextProvider>
        <PostsContextProvider>
          <Component {...pageProps} />
        </PostsContextProvider>
      </MobileContextProvider>
    </SessionProvider>
  );
}
