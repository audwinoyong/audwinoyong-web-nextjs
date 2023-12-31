import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {year} All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Netlify hosting{' '}
        <span className="font-semibold"> | Credits: </span>
        <a href="https://bytegrad.com" target="_blank">
          ByteGrad
        </a>
      </p>
    </footer>
  );
}
