import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="he">
      <Head>
        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Assistant&display=swap"
          rel="stylesheet"
        />
        {/* cloudinery */}
        <script
          async
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
