import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Building2,
	HardHat,
	MapPin,
	Calendar,
	Users,
	Clock,
	Phone,
	Mail,
	MessageCircle,
	ArrowRight,
	CheckCircle,
	Star,
	Hammer,
	Wrench,
	Home,
	Building,
	Factory,
	School,
	Filter,
	Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
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
							Our Project Portfolio
						</Badge>
						<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
							<span className="text-green-600">500+</span> Projects Completed
						</h1>
						<p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
							Explore our comprehensive portfolio of residential, commercial, and
							industrial construction projects across Brugge and West Flanders,
							showcasing our expertise and commitment to excellence.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact">
								<Button
									size="lg"
									className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
								>
									<Calendar className="h-5 w-5 mr-2" />
									Start Your Project
								</Button>
							</Link>
							<Button
								variant="outline"
								size="lg"
								className="text-lg px-8 py-4 border-2"
							>
								<Search className="h-5 w-5 mr-2" />
								Browse Projects
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Project Statistics */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-4 gap-8">
						<Card className="text-center p-8 border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
							<div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Building2 className="h-8 w-8 text-white" />
							</div>
							<div className="text-3xl font-bold text-green-600 mb-2">500+</div>
							<div className="text-gray-700 font-medium">Total Projects</div>
						</Card>

						<Card className="text-center p-8 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
							<div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Home className="h-8 w-8 text-white" />
							</div>
							<div className="text-3xl font-bold text-orange-500 mb-2">350+</div>
							<div className="text-gray-700 font-medium">Residential Projects</div>
						</Card>

						<Card className="text-center p-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
							<div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Building className="h-8 w-8 text-white" />
							</div>
							<div className="text-3xl font-bold text-blue-600 mb-2">120+</div>
							<div className="text-gray-700 font-medium">Commercial Projects</div>
						</Card>

						<Card className="text-center p-8 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
							<div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
								<Factory className="h-8 w-8 text-white" />
							</div>
							<div className="text-3xl font-bold text-purple-600 mb-2">30+</div>
							<div className="text-gray-700 font-medium">Industrial Projects</div>
						</Card>
					</div>
				</div>
			</section>

			{/* Project Categories */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">
							<Filter className="h-4 w-4 mr-2" />
							Project Categories
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							Diverse Construction Expertise
						</h2>
						<p className="text-xl text-gray-600">
							From luxury residential homes to large commercial developments, we
							handle projects of all sizes and complexities.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 mb-16">
						<Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
							<div className="relative">
								<Image
									src="/placeholder.svg?height=250&width=400"
									alt="Residential construction projects"
									width={400}
									height={250}
									className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
								<div className="absolute bottom-4 left-4">
									<Badge className="bg-green-600 text-white mb-2">
										Residential
									</Badge>
									<h3 className="text-xl font-bold text-white">
										Homes & Apartments
									</h3>
								</div>
							</div>
							<CardContent className="p-6">
								<p className="text-gray-600 mb-4">
									Custom homes, apartment buildings, renovations, and residential
									extensions throughout Brugge.
								</p>
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-500">350+ Projects</span>
									<ArrowRight className="h-4 w-4 text-green-600" />
								</div>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
							<div className="relative">
								<Image
									src="/placeholder.svg?height=250&width=400"
									alt="Commercial construction projects"
									width={400}
									height={250}
									className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
								<div className="absolute bottom-4 left-4">
									<Badge className="bg-blue-600 text-white mb-2">
										Commercial
									</Badge>
									<h3 className="text-xl font-bold text-white">
										Offices & Retail
									</h3>
								</div>
							</div>
							<CardContent className="p-6">
								<p className="text-gray-600 mb-4">
									Office buildings, retail spaces, restaurants, and commercial
									renovations for businesses.
								</p>
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-500">120+ Projects</span>
									<ArrowRight className="h-4 w-4 text-green-600" />
								</div>
							</CardContent>
						</Card>

						<Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
							<div className="relative">
								<Image
									src="/placeholder.svg?height=250&width=400"
									alt="Industrial construction projects"
									width={400}
									height={250}
									className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
								<div className="absolute bottom-4 left-4">
									<Badge className="bg-purple-600 text-white mb-2">
										Industrial
									</Badge>
									<h3 className="text-xl font-bold text-white">
										Warehouses & Facilities
									</h3>
								</div>
							</div>
							<CardContent className="p-6">
								<p className="text-gray-600 mb-4">
									Industrial facilities, warehouses, manufacturing plants, and
									specialized structures.
								</p>
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-500">30+ Projects</span>
									<ArrowRight className="h-4 w-4 text-green-600" />
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Featured Projects */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
							<Star className="h-4 w-4 mr-2" />
							Featured Projects
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							Showcase of Excellence
						</h2>
						<p className="text-xl text-gray-600">
							Detailed case studies of our most notable construction projects,
							highlighting our expertise and attention to detail.
						</p>
					</div>

					<div className="space-y-16">
						{/* Project 1 - Luxury Residential Complex */}
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div className="relative">
								<Image
									src="/placeholder.svg?height=500&width=600"
									alt="Luxury residential complex in Brugge center"
									width={600}
									height={500}
									className="rounded-2xl shadow-2xl"
								/>
								<div className="absolute -top-4 -right-4 bg-green-600 text-white p-4 rounded-xl shadow-lg">
									<div className="text-center">
										<Star className="h-6 w-6 mx-auto mb-1" />
										<div className="text-sm font-bold">Award Winner</div>
									</div>
								</div>
							</div>
							<div>
								<Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
									<Home className="h-4 w-4 mr-2" />
									Residential Complex
								</Badge>
								<h3 className="text-3xl font-bold text-gray-900 mb-4">
									Heritage Gardens Luxury Apartments
								</h3>
								<p className="text-lg text-gray-600 mb-6">
									A prestigious 24-unit luxury apartment complex in Brugge's
									historic center, featuring modern amenities while preserving the
									architectural heritage of the area.
								</p>

								<div className="grid grid-cols-2 gap-6 mb-6">
									<div className="flex items-center space-x-3">
										<MapPin className="h-5 w-5 text-green-600" />
										<div>
											<div className="font-semibold text-gray-900">
												Location
											</div>
											<div className="text-sm text-gray-600">
												Brugge Historic Center
											</div>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<Calendar className="h-5 w-5 text-green-600" />
										<div>
											<div className="font-semibold text-gray-900">
												Completed
											</div>
											<div className="text-sm text-gray-600">March 2023</div>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<Clock className="h-5 w-5 text-green-600" />
										<div>
											<div className="font-semibold text-gray-900">
												Duration
											</div>
											<div className="text-sm text-gray-600">18 months</div>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<Users className="h-5 w-5 text-green-600" />
										<div>
											<div className="font-semibold text-gray-900">
												Team Size
											</div>
											<div className="text-sm text-gray-600">
												15 specialists
											</div>
										</div>
									</div>
								</div>

								<div className="space-y-3 mb-6">
									<h4 className="font-bold text-gray-900">Key Features:</h4>
									<ul className="space-y-2">
										<li className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-green-600" />
											<span className="text-gray-700">
												Reinforced concrete structure with premium finishes
											</span>
										</li>
										<li className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-green-600" />
											<span className="text-gray-700">
												Energy-efficient insulation and heating systems
											</span>
										</li>
										<li className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-green-600" />
											<span className="text-gray-700">
												Underground parking and storage facilities
											</span>
										</li>
										<li className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-green-600" />
											<span className="text-gray-700">
												Rooftop garden and community spaces
											</span>
										</li>
									</ul>
								</div>

								<Link href="/contact">
									<Button className="bg-green-600 hover:bg-green-700">
										<ArrowRight className="h-4 w-4 mr-2" />
										Discuss Similar Project
									</Button>
								</Link>
							</div>
						</div>

						{/* Project 2 - Commercial Office Building */}
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div className="order-2 lg:order-1">
								<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
									<Building className="h-4 w-4 mr-2" />
									Commercial Building
								</Badge>
								<h3 className="text-3xl font-bold text-gray-900 mb-4">
									TechHub Brugge Office Complex
								</h3>
								<p className="text-lg text-gray-600 mb-6">
									A state-of-the-art 5-story office building designed for modern
									businesses, featuring flexible workspaces, advanced technology
									infrastructure, and sustainable building practices.
								</p>

								<div className="grid grid-cols-2 gap-6 mb-6">
									<div className="flex items-center space-x-3">
										<MapPin className="h-5 w-5 text-blue-600" />
										<div>
											<div className="font-semibold text-gray-900">
												Location
											</div>
											<div className="text-sm text-gray-600">
												Brugge Business District
											</div>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<Calendar className="h-5 w-5 text-blue-600" />
										<div>
											<div className="font-semibold text-gray-900">
												Completed
											</div>
											<div className="text-sm text-gray-600">
												September 2023
											</div>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<Clock className="h-5 w-5 text-blue-600" />
										<div>
											<div className="font-semibold text-gray-900">
												Duration
											</div>
											<div className="text-sm text-gray-600">24 months</div>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<Users className="h-5 w-5 text-blue-600" />
										<div>
											<div className="font-semibold text-gray-900">
												Team Size
											</div>
											<div className="text-sm text-gray-600">
												20 specialists
											</div>
										</div>
									</div>
								</div>

								<div className="space-y-3 mb-6">
									<h4 className="font-bold text-gray-900">Key Features:</h4>
									<ul className="space-y-2">
										<li className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-blue-600" />
											<span className="text-gray-700">
												BREEAM Excellent certified sustainable design
											</span>
										</li>
										<li className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-blue-600" />
											<span className="text-gray-700">
												Advanced HVAC and smart building systems
											</span>
										</li>
										<li className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-blue-600" />
											<span className="text-gray-700">
												Flexible open-plan office spaces
											</span>
										</li>
										<li className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-blue-600" />
											<span className="text-gray-700">
												Conference facilities and employee amenities
											</span>
										</li>
									</ul>
								</div>

								<Link href="/contact">
									<Button className="bg-blue-600 hover:bg-blue-700">
										<ArrowRight className="h-4 w-4 mr-2" />
										Discuss Commercial Project
									</Button>
								</Link>
							</div>
							<div className="relative order-1 lg:order-2">
								<Image
									src="/placeholder.svg?height=500&width=600"
									alt="Modern office building in Brugge business district"
									width={600}
									height={500}
									className="rounded-2xl shadow-2xl"
								/>
								<div className="absolute -top-4 -left-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
									<div className="text-center">
										<Building className="h-6 w-6 mx-auto mb-1" />
										<div className="text-sm font-bold">BREEAM Certified</div>
									</div>
								</div>
							</div>
						</div>

						{/* Project 3 - Historic Restoration */}
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div className="relative">
								<Image
									src="/placeholder.svg?height=500&width=600"
									alt="Historic building restoration in Brugge"
									width={600}
									height={500}
									className="rounded-2xl shadow-2xl"
								/>
								<div className="absolute -top-4 -right-4 bg-purple-600 text-white p-4 rounded-xl shadow-lg">
									<div className="text-center">
										<School className="h-6 w-6 mx-auto mb-1" />
										<div className="text-sm font-bold">Heritage Project</div>
									</div>
								</div>
							</div>
							<div>
								<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4">
									<School className="h-4 w-4 mr-2" />
									Historic Restoration
								</Badge>
								<h3 className="text-3xl font-bold text-gray-900 mb-4">
									Sint-Baafs Cathedral Restoration
								</h3>
								<p className="text-lg text-gray-600 mb-6">
									A meticulous restoration of a 15th-century cathedral annex,
									preserving historical integrity while incorporating modern
									safety and accessibility features.
								</p>

								<div className="grid grid-cols-2 gap-6 mb-6">
									<div className="flex items-center space-x-3">
										<MapPin className="h-5 w-5 text-purple-600" />
										<div>
											<div className="font-semibold text-gray-900">
												Location
											</div>
											<div className="text-sm text-gray-600">
												Brugge Historic Quarter
											</div>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<Calendar className="h-5 w-5 text-purple-600" />
										<div>
											<div className="font-semibold text-gray-900">
												Completed
											</div>
											<div className="text-sm text-gray-600">June 2022</div>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<Clock className="h-5 w-5 text-purple-600" />
										<div>
											<div className="font-semibold text-gray-900">
												Duration
											</div>
											<div className="text-sm text-gray-600">30 months</div>
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<Users className="h-5 w-5 text-purple-600" />
										<div>
											<div className="font-semibold text-gray-900">
												Team Size
											</div>
											<div className="text-sm text-gray-600">
												12 specialists
											</div>
										</div>
									</div>
								</div>

								<div className="space-y-3 mb-6">
									<h4 className="font-bold text-gray-900">Key Features:</h4>
									<ul className="space-y-2">
										<li className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-purple-600" />
											<span className="text-gray-700">
												Traditional masonry restoration techniques
											</span>
										</li>
										<li className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-purple-600" />
											<span className="text-gray-700">
												Period-appropriate materials and methods
											</span>
										</li>
										<li className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-purple-600" />
											<span className="text-gray-700">
												Modern structural reinforcement
											</span>
										</li>
										<li className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-purple-600" />
											<span className="text-gray-700">
												Heritage compliance and documentation
											</span>
										</li>
									</ul>
								</div>

								<Link href="/contact">
									<Button className="bg-purple-600 hover:bg-purple-700">
										<ArrowRight className="h-4 w-4 mr-2" />
										Discuss Restoration Project
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Recent Projects Gallery */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">
							<Building2 className="h-4 w-4 mr-2" />
							Recent Completions
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							Latest Project Gallery
						</h2>
						<p className="text-xl text-gray-600">
							Our most recently completed projects showcasing the breadth of our
							construction capabilities.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Recent Project Cards */}
						{[
							{
								title: "Modern Family Villa",
								location: "Damme",
								type: "Residential",
								image: "/placeholder.svg?height=300&width=400",
								badge: "New Construction",
								color: "green",
							},
							{
								title: "Retail Shopping Center",
								location: "Oostende",
								type: "Commercial",
								image: "/placeholder.svg?height=300&width=400",
								badge: "Renovation",
								color: "blue",
							},
							{
								title: "Warehouse Facility",
								location: "Zeebrugge",
								type: "Industrial",
								image: "/placeholder.svg?height=300&width=400",
								badge: "Expansion",
								color: "purple",
							},
							{
								title: "Boutique Hotel",
								location: "Brugge Center",
								type: "Hospitality",
								image: "/placeholder.svg?height=300&width=400",
								badge: "Restoration",
								color: "orange",
							},
							{
								title: "Medical Center",
								location: "Kortrijk",
								type: "Healthcare",
								image: "/placeholder.svg?height=300&width=400",
								badge: "New Construction",
								color: "teal",
							},
							{
								title: "Educational Facility",
								location: "Roeselare",
								type: "Education",
								image: "/placeholder.svg?height=300&width=400",
								badge: "Modernization",
								color: "indigo",
							},
						].map((project, index) => (
							<Card
								key={index}
								className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
							>
								<div className="relative overflow-hidden">
									<Image
										src={project.image || "/placeholder.svg"}
										alt={project.title}
										width={400}
										height={300}
										className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
									<div className="absolute top-4 left-4">
										<Badge className={`bg-${project.color}-600 text-white`}>
											{project.badge}
										</Badge>
									</div>
									<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<h3 className="text-lg font-bold">{project.title}</h3>
										<p className="text-sm opacity-90">{project.type}</p>
									</div>
								</div>
								<CardContent className="p-6">
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										{project.title}
									</h3>
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-2 text-sm text-gray-500">
											<MapPin className="h-4 w-4" />
											<span>{project.location}</span>
										</div>
										<span className="text-sm font-medium text-gray-700">
											{project.type}
										</span>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="text-center mt-12">
						<Link href="/contact">
							<Button
								size="lg"
								variant="outline"
								className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
							>
								Start Your Project
								<ArrowRight className="h-5 w-5 ml-2" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Client Success Stories */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 mb-4">
							<Star className="h-4 w-4 mr-2" />
							Client Success Stories
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							What Our Clients Say
						</h2>
						<p className="text-xl text-gray-600">
							Real testimonials from satisfied clients across our diverse project
							portfolio.
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
								"The Heritage Gardens project exceeded all our expectations. EA
								Construction's attention to detail and respect for the historic
								character of Brugge was remarkable."
							</p>
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
									<span className="text-green-600 font-bold">JV</span>
								</div>
								<div>
									<div className="font-bold text-gray-900">Jan Vermeulen</div>
									<div className="text-sm text-gray-600">Property Developer</div>
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
								"Our TechHub office building was delivered on time and within
								budget. The quality of construction and modern features have
								impressed all our tenants."
							</p>
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
									<span className="text-blue-600 font-bold">SD</span>
								</div>
								<div>
									<div className="font-bold text-gray-900">Sophie Dubois</div>
									<div className="text-sm text-gray-600">
										Commercial Real Estate
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
								"The cathedral restoration project required exceptional skill and
								sensitivity. EA Construction preserved the historical integrity
								while ensuring modern safety standards."
							</p>
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
									<span className="text-purple-600 font-bold">FR</span>
								</div>
								<div>
									<div className="font-bold text-gray-900">Father Robert</div>
									<div className="text-sm text-gray-600">
										Cathedral Administrator
									</div>
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
							Ready to Start Your Next Project?
						</h2>
						<p className="text-xl lg:text-2xl mb-8 opacity-90">
							Join our portfolio of successful projects. From concept to completion,
							we'll bring your construction vision to life with the same excellence
							showcased in our work.
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
