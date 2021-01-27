import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FooterWrapper } from '../styles/Footer.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        An open source project by{' '}
        <a
          href="https://robertsquires.co.uk"
          target="_blank"
          rel="nopener"
        >
          Rob Squires
        </a>
      </p>
      <a
        href="https://github.com/RobTF9/bengali-word-quiz"
        target="_blank"
        rel="nopener"
      >
        <FiGithub />
        View on Github
      </a>
    </FooterWrapper>
  );
};

export default Footer;
