import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1B1C57] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Company</h3>
          <p className="text-gray-300 text-sm">
            Empowering innovation and excellence. We build solutions that move the world forward.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">About</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Services</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-gray-300 text-sm">📍 Dhaka, Bangladesh</p>
          <p className="text-gray-300 text-sm">📞 +8801727932008</p>
          <p className="text-gray-300 text-sm">✉️ ayubdd99@gmail.com</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-300"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-300"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-300"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
