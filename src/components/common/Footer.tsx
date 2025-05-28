import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { Building2, Hammer, HardHat, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-4 gap-8">
						<div className="md:col-span-2">
							<div className="flex items-center space-x-3 mb-6">
								<div className="relative">
									<Building2 className="h-10 w-10 text-green-400" />
									<HardHat className="h-5 w-5 text-orange-400 absolute -top-1 -right-1" />
								</div>
								<div>
									<h3 className="text-2xl font-bold">
										EA Construction Solutions
									</h3>
									<p className="text-gray-400">Building Excellence in Brugge</p>
								</div>
							</div>
							<p className="text-gray-400 mb-6 leading-relaxed">
								Your trusted partner for comprehensive construction services in
								Brugge, Belgium. From foundation to finish, we deliver quality
								craftsmanship with professional excellence and modern building
								techniques.
							</p>
							<div className="flex space-x-4">
								<Button
									variant="outline"
									size="sm"
									className="border-gray-600 text-gray-300 hover:bg-gray-800"
								>
									Facebook
								</Button>
								<Button
									variant="outline"
									size="sm"
									className="border-gray-600 text-gray-300 hover:bg-gray-800"
								>
									LinkedIn
								</Button>
								<Button
									variant="outline"
									size="sm"
									className="border-gray-600 text-gray-300 hover:bg-gray-800"
								>
									Instagram
								</Button>
							</div>
						</div>

						<div>
							<h4 className="text-lg font-semibold mb-6 flex items-center">
								<Hammer className="h-5 w-5 mr-2 text-green-400" />
								Our Services
							</h4>
							<ul className="space-y-3 text-gray-400">
								<li>
									<Link
										href="/services"
										className="hover:text-green-400 transition-colors"
									>
										Reinforced Concrete
									</Link>
								</li>
								<li>
									<Link
										href="/services"
										className="hover:text-green-400 transition-colors"
									>
										Masonry Works
									</Link>
								</li>
								<li>
									<Link
										href="/services"
										className="hover:text-green-400 transition-colors"
									>
										Insulation Systems
									</Link>
								</li>
								<li>
									<Link
										href="/services"
										className="hover:text-green-400 transition-colors"
									>
										Tiling & Flooring
									</Link>
								</li>
								<li>
									<Link
										href="/services"
										className="hover:text-green-400 transition-colors"
									>
										Final Construction
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-lg font-semibold mb-6 flex items-center">
								<MapPin className="h-5 w-5 mr-2 text-green-400" />
								Quick Links
							</h4>
							<ul className="space-y-3 text-gray-400">
								<li>
									<Link
										href="/about"
										className="hover:text-green-400 transition-colors"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href="/projects"
										className="hover:text-green-400 transition-colors"
									>
										Our Projects
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className="hover:text-green-400 transition-colors"
									>
										Contact Us
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className="hover:text-green-400 transition-colors"
									>
										Get Quote
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className="hover:text-green-400 transition-colors"
									>
										Emergency Service
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-gray-800 mt-12 pt-8">
						<div className="flex flex-col md:flex-row justify-between items-center">
							<p className="text-gray-400 mb-4 md:mb-0">
								&copy; {new Date().getFullYear()} EA Construction Solutions. All
								rights reserved. | Licensed & Insured in Belgium
							</p>
							<div className="flex items-center space-x-6 text-sm text-gray-400">
								<span className="flex items-center">
									<Phone className="h-4 w-4 mr-2" />
									+32 50 123 456
								</span>
								<span className="flex items-center">
									<Mail className="h-4 w-4 mr-2" />
									info@eaconstruction.be
								</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
  );
}