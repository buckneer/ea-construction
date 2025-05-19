"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
  { name: 'Home', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/img/logos/logo.png" alt="EAstronghold" width={50} height={50} />
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-gray-800 font-medium hover:text-malachite-500 transition">
              <span className="uppercase tracking-wide text-sm">{link.name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-malachite-500 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button className="ml-6 bg-malachite-400 hover:bg-malachite-500 text-white font-semibold py-2 px-6 rounded-lg transition">
            Get a Quote
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800 focus:outline-none">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white transform transition-transform duration-300 z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-6">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg text-gray-800 hover:text-malachite-500 transition">
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 bg-malachite-400 hover:bg-malachite-500 text-white font-semibold py-2 px-8 rounded-lg transition self-start">
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}