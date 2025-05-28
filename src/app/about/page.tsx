import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Building2,
	HardHat,
	Users,
	Award,
	CheckCircle,
	Calendar,
	Target,
	Heart,
	Shield,
	Lightbulb,
	Phone,
	Mail,
	MessageCircle,
	ArrowRight,
	Star,
	Hammer,
	Wrench,
	Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
				</div>

				<div className="container mx-auto px-4 relative">
					<div className="max-w-4xl mx-auto text-center">
						<Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-6">
							<Building2 className="h-4 w-4 mr-2" />
							About EA Construction Solutions
						</Badge>
						<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
							Building <span className="text-green-600">Trust</span> Since 2008
						</h1>
						<p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
							For over 15 years, EA Construction Solutions has been Brugge's premier
							construction company, delivering exceptional building services with
							unwavering commitment to quality, safety, and client satisfaction.
						</p>
					</div>
				</div>
			</section>

			{/* Our Story */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">
								<Calendar className="h-4 w-4 mr-2" />
								Our Story
							</Badge>
							<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
								From Vision to Reality
							</h2>
							<div className="space-y-6 text-lg text-gray-600 leading-relaxed">
								<p>
									Founded in 2008 by experienced construction professionals, EA
									Construction Solutions began with a simple mission: to provide
									Brugge and surrounding communities with reliable, high-quality
									construction services that exceed expectations.
								</p>
								<p>
									What started as a small team of dedicated craftsmen has grown
									into one of Belgium's most trusted construction companies,
									completing over 500 projects ranging from residential homes to
									large commercial developments.
								</p>
								<p>
									Our success is built on three fundamental principles:
									exceptional craftsmanship, transparent communication, and an
									unwavering commitment to delivering projects on time and within
									budget.
								</p>
							</div>

							<div className="mt-8 grid grid-cols-2 gap-6">
								<div className="text-center p-4 bg-green-50 rounded-xl">
									<div className="text-3xl font-bold text-green-600">2008</div>
									<div className="text-sm text-gray-600 font-medium">
										Company Founded
									</div>
								</div>
								<div className="text-center p-4 bg-orange-50 rounded-xl">
									<div className="text-3xl font-bold text-orange-500">500+</div>
									<div className="text-sm text-gray-600 font-medium">
										Projects Completed
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<Image
								src="/placeholder.svg?height=600&width=500"
								alt="EA Construction team at work - building excellence since 2008"
								width={500}
								height={600}
								className="rounded-2xl shadow-2xl"
							/>

							{/* Floating Achievement Card */}
							<div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
								<div className="flex items-center space-x-3">
									<div className="bg-green-100 p-3 rounded-full">
										<Award className="h-8 w-8 text-green-600" />
									</div>
									<div>
										<div className="font-bold text-gray-900">15+ Years</div>
										<div className="text-sm text-gray-600">
											Industry Excellence
										</div>
									</div>
								</div>
							</div>

							{/* Floating Safety Card */}
							<div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-xl">
								<div className="text-center">
									<HardHat className="h-8 w-8 mx-auto mb-2" />
									<div className="font-bold">Zero Accidents</div>
									<div className="text-sm opacity-90">Safety Record 2023</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Company Timeline */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
							<Calendar className="h-4 w-4 mr-2" />
							Our Journey
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							15 Years of Growth & Excellence
						</h2>
						<p className="text-xl text-gray-600">
							From humble beginnings to becoming Brugge's premier construction
							company, here's our story of growth and achievement.
						</p>
					</div>

					<div className="max-w-4xl mx-auto">
						<div className="relative">
							{/* Timeline Line */}
							<div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>

							{/* Timeline Items */}
							<div className="space-y-12">
								<div className="flex items-center">
									<div className="w-1/2 pr-8 text-right">
										<Card className="p-6 shadow-lg border-0">
											<div className="text-2xl font-bold text-green-600 mb-2">
												2008
											</div>
											<h3 className="text-xl font-bold text-gray-900 mb-2">
												Company Founded
											</h3>
											<p className="text-gray-600">
												Erik Andersen establishes EA Construction Solutions
												with a team of 5 skilled craftsmen, focusing on
												residential projects in Brugge.
											</p>
										</Card>
									</div>
									<div className="w-8 h-8 bg-green-600 rounded-full border-4 border-white shadow-lg z-10"></div>
									<div className="w-1/2 pl-8"></div>
								</div>

								<div className="flex items-center">
									<div className="w-1/2 pr-8"></div>
									<div className="w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
									<div className="w-1/2 pl-8">
										<Card className="p-6 shadow-lg border-0">
											<div className="text-2xl font-bold text-orange-500 mb-2">
												2012
											</div>
											<h3 className="text-xl font-bold text-gray-900 mb-2">
												First Major Commercial Project
											</h3>
											<p className="text-gray-600">
												Completed our first large-scale commercial
												renovation in Brugge's business district,
												establishing our reputation for quality commercial
												work.
											</p>
										</Card>
									</div>
								</div>

								<div className="flex items-center">
									<div className="w-1/2 pr-8 text-right">
										<Card className="p-6 shadow-lg border-0">
											<div className="text-2xl font-bold text-blue-600 mb-2">
												2015
											</div>
											<h3 className="text-xl font-bold text-gray-900 mb-2">
												ISO Certification
											</h3>
											<p className="text-gray-600">
												Achieved ISO 9001 certification for quality
												management systems, demonstrating our commitment to
												excellence and standardized processes.
											</p>
										</Card>
									</div>
									<div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
									<div className="w-1/2 pl-8"></div>
								</div>

								<div className="flex items-center">
									<div className="w-1/2 pr-8"></div>
									<div className="w-8 h-8 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
									<div className="w-1/2 pl-8">
										<Card className="p-6 shadow-lg border-0">
											<div className="text-2xl font-bold text-purple-600 mb-2">
												2018
											</div>
											<h3 className="text-xl font-bold text-gray-900 mb-2">
												Team Expansion
											</h3>
											<p className="text-gray-600">
												Grew to 25+ team members and opened our modern
												equipment facility, enabling us to take on larger
												and more complex projects.
											</p>
										</Card>
									</div>
								</div>

								<div className="flex items-center">
									<div className="w-1/2 pr-8 text-right">
										<Card className="p-6 shadow-lg border-0">
											<div className="text-2xl font-bold text-yellow-500 mb-2">
												2021
											</div>
											<h3 className="text-xl font-bold text-gray-900 mb-2">
												Sustainability Initiative
											</h3>
											<p className="text-gray-600">
												Launched our green building program, incorporating
												sustainable materials and energy-efficient
												construction methods in all projects.
											</p>
										</Card>
									</div>
									<div className="w-8 h-8 bg-yellow-500 rounded-full border-4 border-white shadow-lg z-10"></div>
									<div className="w-1/2 pl-8"></div>
								</div>

								<div className="flex items-center">
									<div className="w-1/2 pr-8"></div>
									<div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg z-10"></div>
									<div className="w-1/2 pl-8">
										<Card className="p-6 shadow-lg border-0">
											<div className="text-2xl font-bold text-red-500 mb-2">
												2023
											</div>
											<h3 className="text-xl font-bold text-gray-900 mb-2">
												Industry Recognition
											</h3>
											<p className="text-gray-600">
												Awarded "Best Construction Company in West Flanders"
												and completed our 500th project, cementing our
												position as regional leaders.
											</p>
										</Card>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Values */}
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
						<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
							<Heart className="h-4 w-4 mr-2" />
							Our Core Values
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							What Drives Us Every Day
						</h2>
						<p className="text-xl text-gray-600">
							Our values are the foundation of everything we do, guiding our decisions
							and shaping our relationships with clients and communities.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<Card className="text-center p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
							<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Award className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
							<p className="text-gray-600">
								We strive for perfection in every project, using the finest
								materials and most skilled craftsmen to deliver superior results.
							</p>
						</Card>

						<Card className="text-center p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
							<div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Shield className="h-8 w-8 text-orange-500" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
							<p className="text-gray-600">
								Honest communication, transparent pricing, and ethical business
								practices form the cornerstone of our relationships.
							</p>
						</Card>

						<Card className="text-center p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
							<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Lightbulb className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
							<p className="text-gray-600">
								We embrace modern construction techniques and sustainable building
								practices to create better, more efficient structures.
							</p>
						</Card>

						<Card className="text-center p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
							<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Users className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Partnership</h3>
							<p className="text-gray-600">
								We work closely with our clients as partners, ensuring their vision
								becomes reality through collaborative effort.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Safety & Quality Standards */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-red-100 text-red-800 hover:bg-red-100 mb-4">
							<HardHat className="h-4 w-4 mr-2" />
							Safety & Quality Standards
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							Uncompromising Safety & Quality
						</h2>
						<p className="text-xl text-gray-600">
							Our commitment to safety and quality is reflected in our zero-accident
							record and industry-leading standards.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
						<div>
							<h3 className="text-3xl font-bold text-gray-900 mb-6">
								Safety First Approach
							</h3>
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="bg-red-100 p-3 rounded-lg">
										<HardHat className="h-6 w-6 text-red-600" />
									</div>
									<div>
										<h4 className="font-bold text-gray-900 mb-2">
											Zero Accident Policy
										</h4>
										<p className="text-gray-600">
											Maintained a perfect safety record for 3 consecutive
											years through rigorous training and safety protocols.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="bg-orange-100 p-3 rounded-lg">
										<Shield className="h-6 w-6 text-orange-500" />
									</div>
									<div>
										<h4 className="font-bold text-gray-900 mb-2">
											OHSAS 18001 Certified
										</h4>
										<p className="text-gray-600">
											Internationally recognized occupational health and
											safety management system certification.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="bg-blue-100 p-3 rounded-lg">
										<Users className="h-6 w-6 text-blue-600" />
									</div>
									<div>
										<h4 className="font-bold text-gray-900 mb-2">
											Regular Safety Training
										</h4>
										<p className="text-gray-600">
											Monthly safety workshops and annual certification
											updates for all team members.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-3xl font-bold text-gray-900 mb-6">
								Quality Assurance
							</h3>
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="bg-green-100 p-3 rounded-lg">
										<CheckCircle className="h-6 w-6 text-green-600" />
									</div>
									<div>
										<h4 className="font-bold text-gray-900 mb-2">
											Multi-Point Inspections
										</h4>
										<p className="text-gray-600">
											Every project undergoes rigorous quality checks at
											multiple stages of construction.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="bg-purple-100 p-3 rounded-lg">
										<Award className="h-6 w-6 text-purple-600" />
									</div>
									<div>
										<h4 className="font-bold text-gray-900 mb-2">
											Premium Materials Only
										</h4>
										<p className="text-gray-600">
											We source materials exclusively from certified suppliers
											with proven track records.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="bg-yellow-100 p-3 rounded-lg">
										<Clock className="h-6 w-6 text-yellow-500" />
									</div>
									<div>
										<h4 className="font-bold text-gray-900 mb-2">
											5-Year Warranty
										</h4>
										<p className="text-gray-600">
											Comprehensive warranty coverage on all structural work
											and major installations.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Safety Statistics */}
					<div className="bg-gray-50 rounded-2xl p-8">
						<div className="grid md:grid-cols-4 gap-8 text-center">
							<div>
								<div className="text-4xl font-bold text-red-600 mb-2">0</div>
								<div className="text-gray-600 font-medium">
									Workplace Accidents (2021-2024)
								</div>
							</div>
							<div>
								<div className="text-4xl font-bold text-green-600 mb-2">100%</div>
								<div className="text-gray-600 font-medium">
									Safety Compliance Rate
								</div>
							</div>
							<div>
								<div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
								<div className="text-gray-600 font-medium">
									Safety Training Hours/Year
								</div>
							</div>
							<div>
								<div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
								<div className="text-gray-600 font-medium">Emergency Response</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Team */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
							<Users className="h-4 w-4 mr-2" />
							Meet Our Team
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							Expert Craftsmen & Professionals
						</h2>
						<p className="text-xl text-gray-600">
							Our diverse team of skilled professionals brings decades of combined
							experience to every construction project.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 mb-16">
						<Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
							<CardContent className="p-8">
								<div className="relative mb-6">
									<Image
										src="/placeholder.svg?height=150&width=150"
										alt="Erik Andersen - Founder & CEO"
										width={150}
										height={150}
										className="rounded-full mx-auto shadow-lg"
									/>
									<div className="absolute -bottom-2 -right-2 bg-green-600 text-white p-2 rounded-full">
										<Building2 className="h-4 w-4" />
									</div>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-2">
									Erik Andersen
								</h3>
								<p className="text-green-600 font-semibold mb-3">Founder & CEO</p>
								<p className="text-gray-600 text-sm">
									With 20+ years in construction, Erik leads our team with
									expertise in project management and client relations.
								</p>
							</CardContent>
						</Card>

						<Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
							<CardContent className="p-8">
								<div className="relative mb-6">
									<Image
										src="/placeholder.svg?height=150&width=150"
										alt="Anna Vermeulen - Head of Operations"
										width={150}
										height={150}
										className="rounded-full mx-auto shadow-lg"
									/>
									<div className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-2 rounded-full">
										<HardHat className="h-4 w-4" />
									</div>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-2">
									Anna Vermeulen
								</h3>
								<p className="text-orange-500 font-semibold mb-3">
									Head of Operations
								</p>
								<p className="text-gray-600 text-sm">
									Anna ensures every project runs smoothly, coordinating teams and
									maintaining our high quality standards.
								</p>
							</CardContent>
						</Card>

						<Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
							<CardContent className="p-8">
								<div className="relative mb-6">
									<Image
										src="/placeholder.svg?height=150&width=150"
										alt="Marc De Bruyne - Master Craftsman"
										width={150}
										height={150}
										className="rounded-full mx-auto shadow-lg"
									/>
									<div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
										<Hammer className="h-4 w-4" />
									</div>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-2">
									Marc De Bruyne
								</h3>
								<p className="text-blue-600 font-semibold mb-3">Master Craftsman</p>
								<p className="text-gray-600 text-sm">
									Marc brings traditional craftsmanship expertise with 25+ years
									of experience in masonry and concrete work.
								</p>
							</CardContent>
						</Card>
					</div>

					{/* Team Stats */}
					<div className="bg-gray-50 rounded-2xl p-8">
						<div className="grid md:grid-cols-4 gap-8 text-center">
							<div>
								<div className="text-3xl font-bold text-green-600 mb-2">25+</div>
								<div className="text-gray-600 font-medium">Team Members</div>
							</div>
							<div>
								<div className="text-3xl font-bold text-orange-500 mb-2">150+</div>
								<div className="text-gray-600 font-medium">
									Years Combined Experience
								</div>
							</div>
							<div>
								<div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
								<div className="text-gray-600 font-medium">
									Certified Professionals
								</div>
							</div>
							<div>
								<div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
								<div className="text-gray-600 font-medium">Support Available</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Certifications & Awards */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 mb-4">
							<Award className="h-4 w-4 mr-2" />
							Certifications & Recognition
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							Industry Recognition & Compliance
						</h2>
						<p className="text-xl text-gray-600">
							Our commitment to excellence is recognized through industry
							certifications and client testimonials.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<Card className="text-center p-6 border-0 shadow-lg bg-white">
							<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Shield className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="font-bold text-gray-900 mb-2">ISO 9001 Certified</h3>
							<p className="text-sm text-gray-600">Quality Management System</p>
						</Card>

						<Card className="text-center p-6 border-0 shadow-lg bg-white">
							<div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<HardHat className="h-8 w-8 text-orange-500" />
							</div>
							<h3 className="font-bold text-gray-900 mb-2">Safety Certified</h3>
							<p className="text-sm text-gray-600">OHSAS 18001 Compliance</p>
						</Card>

						<Card className="text-center p-6 border-0 shadow-lg bg-white">
							<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Award className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="font-bold text-gray-900 mb-2">Industry Awards</h3>
							<p className="text-sm text-gray-600">Best Construction Company 2023</p>
						</Card>

						<Card className="text-center p-6 border-0 shadow-lg bg-white">
							<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<CheckCircle className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="font-bold text-gray-900 mb-2">Fully Licensed</h3>
							<p className="text-sm text-gray-600">Belgian Construction License</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Client Testimonials */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
							<Star className="h-4 w-4 mr-2" />
							Client Testimonials
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							What Our Clients Say
						</h2>
						<p className="text-xl text-gray-600">
							Don't just take our word for it - hear from satisfied clients across
							Brugge and Belgium.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="border-0 shadow-lg p-8">
							<div className="flex items-center space-x-1 mb-6">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="h-5 w-5 fill-yellow-400 text-yellow-400"
									/>
								))}
							</div>
							<p className="text-gray-600 mb-6 italic">
								"EA Construction transformed our vision into reality. Their
								attention to detail and professional approach made our home
								renovation project seamless and stress-free."
							</p>
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
									<span className="text-green-600 font-bold">MV</span>
								</div>
								<div>
									<div className="font-bold text-gray-900">
										Marie Vandenberghe
									</div>
									<div className="text-sm text-gray-600">
										Homeowner, Brugge Center
									</div>
								</div>
							</div>
						</Card>

						<Card className="border-0 shadow-lg p-8">
							<div className="flex items-center space-x-1 mb-6">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="h-5 w-5 fill-yellow-400 text-yellow-400"
									/>
								))}
							</div>
							<p className="text-gray-600 mb-6 italic">
								"Outstanding craftsmanship and project management. They delivered
								our commercial building renovation on time and within budget. Highly
								recommended!"
							</p>
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
									<span className="text-orange-500 font-bold">PD</span>
								</div>
								<div>
									<div className="font-bold text-gray-900">Pieter De Smet</div>
									<div className="text-sm text-gray-600">
										Business Owner, Brugge
									</div>
								</div>
							</div>
						</Card>

						<Card className="border-0 shadow-lg p-8">
							<div className="flex items-center space-x-1 mb-6">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="h-5 w-5 fill-yellow-400 text-yellow-400"
									/>
								))}
							</div>
							<p className="text-gray-600 mb-6 italic">
								"From foundation to finish, EA Construction exceeded our
								expectations. Their team's expertise and dedication to quality is
								unmatched in the region."
							</p>
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
									<span className="text-blue-600 font-bold">AJ</span>
								</div>
								<div>
									<div className="font-bold text-gray-900">Anna Janssens</div>
									<div className="text-sm text-gray-600">Property Developer</div>
								</div>
							</div>
						</Card>
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
							Ready to Work with Brugge's Best?
						</h2>
						<p className="text-xl lg:text-2xl mb-8 opacity-90">
							Join hundreds of satisfied clients who trust EA Construction Solutions
							for their building projects. Let's discuss how we can bring your vision
							to life.
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
							<Link href="/projects">
								<Button
									size="lg"
									variant="outline"
									className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4"
								>
									<ArrowRight className="h-5 w-5 mr-2" />
									View Our Projects
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>

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
