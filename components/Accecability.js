// <!-- Accessibility Code for "eliran-website.vercel.app" -->

import React from 'react';

function Accecability() {
  window.interdeal = {
    sitekey: '4e0a51fe24e1e1f92eb2cf2cedc0a7bd',
    Position: 'Right',
    Menulang: 'HE',
    domains: {
      js: 'https://cdn.equalweb.com/',
      acc: 'https://access.equalweb.com/',
    },
    btnStyle: {
      vPosition: ['80%', null],
      scale: ['0.8', '0.8'],
      color: {
        main: '#1876c9',
        second: '',
      },
      icon: {
        type: 7,
        shape: 'semicircle',
        outline: false,
      },
    },
  };
  (function (doc, head, body) {
    var coreCall = doc.createElement('script');
    coreCall.src = interdeal.domains.js + 'core/4.4.1/accessibility.js';
    coreCall.defer = true;
    coreCall.integrity =
      'sha512-tq2wb4PBHqpUqBTfTG32Sl7oexERId9xGHX2O3yF91IYLII2OwM1gJVBXGbEPaLmfSQrIE+uAOzNOuEUZHHM+g==';
    coreCall.crossOrigin = 'anonymous';
    coreCall.setAttribute('data-cfasync', true);
    body ? body.appendChild(coreCall) : head.appendChild(coreCall);
  })(document, document.head, document.body);

  return <div></div>;
}

export default Accecability;
