import React, { Component, useEffect, useState } from 'react';
import { BsWhatsapp, BsFacebook, BsEnvelopeFill } from 'react-icons/bs';
import Link from 'next/link';
import { useUserContext } from '@/context/user';

function SocialLinks() {
  const [user, setUser] = useUserContext();
  const [whatsappLink, setWhatsappLink] = useState('');

  // get phone right
  function cleanPhoneNumber(phoneNumber) {
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    const stripped = digitsOnly.replace(/^0+/, '');
    return stripped;
  }

  // console.log(user.phone);
  useEffect(() => {
    if (user) {
      setWhatsappLink(`https://wa.me/972${cleanPhoneNumber(user.phone)}`);
    }
  }, [user]);

  return (
    <>
      {user && (
        <div>
          <a href={whatsappLink} target="_blank" className="btn btn-icon">
            <BsWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/eliranbalely/"
            target="_blank"
            className="btn btn-icon"
          >
            <BsFacebook />
          </a>
          <a
            href={`mailto:${user.email}`}
            target="_blank"
            className="btn btn-icon"
          >
            <BsEnvelopeFill />
          </a>
        </div>
      )}
    </>
  );
}

export default SocialLinks;
