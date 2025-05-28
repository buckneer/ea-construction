import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Building2,
	Hammer,
	Shield,
	Palette,
	Home,
	Wrench,
	Phone,
	Mail,
	MessageCircle,
	CheckCircle,
	ArrowRight,
	HardHat,
	Truck,
	Calendar,
	Clock,
	Star,
	Target,
	Zap,
	Settings,
	Lightbulb,
	Heart,
	MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
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
					<div className="max-w-4xl mx-auto text-center">
						<Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-6">
							<Hammer className="h-4 w-4 mr-2" />
							Our Construction Services
						</Badge>
						<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
							Complete <span className="text-green-600">Building</span> Solutions
						</h1>
						<p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
							From reinforced concrete foundations to premium finishes, EA
							Construction Solutions provides comprehensive construction services with
							expert craftsmanship and modern techniques.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact">
								<Button
									size="lg"
									className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
								>
									<Calendar className="h-5 w-5 mr-2" />
									Get Free Quote
								</Button>
							</Link>
							<Button
								variant="outline"
								size="lg"
								className="text-lg px-8 py-4 border-2"
							>
								<Phone className="h-5 w-5 mr-2" />
								Call: +32 50 123 456
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Services Overview */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">
							<Building2 className="h-4 w-4 mr-2" />
							Service Categories
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							Six Core Construction Specialties
						</h2>
						<p className="text-xl text-gray-600">
							Our comprehensive range of construction services covers every aspect of
							building, from structural work to final finishing touches.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Reinforced Concrete Works */}
						<Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white relative overflow-hidden">
							<div className="absolute top-0 right-0 w-20 h-20 bg-green-100 rounded-bl-full opacity-50"></div>
							<CardContent className="p-8 relative">
								<div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
									<Building2 className="h-8 w-8 text-green-600 group-hover:text-white transition-colors" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Reinforced Concrete Works
								</h3>
								<p className="text-gray-600 mb-6">
									Expert structural concrete solutions for foundations, slabs,
									columns, and specialized reinforcement systems.
								</p>
								<ul className="space-y-3 mb-6">
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-green-600" />
										<span className="text-gray-700">
											Fabrication & installation of reinforcement
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-green-600" />
										<span className="text-gray-700">Foundation concreting</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-green-600" />
										<span className="text-gray-700">
											Reinforced concrete slabs & columns
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-green-600" />
										<span className="text-gray-700">
											Walls, lintels & tie beams
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-green-600" />
										<span className="text-gray-700">
											Cornices & architectural elements
										</span>
									</li>
								</ul>
								<Link
									href="/contact"
									className="text-green-600 font-semibold flex items-center hover:text-green-700"
								>
									Get Quote <ArrowRight className="h-4 w-4 ml-2" />
								</Link>
							</CardContent>
						</Card>

						{/* Masonry Works */}
						<Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white relative overflow-hidden">
							<div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-bl-full opacity-50"></div>
							<CardContent className="p-8 relative">
								<div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
									<Hammer className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Masonry Works
								</h3>
								<p className="text-gray-600 mb-6">
									Professional brick construction and masonry services for
									residential and commercial projects.
								</p>
								<ul className="space-y-3 mb-6">
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-orange-500" />
										<span className="text-gray-700">
											Solid & block brick wall construction
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-orange-500" />
										<span className="text-gray-700">
											Partition & load-bearing walls
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-orange-500" />
										<span className="text-gray-700">
											Facing bricks & aerated concrete (Ytong)
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-orange-500" />
										<span className="text-gray-700">
											Chimneys & ventilation shafts
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-orange-500" />
										<span className="text-gray-700">
											Internal & external cement screed
										</span>
									</li>
								</ul>
								<Link
									href="/contact"
									className="text-green-600 font-semibold flex items-center hover:text-green-700"
								>
									Get Quote <ArrowRight className="h-4 w-4 ml-2" />
								</Link>
							</CardContent>
						</Card>

						{/* Insulation Works */}
						<Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white relative overflow-hidden">
							<div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-bl-full opacity-50"></div>
							<CardContent className="p-8 relative">
								<div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
									<Shield className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Insulation Works
								</h3>
								<p className="text-gray-600 mb-6">
									Advanced thermal and sound insulation solutions for
									energy-efficient and comfortable buildings.
								</p>
								<ul className="space-y-3 mb-6">
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-blue-600" />
										<span className="text-gray-700">
											Thermal insulation (walls, ceilings, floors)
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-blue-600" />
										<span className="text-gray-700">
											Sound insulation systems
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-blue-600" />
										<span className="text-gray-700">
											Roof insulation solutions
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-blue-600" />
										<span className="text-gray-700">
											Energy efficiency optimization
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-blue-600" />
										<span className="text-gray-700">
											Moisture barrier installation
										</span>
									</li>
								</ul>
								<Link
									href="/contact"
									className="text-green-600 font-semibold flex items-center hover:text-green-700"
								>
									Get Quote <ArrowRight className="h-4 w-4 ml-2" />
								</Link>
							</CardContent>
						</Card>

						{/* Tiling Works */}
						<Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white relative overflow-hidden">
							<div className="absolute top-0 right-0 w-20 h-20 bg-purple-100 rounded-bl-full opacity-50"></div>
							<CardContent className="p-8 relative">
								<div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
									<Palette className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Tiling Works
								</h3>
								<p className="text-gray-600 mb-6">
									Professional tiling services and bathroom installations with
									precision and attention to detail.
								</p>
								<ul className="space-y-3 mb-6">
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-purple-600" />
										<span className="text-gray-700">Floor & wall tiling</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-purple-600" />
										<span className="text-gray-700">
											Bathroom fittings & installations
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-purple-600" />
										<span className="text-gray-700">
											Main sanitary installations
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-purple-600" />
										<span className="text-gray-700">
											Custom tile designs & patterns
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-purple-600" />
										<span className="text-gray-700">
											Waterproofing & sealing
										</span>
									</li>
								</ul>
								<Link
									href="/contact"
									className="text-green-600 font-semibold flex items-center hover:text-green-700"
								>
									Get Quote <ArrowRight className="h-4 w-4 ml-2" />
								</Link>
							</CardContent>
						</Card>

						{/* Flooring Works */}
						<Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white relative overflow-hidden">
							<div className="absolute top-0 right-0 w-20 h-20 bg-yellow-100 rounded-bl-full opacity-50"></div>
							<CardContent className="p-8 relative">
								<div className="bg-yellow-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors">
									<Home className="h-8 w-8 text-yellow-500 group-hover:text-white transition-colors" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Flooring Works
								</h3>
								<p className="text-gray-600 mb-6">
									Expert installation of premium flooring materials with
									professional finishing and long-lasting results.
								</p>
								<ul className="space-y-3 mb-6">
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-yellow-500" />
										<span className="text-gray-700">
											Parquet installation & refinishing
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-yellow-500" />
										<span className="text-gray-700">
											Laminate flooring systems
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-yellow-500" />
										<span className="text-gray-700">
											Floor preparation & leveling
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-yellow-500" />
										<span className="text-gray-700">
											Underfloor heating compatibility
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-yellow-500" />
										<span className="text-gray-700">
											Professional finishing & trim work
										</span>
									</li>
								</ul>
								<Link
									href="/contact"
									className="text-green-600 font-semibold flex items-center hover:text-green-700"
								>
									Get Quote <ArrowRight className="h-4 w-4 ml-2" />
								</Link>
							</CardContent>
						</Card>

						{/* Final Construction Works */}
						<Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white relative overflow-hidden">
							<div className="absolute top-0 right-0 w-20 h-20 bg-red-100 rounded-bl-full opacity-50"></div>
							<CardContent className="p-8 relative">
								<div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors">
									<Wrench className="h-8 w-8 text-red-500 group-hover:text-white transition-colors" />
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Final Construction Works
								</h3>
								<p className="text-gray-600 mb-6">
									Complete finishing services to transform your construction
									project into a beautiful, functional space.
								</p>
								<ul className="space-y-3 mb-6">
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-red-500" />
										<span className="text-gray-700">
											Suspended ceilings & grid systems
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-red-500" />
										<span className="text-gray-700">
											Drywall & gypsum installations
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-red-500" />
										<span className="text-gray-700">
											Painting & decoration services
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-red-500" />
										<span className="text-gray-700">
											Trim work & molding installation
										</span>
									</li>
									<li className="flex items-center space-x-3">
										<CheckCircle className="h-5 w-5 text-red-500" />
										<span className="text-gray-700">
											Final cleanup & project handover
										</span>
									</li>
								</ul>
								<Link
									href="/contact"
									className="text-green-600 font-semibold flex items-center hover:text-green-700"
								>
									Get Quote <ArrowRight className="h-4 w-4 ml-2" />
								</Link>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Specialized Services */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4">
							<Target className="h-4 w-4 mr-2" />
							Specialized Services
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							Additional Construction Expertise
						</h2>
						<p className="text-xl text-gray-600">
							Beyond our core services, we offer specialized construction solutions
							for unique project requirements.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
							<div className="bg-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
								<Zap className="h-8 w-8 text-indigo-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Emergency Repairs
							</h3>
							<p className="text-gray-600 mb-4">
								24/7 emergency construction services for urgent structural repairs,
								water damage, and safety issues.
							</p>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• Structural damage assessment</li>
								<li>• Emergency waterproofing</li>
								<li>• Temporary structural support</li>
								<li>• Rapid response team</li>
							</ul>
						</Card>

						<Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
							<div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
								<Lightbulb className="h-8 w-8 text-teal-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Green Building Solutions
							</h3>
							<p className="text-gray-600 mb-4">
								Sustainable construction practices and eco-friendly materials for
								environmentally conscious projects.
							</p>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• Energy-efficient insulation</li>
								<li>• Solar panel integration</li>
								<li>• Sustainable material sourcing</li>
								<li>• BREEAM certification support</li>
							</ul>
						</Card>

						<Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
							<div className="bg-pink-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
								<Settings className="h-8 w-8 text-pink-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Historic Restoration
							</h3>
							<p className="text-gray-600 mb-4">
								Specialized restoration services for historic buildings and heritage
								properties in Brugge.
							</p>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• Heritage building assessment</li>
								<li>• Traditional material matching</li>
								<li>• Conservation techniques</li>
								<li>• Permit assistance</li>
							</ul>
						</Card>

						<Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
							<div className="bg-cyan-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
								<Truck className="h-8 w-8 text-cyan-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Project Management
							</h3>
							<p className="text-gray-600 mb-4">
								Comprehensive project management services for large-scale
								construction and renovation projects.
							</p>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• Timeline planning & coordination</li>
								<li>• Subcontractor management</li>
								<li>• Budget control & reporting</li>
								<li>• Quality assurance oversight</li>
							</ul>
						</Card>

						<Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
							<div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
								<Calendar className="h-8 w-8 text-amber-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Maintenance Contracts
							</h3>
							<p className="text-gray-600 mb-4">
								Ongoing maintenance and inspection services to keep your property in
								optimal condition.
							</p>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• Preventive maintenance plans</li>
								<li>• Regular safety inspections</li>
								<li>• Priority service scheduling</li>
								<li>• Cost-effective solutions</li>
							</ul>
						</Card>

						<Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
							<div className="bg-rose-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
								<Heart className="h-8 w-8 text-rose-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Accessibility Modifications
							</h3>
							<p className="text-gray-600 mb-4">
								Specialized modifications to improve accessibility and accommodate
								mobility requirements.
							</p>
							<ul className="space-y-2 text-sm text-gray-600">
								<li>• Ramp installation</li>
								<li>• Bathroom accessibility upgrades</li>
								<li>• Doorway widening</li>
								<li>• Stair lift integration</li>
							</ul>
						</Card>
					</div>
				</div>
			</section>

			{/* Process Section */}
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
						<Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
							<Settings className="h-4 w-4 mr-2" />
							Our Process
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							How We Work
						</h2>
						<p className="text-xl text-gray-600">
							Our streamlined construction process ensures quality results,
							transparent communication, and on-time delivery.
						</p>
					</div>

					<div className="grid md:grid-cols-4 gap-8">
						<Card className="text-center p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
							<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-2xl font-bold text-green-600">1</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Consultation</h3>
							<p className="text-gray-600">
								Free initial consultation to understand your project requirements,
								timeline, and budget.
							</p>
						</Card>

						<Card className="text-center p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
							<div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-2xl font-bold text-orange-500">2</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Planning</h3>
							<p className="text-gray-600">
								Detailed project planning, material selection, and comprehensive
								quote preparation.
							</p>
						</Card>

						<Card className="text-center p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
							<div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-2xl font-bold text-blue-600">3</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Execution</h3>
							<p className="text-gray-600">
								Professional construction work with regular progress updates and
								quality control checks.
							</p>
						</Card>

						<Card className="text-center p-8 border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
							<div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-2xl font-bold text-purple-600">4</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Completion</h3>
							<p className="text-gray-600">
								Final inspection, cleanup, and project handover with warranty and
								maintenance guidance.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Why Choose Our Services */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
								<Star className="h-4 w-4 mr-2" />
								Why Choose Our Services
							</Badge>
							<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
								Quality That Speaks for Itself
							</h2>
							<p className="text-xl text-gray-600 mb-8">
								With over 15 years of experience and 500+ completed projects, we
								deliver construction services that exceed expectations and stand the
								test of time.
							</p>

							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="bg-green-100 p-3 rounded-lg">
										<Zap className="h-6 w-6 text-green-600" />
									</div>
									<div>
										<h4 className="font-bold text-gray-900 mb-2">
											Fast & Efficient
										</h4>
										<p className="text-gray-600">
											Modern equipment and streamlined processes ensure timely
											project completion without compromising quality.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="bg-orange-100 p-3 rounded-lg">
										<Shield className="h-6 w-6 text-orange-500" />
									</div>
									<div>
										<h4 className="font-bold text-gray-900 mb-2">
											Fully Insured
										</h4>
										<p className="text-gray-600">
											Comprehensive insurance coverage and safety protocols
											protect your investment and our workers.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="bg-blue-100 p-3 rounded-lg">
										<Clock className="h-6 w-6 text-blue-600" />
									</div>
									<div>
										<h4 className="font-bold text-gray-900 mb-2">
											Warranty Included
										</h4>
										<p className="text-gray-600">
											All our construction work comes with comprehensive
											warranties for your peace of mind.
										</p>
									</div>
								</div>
							</div>

							<div className="mt-8">
								<Link href="/contact">
									<Button size="lg" className="bg-green-600 hover:bg-green-700">
										<Calendar className="h-5 w-5 mr-2" />
										Schedule Free Consultation
									</Button>
								</Link>
							</div>
						</div>

						<div className="relative">
							<Image
								src="/placeholder.svg?height=600&width=500"
								alt="EA Construction quality workmanship and modern equipment"
								width={500}
								height={600}
								className="rounded-2xl shadow-2xl"
							/>

							{/* Floating Quality Badge */}
							<div className="absolute -top-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
								<div className="text-center">
									<Star className="h-8 w-8 mx-auto mb-2" />
									<div className="font-bold">Premium Quality</div>
									<div className="text-sm opacity-90">Guaranteed</div>
								</div>
							</div>

							{/* Floating Equipment Card */}
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
											Latest Technology
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Service Areas */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
							<MapPin className="h-4 w-4 mr-2" />
							Service Areas
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							Serving West Flanders & Beyond
						</h2>
						<p className="text-xl text-gray-600">
							Based in Brugge, we provide construction services throughout West
							Flanders and surrounding regions.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<h3 className="text-3xl font-bold text-gray-900 mb-8">
								Primary Service Areas
							</h3>
							<div className="grid md:grid-cols-2 gap-6">
								<div className="space-y-4">
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-green-600 rounded-full"></div>
										<span className="font-semibold text-gray-900">
											Brugge (Primary)
										</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-green-400 rounded-full"></div>
										<span className="text-gray-700">Oostende</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-green-400 rounded-full"></div>
										<span className="text-gray-700">Kortrijk</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-green-400 rounded-full"></div>
										<span className="text-gray-700">Roeselare</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-green-400 rounded-full"></div>
										<span className="text-gray-700">Ieper</span>
									</div>
								</div>
								<div className="space-y-4">
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-orange-400 rounded-full"></div>
										<span className="text-gray-700">Knokke-Heist</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-orange-400 rounded-full"></div>
										<span className="text-gray-700">Damme</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-orange-400 rounded-full"></div>
										<span className="text-gray-700">Zeebrugge</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-orange-400 rounded-full"></div>
										<span className="text-gray-700">Blankenberge</span>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-3 h-3 bg-orange-400 rounded-full"></div>
										<span className="text-gray-700">Torhout</span>
									</div>
								</div>
							</div>

							<div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
								<h4 className="font-bold text-gray-900 mb-4">Service Radius</h4>
								<div className="grid grid-cols-3 gap-4 text-center">
									<div>
										<div className="text-2xl font-bold text-green-600">
											50km
										</div>
										<div className="text-sm text-gray-600">
											Standard Service
										</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-orange-500">
											100km
										</div>
										<div className="text-sm text-gray-600">Large Projects</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-blue-600">24/7</div>
										<div className="text-sm text-gray-600">
											Emergency Service
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<Image
								src="/placeholder.svg?height=500&width=600"
								alt="Service area map of West Flanders showing EA Construction coverage"
								width={600}
								height={500}
								className="rounded-2xl shadow-2xl"
							/>

							{/* Map Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
							<div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg">
								<div className="flex items-center space-x-3">
									<div className="bg-green-100 p-2 rounded-full">
										<MapPin className="h-6 w-6 text-green-600" />
									</div>
									<div>
										<div className="font-bold text-gray-900">Headquarters</div>
										<div className="text-sm text-gray-600">Brugge, Belgium</div>
									</div>
								</div>
							</div>
						</div>
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
							Ready to Start Your Project?
						</h2>
						<p className="text-xl lg:text-2xl mb-8 opacity-90">
							Get a detailed quote for your construction project. Our experts are
							ready to discuss your requirements and provide professional
							recommendations.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact">
								<Button
									size="lg"
									variant="secondary"
									className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4"
								>
									<Calendar className="h-5 w-5 mr-2" />
									Get Free Quote
								</Button>
							</Link>
							<Button
								size="lg"
								variant="outline"
								className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-4"
							>
								<Phone className="h-5 w-5 mr-2" />
								Call: +32 50 123 456
							</Button>
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
