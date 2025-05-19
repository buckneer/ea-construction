import React from "react";
import Image from "next/image";

function Footer() {
	return (
		<footer className="bg-gray-100 text-black pt-16 pb-8">
			<div className="container mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* Company Info */}
					<div>
						<h3 className="text-xl font-bold mb-6">
							<Image src="/img/logos/logo.png" width="70" height="70" alt="Construction Logo" />
						</h3>
						<p className="text-gray-700 mb-6">
							Providing professional construction services with a commitment to
							quality, safety, and customer satisfaction since 2010.
						</p>
						<div className="flex space-x-4">
							<a
								href="#"
								className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
							>
								<i className="fab fa-facebook-f"></i>
							</a>
							<a
								href="#"
								className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
							>
								<i className="fab fa-twitter"></i>
							</a>
							<a
								href="#"
								className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
							>
								<i className="fab fa-linkedin-in"></i>
							</a>
							<a
								href="#"
								className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
							>
								<i className="fab fa-instagram"></i>
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold mb-6">Quick Links</h4>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
								>
									Home
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
								>
									Services
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
								>
									Projects
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
								>
									Contact
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
								>
									Careers
								</a>
							</li>
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="text-lg font-semibold mb-6">Our Services</h4>
						<ul className="space-y-3">
							<li>
								<a
									href="#"
									className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
								>
									Reinforced Concrete Works
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
								>
									Masonry Works
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
								>
									Insulation
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
								>
									Tiling and Bathroom Works
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
								>
									Flooring Installation
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-gray-700 hover:text-orange-500 transition duration-300 cursor-pointer"
								>
									Interior Finishing
								</a>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-lg font-semibold mb-6">Contact Information</h4>
						<ul className="space-y-4">
							<li className="flex items-start">
								<i className="fas fa-map-marker-alt text-orange-500 mt-1 mr-3"></i>
								<span className="text-gray-700">
									123 Construction Avenue
									<br />
									New York, NY 10001, USA
								</span>
							</li>
							<li className="flex items-center">
								<i className="fas fa-phone-alt text-orange-500 mr-3"></i>
								<span className="text-gray-700">+1 (555) 123-4567</span>
							</li>
							<li className="flex items-center">
								<i className="fas fa-envelope text-orange-500 mr-3"></i>
								<span className="text-gray-700">info@eastronghold.com</span>
							</li>
							<li className="flex items-center">
								<i className="fas fa-clock text-orange-500 mr-3"></i>
								<span className="text-gray-700">Mon-Fri: 8:00 AM - 6:00 PM</span>
							</li>
						</ul>
					</div>
				</div>

				<hr className="border-gray-800 my-8" />

				<div className="flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-500 text-sm mb-4 md:mb-0">
						&copy; {new Date().getFullYear()} EAstronghold. All rights reserved.
					</p>
					<div className="flex space-x-6">
						<a
							href="#"
							className="text-gray-500 hover:text-orange-500 text-sm transition duration-300 cursor-pointer"
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="text-gray-500 hover:text-orange-500 text-sm transition duration-300 cursor-pointer"
						>
							Terms of Service
						</a>
						<a
							href="#"
							className="text-gray-500 hover:text-orange-500 text-sm transition duration-300 cursor-pointer"
						>
							Sitemap
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
