import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Building2,
	HardHat,
	Phone,
	Mail,
	MapPin,
	Clock,
	MessageCircle,
	Calendar,
	Send,
	CheckCircle,
	Star,
	Hammer,
	Wrench,
	Navigation,
	Users,
	Zap,
	HeadphonesIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
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
							<MessageCircle className="h-4 w-4 mr-2" />
							Get In Touch
						</Badge>
						<h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
							Let's Build <span className="text-green-600">Together</span>
						</h1>
						<p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
							Ready to start your construction project? Contact EA Construction
							Solutions for expert consultation, detailed quotes, and professional
							guidance from Brugge's most trusted construction team.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
							>
								<Calendar className="h-5 w-5 mr-2" />
								Schedule Free Consultation
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="text-lg px-8 py-4 border-2"
							>
								<Phone className="h-5 w-5 mr-2" />
								Call Now: +32 50 123 456
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Methods */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 mb-4">
							<Phone className="h-4 w-4 mr-2" />
							Multiple Ways to Reach Us
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							Choose Your Preferred Contact Method
						</h2>
						<p className="text-xl text-gray-600">
							We're available through multiple channels to ensure you can reach us
							when you need us most.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						<Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
							<div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Phone className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Phone Call</h3>
							<p className="text-gray-600 mb-4">
								Speak directly with our experts for immediate assistance and
								consultation.
							</p>
							<Button className="bg-green-600 hover:bg-green-700 w-full">
								<Phone className="h-4 w-4 mr-2" />
								+32 50 123 456
							</Button>
						</Card>

						<Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
							<div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Mail className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
							<p className="text-gray-600 mb-4">
								Send detailed project information and receive comprehensive
								responses.
							</p>
							<Button
								variant="outline"
								className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white w-full"
							>
								<Mail className="h-4 w-4 mr-2" />
								info@eaconstruction.be
							</Button>
						</Card>

						<Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-orange-100">
							<div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<MessageCircle className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">WhatsApp</h3>
							<p className="text-gray-600 mb-4">
								Quick messaging for urgent questions and project updates.
							</p>
							<Button className="bg-orange-500 hover:bg-orange-600 w-full">
								<MessageCircle className="h-4 w-4 mr-2" />
								WhatsApp Chat
							</Button>
						</Card>

						<Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
							<div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Calendar className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Site Visit</h3>
							<p className="text-gray-600 mb-4">
								Schedule an on-site consultation for detailed project assessment.
							</p>
							<Button
								variant="outline"
								className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white w-full"
							>
								<Calendar className="h-4 w-4 mr-2" />
								Book Visit
							</Button>
						</Card>
					</div>
				</div>
			</section>

			{/* Contact Form & Information */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-16">
						{/* Contact Form */}
						<div>
							<Badge className="bg-green-100 text-green-800 hover:bg-green-100 mb-4">
								<Send className="h-4 w-4 mr-2" />
								Project Inquiry Form
							</Badge>
							<h2 className="text-4xl font-bold text-gray-900 mb-6">
								Tell Us About Your Project
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								Fill out our detailed form to receive a comprehensive quote and
								project timeline. The more information you provide, the more
								accurate our estimate will be.
							</p>

							<Card className="border-0 shadow-xl">
								<CardContent className="p-8">
									<form className="space-y-6">
										{/* Personal Information */}
										<div className="space-y-4">
											<h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
												Contact Information
											</h3>
											<div className="grid md:grid-cols-2 gap-4">
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">
														First Name *
													</label>
													<Input placeholder="Your first name" required />
												</div>
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">
														Last Name *
													</label>
													<Input placeholder="Your last name" required />
												</div>
											</div>
											<div className="grid md:grid-cols-2 gap-4">
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">
														Email Address *
													</label>
													<Input
														type="email"
														placeholder="your.email@example.com"
														required
													/>
												</div>
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">
														Phone Number *
													</label>
													<Input
														placeholder="+32 XXX XX XX XX"
														required
													/>
												</div>
											</div>
											<div>
												<label className="block text-sm font-medium text-gray-700 mb-2">
													Company (Optional)
												</label>
												<Input placeholder="Your company name" />
											</div>
										</div>

										{/* Project Information */}
										<div className="space-y-4">
											<h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
												Project Details
											</h3>
											<div className="grid md:grid-cols-2 gap-4">
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">
														Project Type *
													</label>
													<select
														className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
														required
													>
														<option value="">
															Select project type
														</option>
														<option value="residential-new">
															New Residential Construction
														</option>
														<option value="residential-renovation">
															Residential Renovation
														</option>
														<option value="commercial-new">
															New Commercial Building
														</option>
														<option value="commercial-renovation">
															Commercial Renovation
														</option>
														<option value="industrial">
															Industrial Construction
														</option>
														<option value="restoration">
															Historic Restoration
														</option>
														<option value="emergency">
															Emergency Repairs
														</option>
														<option value="other">Other</option>
													</select>
												</div>
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">
														Project Location *
													</label>
													<Input placeholder="City, Address" required />
												</div>
											</div>
											<div className="grid md:grid-cols-2 gap-4">
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">
														Estimated Budget
													</label>
													<select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
														<option value="">
															Select budget range
														</option>
														<option value="under-50k">
															Under €50,000
														</option>
														<option value="50k-100k">
															€50,000 - €100,000
														</option>
														<option value="100k-250k">
															€100,000 - €250,000
														</option>
														<option value="250k-500k">
															€250,000 - €500,000
														</option>
														<option value="500k-1m">
															€500,000 - €1,000,000
														</option>
														<option value="over-1m">
															Over €1,000,000
														</option>
														<option value="discuss">
															Prefer to discuss
														</option>
													</select>
												</div>
												<div>
													<label className="block text-sm font-medium text-gray-700 mb-2">
														Preferred Start Date
													</label>
													<Input type="date" />
												</div>
											</div>
										</div>

										{/* Services Needed */}
										<div className="space-y-4">
											<h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
												Services Required
											</h3>
											<div className="grid grid-cols-2 gap-3">
												{[
													"Reinforced Concrete Works",
													"Masonry Works",
													"Insulation Works",
													"Tiling Works",
													"Flooring Works",
													"Final Construction Works",
													"Project Management",
													"Emergency Repairs",
												].map(service => (
													<label
														key={service}
														className="flex items-center space-x-2"
													>
														<input
															type="checkbox"
															className="rounded border-gray-300 text-green-600 focus:ring-green-500"
														/>
														<span className="text-sm text-gray-700">
															{service}
														</span>
													</label>
												))}
											</div>
										</div>

										{/* Project Description */}
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Project Description *
											</label>
											<Textarea
												placeholder="Please provide detailed information about your project including size, specific requirements, timeline expectations, and any special considerations..."
												rows={6}
												required
											/>
										</div>

										{/* Additional Information */}
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Additional Information
											</label>
											<Textarea
												placeholder="Any additional details, questions, or specific requests you'd like us to know about..."
												rows={3}
											/>
										</div>

										{/* Preferred Contact Method */}
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-2">
												Preferred Contact Method
											</label>
											<div className="flex flex-wrap gap-4">
												{[
													"Email",
													"Phone Call",
													"WhatsApp",
													"Site Visit",
												].map(method => (
													<label
														key={method}
														className="flex items-center space-x-2"
													>
														<input
															type="radio"
															name="contact-method"
															value={method.toLowerCase()}
															className="text-green-600 focus:ring-green-500"
														/>
														<span className="text-sm text-gray-700">
															{method}
														</span>
													</label>
												))}
											</div>
										</div>

										<Button
											className="w-full bg-green-600 hover:bg-green-700 text-lg py-4"
											size="lg"
										>
											<Send className="h-5 w-5 mr-2" />
											Send Project Inquiry
										</Button>

										<p className="text-sm text-gray-500 text-center">
											We typically respond to inquiries within 2-4 hours
											during business hours.
										</p>
									</form>
								</CardContent>
							</Card>
						</div>

						{/* Contact Information & Details */}
						<div className="space-y-8">
							{/* Office Information */}
							<Card className="border-0 shadow-xl">
								<CardContent className="p-8">
									<h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
										<Building2 className="h-6 w-6 mr-3 text-green-600" />
										Office Information
									</h3>
									<div className="space-y-6">
										<div className="flex items-start space-x-4">
											<div className="bg-green-100 p-3 rounded-lg">
												<MapPin className="h-6 w-6 text-green-600" />
											</div>
											<div>
												<h4 className="font-bold text-gray-900 mb-1">
													Headquarters
												</h4>
												<p className="text-gray-600">
													Industrieweg 45
													<br />
													8000 Brugge, Belgium
													<br />
													West Flanders
												</p>
											</div>
										</div>

										<div className="flex items-start space-x-4">
											<div className="bg-blue-100 p-3 rounded-lg">
												<Phone className="h-6 w-6 text-blue-600" />
											</div>
											<div>
												<h4 className="font-bold text-gray-900 mb-1">
													Phone Numbers
												</h4>
												<p className="text-gray-600">
													Main Office: +32 50 123 456
													<br />
													Emergency: +32 50 123 999
													<br />
													Mobile: +32 478 123 456
												</p>
											</div>
										</div>

										<div className="flex items-start space-x-4">
											<div className="bg-orange-100 p-3 rounded-lg">
												<Mail className="h-6 w-6 text-orange-500" />
											</div>
											<div>
												<h4 className="font-bold text-gray-900 mb-1">
													Email Addresses
												</h4>
												<p className="text-gray-600">
													General: info@eaconstruction.be
													<br />
													Projects: projects@eaconstruction.be
													<br />
													Emergency: emergency@eaconstruction.be
												</p>
											</div>
										</div>

										<div className="flex items-start space-x-4">
											<div className="bg-purple-100 p-3 rounded-lg">
												<Clock className="h-6 w-6 text-purple-600" />
											</div>
											<div>
												<h4 className="font-bold text-gray-900 mb-1">
													Business Hours
												</h4>
												<p className="text-gray-600">
													Monday - Friday: 7:00 AM - 6:00 PM
													<br />
													Saturday: 8:00 AM - 4:00 PM
													<br />
													Sunday: Emergency calls only
													<br />
													<span className="text-red-600 font-medium">
														24/7 Emergency Service Available
													</span>
												</p>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Service Areas */}
							<Card className="border-0 shadow-xl">
								<CardContent className="p-8">
									<h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
										<Navigation className="h-6 w-6 mr-3 text-green-600" />
										Service Coverage
									</h3>
									<div className="space-y-4">
										<div>
											<h4 className="font-bold text-gray-900 mb-2">
												Primary Service Area (0-25km)
											</h4>
											<p className="text-gray-600">
												Brugge, Damme, Zeebrugge, Knokke-Heist, Blankenberge
											</p>
										</div>
										<div>
											<h4 className="font-bold text-gray-900 mb-2">
												Extended Service Area (25-50km)
											</h4>
											<p className="text-gray-600">
												Oostende, Kortrijk, Roeselare, Ieper, Torhout,
												Veurne
											</p>
										</div>
										<div>
											<h4 className="font-bold text-gray-900 mb-2">
												Large Projects (50km+)
											</h4>
											<p className="text-gray-600">
												Available for significant commercial and industrial
												projects throughout Belgium
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Why Choose Us */}
							<Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
								<CardContent className="p-8">
									<h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
										<Star className="h-6 w-6 mr-3 text-green-600" />
										Why Contact Us?
									</h3>
									<div className="space-y-4">
										<div className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-green-600" />
											<span className="text-gray-700">
												Free initial consultation and site assessment
											</span>
										</div>
										<div className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-green-600" />
											<span className="text-gray-700">
												Detailed written quotes within 48 hours
											</span>
										</div>
										<div className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-green-600" />
											<span className="text-gray-700">
												15+ years of construction experience
											</span>
										</div>
										<div className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-green-600" />
											<span className="text-gray-700">
												Licensed, insured, and certified professionals
											</span>
										</div>
										<div className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-green-600" />
											<span className="text-gray-700">
												Transparent pricing with no hidden costs
											</span>
										</div>
										<div className="flex items-center space-x-3">
											<CheckCircle className="h-5 w-5 text-green-600" />
											<span className="text-gray-700">
												5-year warranty on all structural work
											</span>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Emergency Contact */}
							<Card className="border-0 shadow-xl bg-gradient-to-br from-red-50 to-red-100 border-red-200">
								<CardContent className="p-8">
									<h3 className="text-2xl font-bold text-red-800 mb-4 flex items-center">
										<Zap className="h-6 w-6 mr-3" />
										Emergency Services
									</h3>
									<p className="text-red-700 mb-4">
										For urgent construction emergencies, structural damage, or
										safety concerns, contact our 24/7 emergency response team.
									</p>
									<Button className="bg-red-600 hover:bg-red-700 w-full">
										<Phone className="h-4 w-4 mr-2" />
										Emergency: +32 50 123 999
									</Button>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Map Section */}
			<section className="py-20 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">
							<MapPin className="h-4 w-4 mr-2" />
							Find Our Location
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							Visit Our Brugge Office
						</h2>
						<p className="text-xl text-gray-600">
							Located in the heart of Brugge's industrial district, our modern
							facility houses our offices, equipment, and materials warehouse.
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-3xl font-bold text-gray-900 mb-6">
								Getting to Our Office
							</h3>
							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="bg-blue-100 p-3 rounded-lg">
										<Navigation className="h-6 w-6 text-blue-600" />
									</div>
									<div>
										<h4 className="font-bold text-gray-900 mb-2">By Car</h4>
										<p className="text-gray-600">
											Take the A10/E40 to Brugge, exit at Junction 8
											(Brugge-Centrum). Follow signs to Industrieweg. Free
											parking available on-site.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="bg-green-100 p-3 rounded-lg">
										<Users className="h-6 w-6 text-green-600" />
									</div>
									<div>
										<h4 className="font-bold text-gray-900 mb-2">
											Public Transport
										</h4>
										<p className="text-gray-600">
											Bus lines 4 and 14 stop at "Industrieweg" (5-minute
											walk). Brugge Central Station is 15 minutes by bus or
											taxi.
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="bg-orange-100 p-3 rounded-lg">
										<Clock className="h-6 w-6 text-orange-500" />
									</div>
									<div>
										<h4 className="font-bold text-gray-900 mb-2">
											Office Visits
										</h4>
										<p className="text-gray-600">
											We recommend scheduling appointments in advance to
											ensure our team is available to meet with you and
											discuss your project in detail.
										</p>
									</div>
								</div>
							</div>

							<div className="mt-8 p-6 bg-gray-50 rounded-xl">
								<h4 className="font-bold text-gray-900 mb-4">Office Facilities</h4>
								<div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										<span>Free parking</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										<span>Wheelchair accessible</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										<span>Conference rooms</span>
									</div>
									<div className="flex items-center space-x-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										<span>Material showroom</span>
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<Card className="border-0 shadow-2xl overflow-hidden">
								<div className="h-96 bg-gray-200 flex items-center justify-center relative">
									<Image
										src="/placeholder.svg?height=400&width=600"
										alt="Interactive map showing EA Construction Solutions office location in Brugge"
										width={600}
										height={400}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
									<div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
										<div className="flex items-center space-x-3">
											<div className="bg-green-100 p-2 rounded-full">
												<Building2 className="h-6 w-6 text-green-600" />
											</div>
											<div>
												<div className="font-bold text-gray-900">
													EA Construction Solutions
												</div>
												<div className="text-sm text-gray-600">
													Industrieweg 45, Brugge
												</div>
											</div>
										</div>
									</div>
								</div>
							</Card>

							<div className="absolute -top-4 -right-4 bg-green-600 text-white p-4 rounded-xl shadow-lg">
								<div className="text-center">
									<MapPin className="h-6 w-6 mx-auto mb-1" />
									<div className="text-sm font-bold">Easy to Find</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 mb-4">
							<HeadphonesIcon className="h-4 w-4 mr-2" />
							Frequently Asked Questions
						</Badge>
						<h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
							Common Questions
						</h2>
						<p className="text-xl text-gray-600">
							Quick answers to the most common questions about our construction
							services and processes.
						</p>
					</div>

					<div className="max-w-4xl mx-auto space-y-6">
						{[
							{
								question: "How quickly can you provide a project quote?",
								answer: "We typically provide detailed written quotes within 48 hours for standard projects. Complex or large-scale projects may require 3-5 business days for thorough assessment and accurate pricing.",
							},
							{
								question: "Do you offer free consultations?",
								answer: "Yes, we provide free initial consultations and site assessments for all potential projects. This includes discussing your requirements, timeline, and providing preliminary cost estimates.",
							},
							{
								question: "What areas do you serve?",
								answer: "Our primary service area covers Brugge and surrounding areas within 25km. We also serve extended areas up to 50km for larger projects, and can travel further for significant commercial or industrial projects.",
							},
							{
								question: "Are you licensed and insured?",
								answer: "Yes, EA Construction Solutions is fully licensed by Belgian authorities and carries comprehensive insurance including liability, workers' compensation, and project-specific coverage.",
							},
							{
								question: "What warranty do you provide?",
								answer: "We provide a 5-year warranty on all structural work and a 2-year warranty on finishing work. Emergency repairs and maintenance services are also available throughout the warranty period.",
							},
							{
								question: "Can you help with permits and approvals?",
								answer: "Absolutely. We assist with all necessary permits, building approvals, and regulatory compliance. Our team has extensive experience with Belgian building codes and municipal requirements.",
							},
						].map((faq, index) => (
							<Card key={index} className="border-0 shadow-lg">
								<CardContent className="p-8">
									<h3 className="text-xl font-bold text-gray-900 mb-4">
										{faq.question}
									</h3>
									<p className="text-gray-600 leading-relaxed">{faq.answer}</p>
								</CardContent>
							</Card>
						))}
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
							Ready to Get Started?
						</h2>
						<p className="text-xl lg:text-2xl mb-8 opacity-90">
							Don't wait to begin your construction project. Contact us today for
							expert consultation, detailed quotes, and professional guidance from
							Brugge's most trusted construction team.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Button
								size="lg"
								variant="secondary"
								className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4"
							>
								<Calendar className="h-5 w-5 mr-2" />
								Schedule Free Consultation
							</Button>
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
