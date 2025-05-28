import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Building2,
	Hammer,
	Shield,
	Wrench,
	Phone,
	Mail,
	MapPin,
	CheckCircle,
	MessageCircle,
	Clock,
	Users,
	Award,
	ArrowRight,
	HardHat,
	Truck,
	Calendar,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="min-h-screen bg-white">

			{/* Hero Section */}
			<section className="relative bg-gradient-to-br from-green-50 via-white to-orange-50 py-20 overflow-hidden">
				{/* Construction Pattern Background */}
				<div className="absolute inset-0 opacity-5">
					<div className="absolute top-10 left-10 transform rotate-12">
						<Hammer className="h-20 w-20 text-gray-400" />
					</div>
					<div className="absolute top-32 right-20 transform -rotate-12">
						<Wrench className="h-16 w-16 text-gray-400" />
					</div>
					<div className="absolute bottom-20 left-32 transform rotate-45">
						<HardHat className="h-24 w-24 text-gray-400" />
					</div>
					<div className="absolute bottom-32 right-10 transform -rotate-45">
						<Truck className="h-18 w-18 text-gray-400" />
					</div>
				</div>

				<div className="container mx-auto px-4 relative">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<div className="space-y-6">
								<Badge className="bg-green-100 text-green-800 hover:bg-green-100 px-4 py-2">
									<HardHat className="h-4 w-4 mr-2" />
									Licensed & Insured Construction Company
								</Badge>
								<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
									Building <span className="text-green-600">Excellence</span> in
									Brugge
								</h1>
								<p className="text-xl text-gray-600 leading-relaxed">
									From reinforced concrete foundations to premium finishes, EA
									Construction Solutions delivers comprehensive building services
									with unmatched quality, precision, and reliability across
									Belgium.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<Button
									size="lg"
									className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
								>
									<Calendar className="h-5 w-5 mr-2" />
									Get Free Estimate
								</Button>
								<Button
									variant="outline"
									size="lg"
									className="text-lg px-8 py-4 border-2"
								>
									<ArrowRight className="h-5 w-5 mr-2" />
									View Our Projects
								</Button>
							</div>

							{/* Stats */}
							<div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
								<div className="text-center">
									<div className="text-3xl font-bold text-green-600">15+</div>
									<div className="text-sm text-gray-600 font-medium">
										Years Experience
									</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-green-600">500+</div>
									<div className="text-sm text-gray-600 font-medium">
										Projects Completed
									</div>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-green-600">100%</div>
									<div className="text-sm text-gray-600 font-medium">
										Client Satisfaction
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="relative z-10">
								<Image
									src="/placeholder.svg?height=700&width=600"
									alt="Modern construction site in Brugge with EA Construction team"
									width={600}
									height={700}
									className="rounded-2xl shadow-2xl"
								/>

								{/* Floating Cards */}
								<div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
									<div className="flex items-center space-x-4">
										<div className="bg-green-100 p-3 rounded-full">
											<CheckCircle className="h-8 w-8 text-green-600" />
										</div>
										<div>
											<div className="font-bold text-gray-900">
												Quality Guaranteed
											</div>
											<div className="text-sm text-gray-600">
												Licensed & Fully Insured
											</div>
										</div>
									</div>
								</div>

								<div className="absolute -top-8 -right-8 bg-orange-500 text-white p-6 rounded-xl shadow-xl">
									<div className="text-center">
										<div className="text-2xl font-bold">24/7</div>
										<div className="text-sm">Emergency Service</div>
									</div>
								</div>
							</div>

							{/* Background Elements */}
							<div className="absolute -top-4 -right-4 w-72 h-72 bg-green-100 rounded-full opacity-20 -z-10"></div>
							<div className="absolute -bottom-8 -left-8 w-64 h-64 bg-orange-100 rounded-full opacity-20 -z-10"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Preview */}
			<section className="py-20 bg-gray-50 relative">
				{/* Construction Grid Pattern */}
				<div
					className="absolute inset-0 opacity-5"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				></div>

				<div className="container mx-auto px-4 relative">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">
							<Hammer className="h-4 w-4 mr-2" />
							Our Expertise
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							Complete Construction Solutions
						</h2>
						<p className="text-xl text-gray-600">
							From foundation to finish, we provide comprehensive building services
							with expert craftsmanship and modern techniques.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Service Cards */}
						<Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white relative overflow-hidden">
							<div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-bl-full opacity-50"></div>
							<CardContent className="p-8 relative">
								<div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
									<Building2 className="h-8 w-8 text-green-600 group-hover:text-white transition-colors" />
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Reinforced Concrete
								</h3>
								<p className="text-gray-600 mb-4">
									Expert fabrication and installation of reinforcement, foundation
									work, and structural concrete elements.
								</p>
								<Link
									href="/services"
									className="text-green-600 font-semibold flex items-center hover:text-green-700"
								>
									Learn More <ArrowRight className="h-4 w-4 ml-2" />
								</Link>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white relative overflow-hidden">
							<div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-bl-full opacity-50"></div>
							<CardContent className="p-8 relative">
								<div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
									<Hammer className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors" />
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Masonry Works
								</h3>
								<p className="text-gray-600 mb-4">
									Professional brick construction, facing work, and specialized
									masonry for residential and commercial projects.
								</p>
								<Link
									href="/services"
									className="text-green-600 font-semibold flex items-center hover:text-green-700"
								>
									Learn More <ArrowRight className="h-4 w-4 ml-2" />
								</Link>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white relative overflow-hidden">
							<div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-bl-full opacity-50"></div>
							<CardContent className="p-8 relative">
								<div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
									<Shield className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									Insulation Systems
								</h3>
								<p className="text-gray-600 mb-4">
									Advanced thermal and sound insulation solutions for walls,
									ceilings, floors, and roofing systems.
								</p>
								<Link
									href="/services"
									className="text-green-600 font-semibold flex items-center hover:text-green-700"
								>
									Learn More <ArrowRight className="h-4 w-4 ml-2" />
								</Link>
							</CardContent>
						</Card>
					</div>

					<div className="text-center mt-12">
						<Link href="/services">
							<Button
								size="lg"
								variant="outline"
								className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
							>
								View All Services
								<ArrowRight className="h-5 w-5 ml-2" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Why Choose Us */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
								<Award className="h-4 w-4 mr-2" />
								Why Choose EA Construction
							</Badge>
							<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
								Your Trusted Construction Partner in Brugge
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								With over 15 years of experience in the Belgian construction
								industry, we combine traditional craftsmanship with modern building
								techniques to deliver exceptional results.
							</p>

							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="bg-green-100 p-2 rounded-lg">
										<Users className="h-6 w-6 text-green-600" />
									</div>
									<div>
										<h4 className="font-bold text-gray-900 mb-2">
											Expert Craftsmen
										</h4>
										<p className="text-gray-600">
											Our skilled team of certified professionals brings
											decades of combined experience to every project.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="bg-orange-100 p-2 rounded-lg">
										<Award className="h-6 w-6 text-orange-500" />
									</div>
									<div>
										<h4 className="font-bold text-gray-900 mb-2">
											Quality Materials
										</h4>
										<p className="text-gray-600">
											We source only premium materials from trusted suppliers
											to ensure lasting durability and performance.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="bg-blue-100 p-2 rounded-lg">
										<Clock className="h-6 w-6 text-blue-600" />
									</div>
									<div>
										<h4 className="font-bold text-gray-900 mb-2">
											On-Time Delivery
										</h4>
										<p className="text-gray-600">
											We respect your timeline and budget, delivering projects
											on schedule without compromising quality.
										</p>
									</div>
								</div>
							</div>

							<div className="mt-8">
								<Link href="/about">
									<Button size="lg" className="bg-green-600 hover:bg-green-700">
										Learn More About Us
										<ArrowRight className="h-5 w-5 ml-2" />
									</Button>
								</Link>
							</div>
						</div>

						<div className="relative">
							<Image
								src="/placeholder.svg?height=600&width=500"
								alt="EA Construction team working on a project in Brugge"
								width={500}
								height={600}
								className="rounded-2xl shadow-2xl"
							/>

							{/* Floating Elements */}
							<div className="absolute -top-6 -left-6 bg-green-600 text-white p-4 rounded-xl shadow-lg">
								<div className="text-center">
									<HardHat className="h-8 w-8 mx-auto mb-2" />
									<div className="text-sm font-semibold">Safety First</div>
								</div>
							</div>

							<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border">
								<div className="flex items-center space-x-3">
									<div className="bg-orange-100 p-2 rounded-full">
										<Truck className="h-6 w-6 text-orange-500" />
									</div>
									<div>
										<div className="font-bold text-gray-900">
											Modern Equipment
										</div>
										<div className="text-sm text-gray-600">
											Latest Construction Technology
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Recent Projects Preview */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
							<Building2 className="h-4 w-4 mr-2" />
							Our Portfolio
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							Recent Construction Projects
						</h2>
						<p className="text-xl text-gray-600">
							Explore our latest completed projects across Brugge and surrounding
							areas.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
							<div className="relative overflow-hidden">
								<Image
									src="/placeholder.svg?height=300&width=400"
									alt="Modern residential complex in Brugge"
									width={400}
									height={300}
									className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<Badge className="bg-green-600 text-white">Residential</Badge>
								</div>
							</div>
							<CardContent className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-2">
									Modern Residential Complex
								</h3>
								<p className="text-gray-600 mb-4">
									Complete construction including reinforced concrete, masonry,
									and premium finishing works.
								</p>
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-2 text-sm text-gray-500">
										<MapPin className="h-4 w-4" />
										<span>Brugge Center</span>
									</div>
									<Link
										href="/projects"
										className="text-green-600 font-semibold hover:text-green-700"
									>
										View Details
									</Link>
								</div>
							</CardContent>
						</Card>

						<Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
							<div className="relative overflow-hidden">
								<Image
									src="/placeholder.svg?height=300&width=400"
									alt="Commercial office building renovation"
									width={400}
									height={300}
									className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<Badge className="bg-orange-500 text-white">Commercial</Badge>
								</div>
							</div>
							<CardContent className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-2">
									Office Building Renovation
								</h3>
								<p className="text-gray-600 mb-4">
									Full renovation including insulation, tiling, and modern
									finishing touches.
								</p>
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-2 text-sm text-gray-500">
										<MapPin className="h-4 w-4" />
										<span>Business District</span>
									</div>
									<Link
										href="/projects"
										className="text-green-600 font-semibold hover:text-green-700"
									>
										View Details
									</Link>
								</div>
							</CardContent>
						</Card>

						<Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
							<div className="relative overflow-hidden">
								<Image
									src="/placeholder.svg?height=300&width=400"
									alt="Luxury villa construction project"
									width={400}
									height={300}
									className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
									<Badge className="bg-blue-600 text-white">Luxury</Badge>
								</div>
							</div>
							<CardContent className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-2">
									Luxury Private Villa
								</h3>
								<p className="text-gray-600 mb-4">
									High-end construction with premium materials and custom
									architectural finishes.
								</p>
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-2 text-sm text-gray-500">
										<MapPin className="h-4 w-4" />
										<span>Brugge Suburbs</span>
									</div>
									<Link
										href="/projects"
										className="text-green-600 font-semibold hover:text-green-700"
									>
										View Details
									</Link>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="text-center mt-12">
						<Link href="/projects">
							<Button
								size="lg"
								variant="outline"
								className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
							>
								View All Projects
								<ArrowRight className="h-5 w-5 ml-2" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
				{/* Construction Pattern Overlay */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-10 left-10 transform rotate-12">
						<Hammer className="h-32 w-32 text-white" />
					</div>
					<div className="absolute bottom-10 right-10 transform -rotate-12">
						<HardHat className="h-28 w-28 text-white" />
					</div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45">
						<Wrench className="h-40 w-40 text-white" />
					</div>
				</div>

				<div className="container mx-auto px-4 relative">
					<div className="max-w-4xl mx-auto text-center text-white">
						<h2 className="text-4xl lg:text-6xl font-bold mb-6">
							Ready to Start Your Construction Project?
						</h2>
						<p className="text-xl lg:text-2xl mb-8 opacity-90">
							Get a free consultation and detailed quote for your building project.
							Our experts are ready to bring your vision to life.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact">
								<Button
									size="lg"
									variant="secondary"
									className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4"
								>
									<Calendar className="h-5 w-5 mr-2" />
									Schedule Consultation
								</Button>
							</Link>
							<Button
								size="lg"
								variant="outline"
								className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4"
							>
								<Phone className="h-5 w-5 mr-2" />
								Call Now: +32 50 123 456
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			

			{/* Floating WhatsApp Button */}
			<div className="fixed bottom-6 right-6 z-50">
				<Button
					size="lg"
					className="bg-green-500 hover:bg-green-600 rounded-full w-16 h-16 shadow-2xl"
				>
					<MessageCircle className="h-7 w-7" />
				</Button>
			</div>
		</div>
	);
}
