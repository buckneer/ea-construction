"use client";
import React, { useState } from 'react';
import Image from "next/image";

function Navbar() {

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="fixed w-full bg-white shadow-md z-50">
				<div className="container mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<Image src="/img/logos/logo.png" alt="EA Construction" width="70" height="70" />
						</div>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex items-center space-x-8">
							<a href="#" className="text-gray-800 hover:text-orange-500 font-medium">
								Home
							</a>
							<a href="#" className="text-gray-800 hover:text-orange-500 font-medium">
								Services
							</a>
							<a href="#" className="text-gray-800 hover:text-orange-500 font-medium">
								About Us
							</a>
							<a href="#" className="text-gray-800 hover:text-orange-500 font-medium">
								Contact
							</a>
							<button className="bg-malachite-400 hover:bg-malachite-500 text-black font-black rounded py-2 px-6 rounded-button transition duration-300 cursor-pointer whitespace-nowrap">
								Get a Quote
							</button>
						</nav>

						{/* Mobile menu button */}
						<div className="md:hidden">
							<button
								onClick={toggleMenu}
								className="text-gray-800 hover:text-orange-500 cursor-pointer whitespace-nowrap"
							>
								<i
									className={`fas ${
										isMenuOpen ? "fa-times" : "fa-bars"
									} text-2xl`}
								></i>
							</button>
						</div>
					</div>

					{/* Mobile Navigation */}
					{isMenuOpen && (
						<div className="md:hidden mt-4 pb-4">
							<a
								href="#"
								className="block py-2 text-gray-800 hover:text-orange-500 font-medium"
							>
								Home
							</a>
							<a
								href="#"
								className="block py-2 text-gray-800 hover:text-orange-500 font-medium"
							>
								Services
							</a>
							<a
								href="#"
								className="block py-2 text-gray-800 hover:text-orange-500 font-medium"
							>
								About Us
							</a>
							<a
								href="#"
								className="block py-2 text-gray-800 hover:text-orange-500 font-medium"
							>
								Contact
							</a>
							<button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-button transition duration-300 w-full cursor-pointer whitespace-nowrap">
								Get a Quote
							</button>
						</div>
					)}
				</div>
			</header>
	);
}

export default Navbar;