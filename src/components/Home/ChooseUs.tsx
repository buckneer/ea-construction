import React from "react";

function ChooseUs() {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
						Why Choose Us
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						EAstronghold is committed to delivering exceptional quality and value in
						every project we undertake.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Reason 1 */}
					<div className="bg-gray-50 rounded-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2">
						<div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
							<i className="fas fa-medal text-orange-500 text-3xl"></i>
						</div>
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							Experience & Expertise
						</h3>
						<p className="text-gray-600">
							With years of industry experience, our team of skilled professionals
							brings expertise to every project, ensuring high-quality results.
						</p>
					</div>

					{/* Reason 2 */}
					<div className="bg-gray-50 rounded-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2">
						<div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
							<i className="fas fa-check-circle text-orange-500 text-3xl"></i>
						</div>
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							Quality & Precision
						</h3>
						<p className="text-gray-600">
							We maintain the highest standards of quality in all our work, with
							meticulous attention to detail and precision in every aspect of
							construction.
						</p>
					</div>

					{/* Reason 3 */}
					<div className="bg-gray-50 rounded-lg p-8 text-center transition-transform duration-300 hover:-translate-y-2">
						<div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
							<i className="fas fa-hard-hat text-orange-500 text-3xl"></i>
						</div>
						<h3 className="text-xl font-bold text-gray-800 mb-4">
							Safety & Reliability
						</h3>
						<p className="text-gray-600">
							Safety is our priority. We adhere to strict safety protocols and deliver
							reliable, timely service that you can count on.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ChooseUs;
