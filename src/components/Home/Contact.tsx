import React from "react";

function Contact() {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Contact Us
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Ready to start your construction project? Get in touch with our team for a
						consultation and quote.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Form */}
					<div className="bg-gray-50 rounded-lg p-8 shadow-lg">
						<h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

						<form>
							<div className="mb-6">
								<label
									htmlFor="name"
									className="block text-gray-700 font-medium mb-2"
								>
									Full Name
								</label>
								<input
									type="text"
									id="name"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malachite-400 text-sm"
									placeholder="Enter your full name"
								/>
							</div>

							<div className="mb-6">
								<label
									htmlFor="email"
									className="block text-gray-700 font-medium mb-2"
								>
									Email Address
								</label>
								<input
									type="email"
									id="email"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malachite-400 text-sm"
									placeholder="Enter your email address"
								/>
							</div>

							<div className="mb-6">
								<label
									htmlFor="phone"
									className="block text-gray-700 font-medium mb-2"
								>
									Phone Number
								</label>
								<input
									type="tel"
									id="phone"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malachite-400 text-sm"
									placeholder="Enter your phone number"
								/>
							</div>

							<div className="mb-6">
								<label
									htmlFor="service"
									className="block text-gray-700 font-medium mb-2"
								>
									Service Interested In
								</label>
								<div className="relative">
									<select
										id="service"
										className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malachite-400 text-sm bg-white"
									>
										<option value="">Select a service</option>
										<option value="concrete">Reinforced Concrete Works</option>
										<option value="masonry">Masonry Works</option>
										<option value="insulation">Insulation</option>
										<option value="tiling">Tiling and Bathroom Works</option>
										<option value="flooring">Flooring Installation</option>
										<option value="interior">Interior Finishing</option>
									</select>
									<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
										<i className="fas fa-chevron-down"></i>
									</div>
								</div>
							</div>

							<div className="mb-6">
								<label
									htmlFor="message"
									className="block text-gray-700 font-medium mb-2"
								>
									Message
								</label>
								<textarea
									id="message"
									rows={5}
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-malachite-400 text-sm"
									placeholder="Tell us about your project"
								></textarea>
							</div>

							<button
								type="submit"
								className="w-full bg-malachite-400 hover:bg-malachite-500 text-white py-3 px-6 rounded-button transition duration-300 text-lg font-medium cursor-pointer whitespace-nowrap"
							>
								Send Message
							</button>
						</form>
					</div>

					{/* Contact Information */}
					<div>
						<h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>

						<div className="space-y-6">
							<div className="flex items-start">
								<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
									<i className="fas fa-map-marker-alt text-malachite-400 text-xl"></i>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-gray-800 mb-1">
										Our Location
									</h4>
									<p className="text-gray-600">
										123 Construction Avenue
										<br />
										New York, NY 10001
										<br />
										United States
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
									<i className="fas fa-phone-alt text-malachite-400 text-xl"></i>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-gray-800 mb-1">
										Phone Number
									</h4>
									<p className="text-gray-600">
										+1 (555) 123-4567
										<br />
										+1 (555) 987-6543
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
									<i className="fas fa-envelope text-malachite-400 text-xl"></i>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-gray-800 mb-1">
										Email Address
									</h4>
									<p className="text-gray-600">
										info@eastronghold.com
										<br />
										support@eastronghold.com
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
									<i className="fas fa-clock text-malachite-400 text-xl"></i>
								</div>
								<div>
									<h4 className="text-lg font-semibold text-gray-800 mb-1">
										Working Hours
									</h4>
									<p className="text-gray-600">
										Monday - Friday: 8:00 AM - 6:00 PM
										<br />
										Saturday: 9:00 AM - 2:00 PM
										<br />
										Sunday: Closed
									</p>
								</div>
							</div>
						</div>

						<div className="mt-8">
							<h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
							<div className="flex space-x-4">
								<a
									href="#"
									className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-malachite-400 hover:text-white transition duration-300 cursor-pointer"
								>
									<i className="fab fa-facebook-f"></i>
								</a>
								<a
									href="#"
									className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-malachite-400 hover:text-white transition duration-300 cursor-pointer"
								>
									<i className="fab fa-twitter"></i>
								</a>
								<a
									href="#"
									className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-malachite-400 hover:text-white transition duration-300 cursor-pointer"
								>
									<i className="fab fa-linkedin-in"></i>
								</a>
								<a
									href="#"
									className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-malachite-400 hover:text-white transition duration-300 cursor-pointer"
								>
									<i className="fab fa-instagram"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
