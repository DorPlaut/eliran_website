import React from 'react';
import Link from 'next/link';

function Navbar() {
  // handle click
  const handleClick = (url) => {
    location.href = url;
  };
  return (
    <ul>
      <li>
        <Link href="/contact" passHref legacyBehavior>
          <button className="text-btn btn">צור קשר</button>
        </Link>
      </li>
      {/* <li>
        <Link href="/recommendations" passHref legacyBehavior>
          <button className="text-btn btn">המלצות</button>
        </Link>
      </li> */}
      <li>
        <Link href="/articles" passHref legacyBehavior>
          <button className="text-btn btn">כתבות</button>
        </Link>
      </li>
      <li>
        <Link href="/expertise" passHref legacyBehavior>
          <button className="text-btn btn">תחומי התמחות</button>
        </Link>
      </li>
      <li>
        <Link href="/about" passHref legacyBehavior>
          <button className="text-btn btn">אודות</button>
        </Link>
      </li>
      <li>
        <Link href="/" passHref legacyBehavior>
          <button className="text-btn btn">ראשי</button>
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
