'use client';

import Link from 'next/link';
import { Phone, Menu, X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
  // { href: '/become-distributor', label: 'Become a Distributor' },
    { href: '/products', label: 'Products' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-pure-white shadow-lg sticky top-0 z-50 border-b border-water-mist">

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://images.unsplash.com/photo-1594416602533-44eee1eab03d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHx3YXRlciUyMGRyb3BsZXQlMjBsb2dvJTIwY3J5c3RhbHxlbnwwfDB8fGJsdWV8MTc1NjQxNjQwMnww&ixlib=rb-4.1.0&q=85"
                alt="Cristal Clear Water Logo - Mihály Köles on Unsplash"
                className="h-10 w-10 rounded-full object-cover"
                width="40"
                height="40"
              />
              <span className="heading-md text-primary-blue">
                Cristal Clear Water
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="body-md font-medium text-text-primary hover:text-primary-blue transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            <Link href="/login" className="ml-6 px-5 py-2 rounded-full bg-primary-blue text-white font-semibold hover:bg-ocean-blue transition shadow">
              Login
            </Link>
            <Link href="/cart" className="relative ml-4 text-text-primary hover:text-primary-blue transition-colors duration-300">
                <ShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                    {cart.length}
                  </span>
                )}
              </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Link href="/cart" className="relative text-text-primary hover:text-primary-blue transition-colors duration-300 mr-2">
              <ShoppingCart size={22} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transform transition-all duration-300 hover:scale-110">
                  {cart.length}
                </span>
              )}
            </Link>
            <Link href="/login" className="px-4 py-2 rounded-full bg-primary-blue text-white font-semibold hover:bg-ocean-blue transition shadow">
              Login
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary hover:text-primary-blue transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-pure-white border-t border-water-mist">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 body-md font-medium text-text-primary hover:text-primary-blue hover:bg-ice-blue transition-all duration-300 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}