import React from 'react';
import Link from 'next/link';
import Logo from '@/public/logo.svg';

function Custom404({ err }) {
  return (
    <div className="err">
      <h1>ERROR 404</h1>
      <h2>אופס. נראה שהעמוד שאתה מנסה להגיע אליו לא קיים.</h2>
      <Link href="/">
        <Logo alt={'logo'} />
        <h1>{err}</h1>
        <h3>לחצו כאן על מנת לחזור לאתר</h3>
      </Link>
    </div>
  );
}

export default Custom404;
