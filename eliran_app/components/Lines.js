import React from 'react';
import LinesSvg from '@/public/Lines.svg';
import Logo from '@/public/logo.svg';

function Lines() {
  const width = document.querySelector('header');
  console.log(width.width);
  return (
    <div className="lines">
      <div className="filler"></div>
      <LinesSvg className="svg left" />
      <Logo className="logo" />
      <>{/* <h1>hello</h1> */}</>
      <div className="filler-right"></div>
      <LinesSvg className="svg right" />
    </div>
  );
}

export default Lines;
