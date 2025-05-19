import React from "react";

function Hero() {
	return (
		<section className="relative pt-24 md:pt-0">
			<div className="w-full h-screen min-h-[600px] bg-gray-900 relative overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center z-0"
					style={{
						backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20construction%20site%20with%20modern%20architecture%2C%20concrete%20structures%2C%20and%20construction%20workers%20in%20safety%20gear.%20Clean%2C%20organized%20worksite%20with%20cranes%20and%20equipment.%20Soft%20natural%20lighting%2C%20creating%20a%20professional%20atmosphere.%20High-quality%20professional%20photography%20with%20excellent%20composition%20and%20depth%20of%20field&width=1920&height=1080&seq=hero1&orientation=landscape')`,
						backgroundPosition: "center",
						filter: "brightness(0.6)",
					}}
				></div>

				<div className="container mx-auto px-6 relative z-10 flex items-center h-full">
					<div className="max-w-2xl text-white">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
							Reliable. Precise. <br />
							Professional Construction Services.
						</h1>
						<p className="text-lg md:text-xl mb-8 text-gray-200">
							EAstronghold delivers exceptional construction solutions for both
							residential and commercial projects, with a commitment to quality and
							timeliness.
						</p>
						<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
							<button className="bg-malachite-400 hover:bg-malachite-500 text-black py-3 px-8 rounded-button transition duration-300 text-lg font-medium cursor-pointer whitespace-nowrap">
								Our Services
							</button>
							<button className="bg-transparent hover:bg-white/10 text-white border-2 border-white py-3 px-8 rounded-button transition duration-300 text-lg font-medium cursor-pointer whitespace-nowrap">
								Contact Us Today
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
