import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-black text-center border-t border-white/10">
      <p className="text-gray-400">© {new Date().getFullYear()} スナック八千代 All Rights Reserved.</p>
    </footer>
  );
};