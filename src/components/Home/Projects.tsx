import React from "react";

function Projects() {
	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Featured Projects
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Explore some of our recent construction projects that showcase our expertise
						and quality workmanship.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Project 1 */}
					<div className="bg-white rounded-lg shadow-lg overflow-hidden">
						<div className="h-64 overflow-hidden">
							<img
								src="https://readdy.ai/api/search-image?query=Modern%20residential%20apartment%20building%20with%20clean%20architectural%20lines%20and%20large%20windows.%20Newly%20completed%20construction%20with%20perfect%20concrete%20structure%20and%20brickwork.%20Professional%20architectural%20photography%20with%20natural%20lighting%20showing%20the%20quality%20of%20construction.%20Clean%20surroundings%20with%20landscaping%20elements&width=600&height=400&seq=project1&orientation=landscape"
								alt="Residential Complex"
								className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
							/>
						</div>
						<div className="p-6">
							<span className="text-xs font-semibold text-malachite-400 uppercase tracking-wider">
								Residential
							</span>
							<h3 className="text-xl font-bold text-gray-800 mt-2 mb-2">
								Parkview Residences
							</h3>
							<p className="text-gray-600 mb-4">
								A modern residential complex featuring reinforced concrete
								structures, premium insulation, and high-quality interior finishing.
							</p>
							<div className="flex items-center text-sm text-gray-500">
								<i className="fas fa-map-marker-alt mr-2 text-malachite-400"></i>
								<span>New York City, NY</span>
							</div>
						</div>
					</div>

					{/* Project 2 */}
					<div className="bg-white rounded-lg shadow-lg overflow-hidden">
						<div className="h-64 overflow-hidden">
							<img
								src="https://readdy.ai/api/search-image?query=Modern%20commercial%20office%20building%20with%20glass%20facade%20and%20concrete%20structure.%20Newly%20completed%20construction%20showing%20professional%20workmanship.%20Clean%20architectural%20lines%20with%20attention%20to%20detail.%20Professional%20architectural%20photography%20with%20perfect%20lighting%20showing%20the%20quality%20of%20construction%20materials%20and%20design&width=600&height=400&seq=project2&orientation=landscape"
								alt="Commercial Building"
								className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
							/>
						</div>
						<div className="p-6">
							<span className="text-xs font-semibold text-malachite-400 uppercase tracking-wider">
								Commercial
							</span>
							<h3 className="text-xl font-bold text-gray-800 mt-2 mb-2">
								Horizon Business Center
							</h3>
							<p className="text-gray-600 mb-4">
								A state-of-the-art commercial building with advanced concrete
								structures, acoustic insulation, and premium flooring.
							</p>
							<div className="flex items-center text-sm text-gray-500">
								<i className="fas fa-map-marker-alt mr-2 text-malachite-400"></i>
								<span>Chicago, IL</span>
							</div>
						</div>
					</div>

					{/* Project 3 */}
					<div className="bg-white rounded-lg shadow-lg overflow-hidden">
						<div className="h-64 overflow-hidden">
							<img
								src="https://readdy.ai/api/search-image?query=Luxury%20hotel%20building%20with%20modern%20architecture%20showcasing%20perfect%20concrete%20work%20and%20masonry.%20Newly%20completed%20construction%20with%20attention%20to%20detail%20in%20every%20aspect.%20Professional%20architectural%20photography%20with%20natural%20lighting%20highlighting%20the%20quality%20of%20materials%20and%20construction%20techniques.%20Clean%20surroundings%20with%20landscaping%20elements&width=600&height=400&seq=project3&orientation=landscape"
								alt="Hotel Renovation"
								className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
							/>
						</div>
						<div className="p-6">
							<span className="text-xs font-semibold text-malachite-400 uppercase tracking-wider">
								Hospitality
							</span>
							<h3 className="text-xl font-bold text-gray-800 mt-2 mb-2">
								Grand Plaza Hotel
							</h3>
							<p className="text-gray-600 mb-4">
								Complete renovation of a luxury hotel, including masonry works,
								bathroom tiling, and interior finishing to the highest standards.
							</p>
							<div className="flex items-center text-sm text-gray-500">
								<i className="fas fa-map-marker-alt mr-2 text-malachite-400"></i>
								<span>Miami, FL</span>
							</div>
						</div>
					</div>
				</div>

				<div className="text-center mt-12">
					<button className="bg-malachite-400 hover:bg-malachite-500 text-white py-3 px-8 rounded-button transition duration-300 text-lg font-medium cursor-pointer whitespace-nowrap">
						View All Projects
					</button>
				</div>
			</div>
		</section>
	);
}

export default Projects;
