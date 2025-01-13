'use client';

import { Youtube, Twitter, Facebook } from 'lucide-react';
import { ScrollToTop } from './ScrollToTop';
import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const services = [
    { name: 'Student Visa Assistance', href: '#' },
    { name: 'Work Abroad Consultancy', href: '#' },
    { name: 'Study Abroad Guidance', href: '#' },
    { name: 'Career Counseling', href: '#' },
    { name: 'Immigration Support', href: '#' },
  ];

  const links = [
    { name: 'Support', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'FAQs', href: '#' },
  ];

  const socialLinks = [
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  const handleSubscribe = () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      setSuccess('');
    } else {
      setError('');
      setSuccess('Thank you for subscribing!');
      setEmail('');
    }
  };

  return (
    <footer className="px-6 sm:px-12 md:px-[72px] bg-gray-900 text-gray-300 py-16">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 text-center md:text-left md:grid-cols-4 gap-12">
          {/* Left Column */}
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold text-white mb-4 sm:text-3xl">
              Let Us Connect
            </h2>
            <p className="mb-8 text-gray-400 leading-relaxed">
              Discover the opportunities to study, work, or live abroad. Let us
              guide you every step of the way.
            </p>
            <div className="flex items-center justify-center space-x-4 sm:space-x-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="hover:text-emerald-500 transition-colors"
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="hover:text-emerald-500 transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe Column */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Subscribe</h3>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-gray-800 border border-gray-700 text-white placeholder:text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition duration-300"
                aria-label="Enter your email to subscribe"
              />
              <button
                onClick={handleSubscribe}
                className="w-full p-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 transition duration-300"
                aria-label="Subscribe to our newsletter"
              >
                Subscribe
              </button>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {success && <p className="text-green-500 text-sm">{success}</p>}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
          © {new Date().getFullYear()} by Care2 Training Consultancy. All rights reserved.
        </div>
      </div>

      <ScrollToTop />
    </footer> 
  );
};

export default Footer;
