import React, { Component } from 'react';
import { BsWhatsapp, BsFacebook, BsEnvelopeFill } from 'react-icons/bs';

export class SocialLinks extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-icon">
          <BsWhatsapp />
        </button>
        <button className="btn btn-icon">
          <BsFacebook />
        </button>
        <button className="btn btn-icon">
          <BsEnvelopeFill />
        </button>
      </div>
    );
  }
}

export default SocialLinks;
