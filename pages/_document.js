import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="he">
      <Head>
        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
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
        {/* Add the accessibility script here */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.interdeal = { "sitekey": "4e0a51fe24e1e1f92eb2cf2cedc0a7bd", "Position": "Right", "Menulang": "HE", "domains": { "js": "https://cdn.equalweb.com/", "acc": "https://access.equalweb.com/" }, "btnStyle": { "vPosition": [ "88%", null ], "scale": [ "0.7", "0.7" ], "color": { "main": "#00848e", "second": "#ffffff" }, "icon": { "type": 7, "shape": "semicircle", "outline": false } } }; (function(doc, head, body){ var coreCall = doc.createElement('script'); coreCall.src = interdeal.domains.js + 'core/4.4.1/accessibility.js'; coreCall.defer = true; coreCall.integrity = 'sha512-tq2wb4PBHqpUqBTfTG32Sl7oexERId9xGHX2O3yF91IYLII2OwM1gJVBXGbEPaLmfSQrIE+uAOzNOuEUZHHM+g=='; coreCall.crossOrigin = 'anonymous'; coreCall.setAttribute('data-cfasync', true ); body? body.appendChild(coreCall) : head.appendChild(coreCall); })(document, document.head, document.body);
              `,
          }}
        />
        {/* End of accessibility script */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
