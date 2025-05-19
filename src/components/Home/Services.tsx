import React from "react";

function Services() {
	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Our Services
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						We provide comprehensive construction services to meet all your building
						needs, from foundation to finishing touches.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Service 1 */}
					<div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
						<div className="h-48 overflow-hidden">
							<img
								src="https://readdy.ai/api/search-image?query=Construction%20workers%20installing%20reinforcement%20steel%20bars%20and%20preparing%20for%20concrete%20pouring%20on%20a%20construction%20site.%20Close-up%20view%20of%20steel%20rebar%20grid%20structure.%20Professional%20construction%20environment%20with%20clean%2C%20organized%20workspace.%20Natural%20lighting%20with%20blue%20sky%20background&width=600&height=400&seq=service1&orientation=landscape"
								alt="Reinforced Concrete Works"
								className="w-full h-full object-cover object-top"
							/>
						</div>
						<div className="p-6">
							<div className="flex items-center mb-4">
								<i className="fas fa-layer-group text-malachite-400 text-2xl mr-3"></i>
								<h3 className="text-xl font-bold text-gray-800">
									Reinforced Concrete Works
								</h3>
							</div>
							<p className="text-gray-600 mb-4">
								Expert installation of reinforcement steel and concrete pouring for
								foundations, slabs, columns, walls, and more.
							</p>
							<a
								href="#"
								className="text-malachite-400 hover:text-malachite-500 font-medium inline-flex items-center cursor-pointer"
							>
								Learn More <i className="fas fa-arrow-right ml-2"></i>
							</a>
						</div>
					</div>

					{/* Service 2 */}
					<div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
						<div className="h-48 overflow-hidden">
							<img
								src="https://readdy.ai/api/search-image?query=Professional%20bricklayer%20installing%20red%20bricks%20with%20cement%20mortar%20on%20construction%20site.%20Detailed%20view%20of%20masonry%20work%20in%20progress%20with%20perfectly%20aligned%20bricks.%20Clean%20workspace%20with%20construction%20tools%20visible.%20Natural%20lighting%20highlighting%20the%20texture%20of%20the%20brickwork.%20Professional%20construction%20photography&width=600&height=400&seq=service2&orientation=landscape"
								alt="Masonry Works"
								className="w-full h-full object-cover object-top"
							/>
						</div>
						<div className="p-6">
							<div className="flex items-center mb-4">
								<i className="fas fa-th text-malachite-400 text-2xl mr-3"></i>
								<h3 className="text-xl font-bold text-gray-800">Masonry Works</h3>
							</div>
							<p className="text-gray-600 mb-4">
								Professional bricklaying with solid bricks, hollow blocks, or
								aerated concrete, including chimney construction and cement
								plastering.
							</p>
							<a
								href="#"
								className="text-malachite-400 hover:text-malachite-500 font-medium inline-flex items-center cursor-pointer"
							>
								Learn More <i className="fas fa-arrow-right ml-2"></i>
							</a>
						</div>
					</div>

					{/* Service 3 */}
					<div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
						<div className="h-48 overflow-hidden">
							<img
								src="https://readdy.ai/api/search-image?query=Construction%20worker%20installing%20thermal%20insulation%20on%20building%20walls.%20Close-up%20of%20insulation%20material%20being%20applied%20with%20precision.%20Modern%20construction%20site%20with%20clean%20workspace%20and%20professional%20equipment.%20Bright%20natural%20lighting%20showing%20the%20details%20of%20the%20insulation%20process.%20High-quality%20professional%20construction%20photography&width=600&height=400&seq=service3&orientation=landscape"
								alt="Insulation"
								className="w-full h-full object-cover object-top"
							/>
						</div>
						<div className="p-6">
							<div className="flex items-center mb-4">
								<i className="fas fa-shield-alt text-malachite-400 text-2xl mr-3"></i>
								<h3 className="text-xl font-bold text-gray-800">Insulation</h3>
							</div>
							<p className="text-gray-600 mb-4">
								Comprehensive thermal insulation for floors, walls, ceilings, and
								roofs, as well as acoustic insulation for effective soundproofing.
							</p>
							<a
								href="#"
								className="text-malachite-400 hover:text-malachite-500 font-medium inline-flex items-center cursor-pointer"
							>
								Learn More <i className="fas fa-arrow-right ml-2"></i>
							</a>
						</div>
					</div>

					{/* Service 4 */}
					<div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
						<div className="h-48 overflow-hidden">
							<img
								src="https://readdy.ai/api/search-image?query=Professional%20tile%20installer%20laying%20ceramic%20tiles%20on%20bathroom%20floor.%20Close-up%20view%20of%20precise%20tile%20placement%20with%20spacers.%20Modern%20bathroom%20renovation%20in%20progress%20with%20clean%20workspace%20and%20professional%20tools%20visible.%20Bright%20lighting%20highlighting%20the%20pattern%20and%20texture%20of%20the%20tiles.%20High-quality%20construction%20photography&width=600&height=400&seq=service4&orientation=landscape"
								alt="Tiling and Bathroom Works"
								className="w-full h-full object-cover object-top"
							/>
						</div>
						<div className="p-6">
							<div className="flex items-center mb-4">
								<i className="fas fa-border-all text-malachite-400 text-2xl mr-3"></i>
								<h3 className="text-xl font-bold text-gray-800">
									Tiling and Bathroom Works
								</h3>
							</div>
							<p className="text-gray-600 mb-4">
								Expert installation of ceramic tiles on floors and walls, along with
								complete bathroom sanitary unit installation.
							</p>
							<a
								href="#"
								className="text-malachite-400 hover:text-malachite-500 font-medium inline-flex items-center cursor-pointer"
							>
								Learn More <i className="fas fa-arrow-right ml-2"></i>
							</a>
						</div>
					</div>

					{/* Service 5 */}
					<div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
						<div className="h-48 overflow-hidden">
							<img
								src="https://readdy.ai/api/search-image?query=Professional%20flooring%20installer%20laying%20wooden%20parquet%20flooring%20in%20modern%20interior.%20Close-up%20view%20of%20precise%20installation%20with%20specialized%20tools.%20Clean%2C%20bright%20workspace%20with%20natural%20lighting%20highlighting%20the%20wood%20grain%20texture.%20High-quality%20construction%20photography%20showing%20craftsmanship%20and%20attention%20to%20detail&width=600&height=400&seq=service5&orientation=landscape"
								alt="Flooring Installation"
								className="w-full h-full object-cover object-top"
							/>
						</div>
						<div className="p-6">
							<div className="flex items-center mb-4">
								<i className="fas fa-grip-horizontal text-malachite-400 text-2xl mr-3"></i>
								<h3 className="text-xl font-bold text-gray-800">
									Flooring Installation
								</h3>
							</div>
							<p className="text-gray-600 mb-4">
								Professional installation of parquet and laminate flooring, ensuring
								perfect finish and long-lasting results.
							</p>
							<a
								href="#"
								className="text-malachite-400 hover:text-malachite-500 font-medium inline-flex items-center cursor-pointer"
							>
								Learn More <i className="fas fa-arrow-right ml-2"></i>
							</a>
						</div>
					</div>

					{/* Service 6 */}
					<div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
						<div className="h-48 overflow-hidden">
							<img
								src="https://readdy.ai/api/search-image?query=Construction%20worker%20installing%20drywall%20and%20suspended%20ceiling%20in%20modern%20interior.%20Professional%20applying%20finishing%20touches%20to%20gypsum%20board%20walls.%20Clean%20workspace%20with%20proper%20lighting.%20Interior%20construction%20in%20progress%20with%20visible%20professional%20tools%20and%20equipment.%20High-quality%20construction%20photography&width=600&height=400&seq=service6&orientation=landscape"
								alt="Interior Finishing"
								className="w-full h-full object-cover object-top"
							/>
						</div>
						<div className="p-6">
							<div className="flex items-center mb-4">
								<i className="fas fa-paint-roller text-malachite-400 text-2xl mr-3"></i>
								<h3 className="text-xl font-bold text-gray-800">
									Interior Finishing
								</h3>
							</div>
							<p className="text-gray-600 mb-4">
								Complete interior finishing services including suspended ceilings,
								drywall works, and painting with decorative finishes.
							</p>
							<a
								href="#"
								className="text-malachite-400 hover:text-malachite-500 font-medium inline-flex items-center cursor-pointer"
							>
								Learn More <i className="fas fa-arrow-right ml-2"></i>
							</a>
						</div>
					</div>
				</div>

				<div className="text-center mt-12">
					<button className="bg-malachite-400 hover:bg-malachite-500 text-white py-3 px-8 rounded-button transition duration-300 text-lg font-medium cursor-pointer whitespace-nowrap">
						View All Services
					</button>
				</div>
			</div>
		</section>
	);
}

export default Services;
