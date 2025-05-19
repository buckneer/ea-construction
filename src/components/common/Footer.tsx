import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image src="/img/logos/logo.png" width={70} height={70} alt="Construction Logo" />
              
            </div>
            <p className="text-gray-700 mb-6">
              Providing professional construction services with a commitment to quality, safety, and customer satisfaction since 2010.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
                <a key={idx} href="#" className="text-gray-700 hover:text-malachite-500 transition duration-300">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Quick Links</h4>
            <ul className="space-y-3 text-gray-700">
              {['Home','About Us','Services','Projects','Contact','Careers'].map(link => (
                <li key={link}>
                  <a href="#" className="hover:text-malachite-500 transition duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Our Services</h4>
            <ul className="space-y-3 text-gray-700">
              {['Reinforced Concrete Works','Masonry Works','Insulation','Tiling and Bathroom Works','Flooring Installation','Interior Finishing'].map(service => (
                <li key={service}>
                  <a href="#" className="hover:text-malachite-500 transition duration-300">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-800">Contact Information</h4>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-malachite-400 mr-3 mt-1" />
                <span>123 Construction Avenue<br/>New York, NY 10001, USA</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-malachite-400 mr-3" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-malachite-400 mr-3" />
                <span>info@eastronghold.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="text-malachite-400 mr-3" />
                <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-200 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} EAstronghold. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy','Terms of Service','Sitemap'].map(item => (
              <a key={item} href="#" className="hover:text-malachite-500 transition duration-300">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}