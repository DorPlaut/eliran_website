import '@/styles/globals.css';

import { MobileContextProvider } from '@/context/mobile';
import { PostsContextProvider } from '@/context/posts';
import { UserContextProvider } from '@/context/user';
import { SessionProvider } from 'next-auth/react';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps, session }) {
  return (
    <SessionProvider session={session}>
      <MobileContextProvider>
        <PostsContextProvider>
          <UserContextProvider>
            <Component {...pageProps} />
          </UserContextProvider>
        </PostsContextProvider>
      </MobileContextProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(App);
