'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Droplets } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-primary-blue to-deep-ocean text-pure-white relative overflow-hidden">
      {/* Background waves */}
      <div className="absolute inset-0">
        <svg className="absolute top-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,0 L0,0 Z" 
                fill="rgba(255, 255, 255, 0.1)" className="wave-animation"/>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Droplets
            key={i}
            size={20}
            className="absolute text-light-cyan/30 float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-light-cyan to-emerald-green rounded-full flex items-center justify-center">
                <Droplets size={24} className="text-pure-white" />
              </div>
              <span className="heading-md">Cristal Clear Water</span>
            </div>
            <p className="body-md text-ice-blue leading-relaxed">
              We, at Cristal Clear India Private Limited, are pleased to introduce ourselves as the 
              manufacturers and bottlers of India's most premium Natural Mineral Water Brand - Cristal Clear Water.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-pure-white/10 rounded-full flex items-center justify-center hover:bg-pure-white/20 transition-colors duration-300 group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-pure-white/10 rounded-full flex items-center justify-center hover:bg-pure-white/20 transition-colors duration-300 group">
                <Twitter size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-pure-white/10 rounded-full flex items-center justify-center hover:bg-pure-white/20 transition-colors duration-300 group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="w-10 h-10 bg-pure-white/10 rounded-full flex items-center justify-center hover:bg-pure-white/20 transition-colors duration-300 group">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h3 className="heading-md">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/products', label: 'Products' },
                
                { href: '/blogs', label: 'Blogs' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="body-md text-ice-blue hover:text-pure-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div className="space-y-6">
            <h3 className="heading-md">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/privacy-policy"
                  className="body-md text-ice-blue hover:text-pure-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms-conditions"
                  className="body-md text-ice-blue hover:text-pure-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="heading-md">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-emerald-green mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <a href="tel:18008333011" className="body-md text-ice-blue hover:text-pure-white transition-colors duration-300 block">
                    1800 833 3011
                  </a>
                  <a href="tel:18008330212" className="body-md text-ice-blue hover:text-pure-white transition-colors duration-300 block">
                    1800 833 0212
                  </a>
                  <a href="tel:+916389457042" className="body-md text-ice-blue hover:text-pure-white transition-colors duration-300 block">
+91 6389-457042
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-emerald-green flex-shrink-0" />
                <a href="mailto:syedsahab750@gmail.com" className="body-md text-ice-blue hover:text-pure-white transition-colors duration-300">
syedsahab750@gmail.com
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-emerald-green mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <div>
                    <p className="body-sm text-light-cyan font-medium">Corporate Address:</p>
                    <p className="body-sm text-ice-blue">
                      Unit No.1017 Ground floor, Tower-1, Express Trade Tower-2, 
                      Sector 132, Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                  <div>
                    <p className="body-sm text-light-cyan font-medium">Registered Address:</p>
                    <p className="body-sm text-ice-blue">
                      D-19, Near Shemrock School, Mansarover Garden New Delhi- 110015
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-pure-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="body-sm text-ice-blue">
              Copyright © {currentYear} Cristal Clear Water. All rights reserved.
            </p>
            <p className="body-sm text-ice-blue">
              Crafted with excellence for optimal hydration and health benefits.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}