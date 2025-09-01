



import Link from "next/link";
import { Phone } from "lucide-react";

export default function Home() {
	return (
		<main className="relative w-full bg-white">
			{/* Top Contact Bar */}
			<div className="bg-primary-blue text-white py-2">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
					<div className="flex items-center gap-2">
						<Phone size={16} />
						<span className="text-sm hidden sm:inline">+91 6389-457042</span>
						<span className="text-sm sm:hidden">Call Us</span>
					</div>
					<div className="flex items-center gap-4">
						<Link href="/cart" aria-label="Shopping Cart" className="hover:text-blue-300 transition-colors">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<circle cx="9" cy="21" r="1"></circle>
								<circle cx="20" cy="21" r="1"></circle>
								<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
							</svg>
						</Link>
						<Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="hidden sm:block">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-blue-300 transition-colors">
								<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
							</svg>
						</Link>
						<Link href="https://facebook.com" target="_blank" aria-label="Facebook">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-blue-300 transition-colors">
								<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
							</svg>
						</Link>
						<Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="hidden sm:block">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-blue-300 transition-colors">
								<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
								<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
							</svg>
						</Link>
						<Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="hidden sm:block">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-blue-300 transition-colors">
								<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
								<rect x="2" y="9" width="4" height="12"></rect>
								<circle cx="4" cy="4" r="2"></circle>
							</svg>
						</Link>
					</div>
				</div>
			</div>

			{/* Hero Section */}
			<section className="relative bg-gradient-to-r from-blue-50 to-white py-16 md:py-24">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-blue leading-tight">
								Pure & Safe <br />
								<span className="text-ocean-blue">Cristal Clear Water</span>
							</h1>
							<p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-lg">
								Experience the refreshing taste of premium packaged drinking water, purified through advanced filtration systems and enhanced with essential minerals.
							</p>
							<div className="flex flex-wrap gap-4">
								<Link href="/products" className="px-8 py-3 bg-primary-blue text-white font-medium rounded-full hover:bg-ocean-blue transition-all duration-300 shadow-md transform hover:-translate-y-1">
									Our Products
								</Link>
								<Link href="/contact" className="px-8 py-3 border-2 border-primary-blue text-primary-blue font-medium rounded-full hover:bg-primary-blue hover:text-white transition-all duration-300 transform hover:-translate-y-1">
									Contact Us
								</Link>
							</div>
						</div>
						<div className="relative">
							<div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 z-0"></div>
							<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 z-0"></div>
							<img 
								src="/ChatGPT Image Aug 25, 2025, 04_30_07 AM.png" 
								alt="Cristal Clear Water Bottles" 
								className="rounded-2xl shadow-xl relative z-10 w-full h-auto object-cover transform transition-transform hover:scale-105 duration-500"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Bottles We Deliver */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Bottles We Deliver</h2>
					</div>
					
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
						{/* 200 ML Bottles */}
						<div className="bg-white rounded-2xl p-4 md:p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 shadow-sm transform hover:-translate-y-1">
							<div className="h-36 md:h-48 flex items-center justify-center mb-4">
								<img 
									src="/download (1).jpg" 
									alt="200 ML Water Bottle" 
									className="h-full object-contain rounded-xl transition-all duration-300"
								/>
							</div>
							<h3 className="text-xl font-bold text-primary-blue">200 ML Bottles</h3>
							<p className="text-ocean-blue font-bold mt-2">₹ 6 /- Per Bottle</p>
							<Link href="/products" className="mt-3 inline-block px-4 py-2 bg-primary-blue text-white rounded-full text-sm hover:bg-ocean-blue transition-all duration-300 transform hover:-translate-y-1 shadow-md">
								View Details
							</Link>
						</div>
						
						{/* 500 ML Bottles */}
						<div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 shadow-sm transform hover:-translate-y-1">
							<div className="h-48 flex items-center justify-center mb-4">
								<img 
									src="/download (2).jpg" 
									alt="500 ML Water Bottle" 
									className="h-full object-contain rounded-xl transition-all duration-300"
								/>
							</div>
							<h3 className="text-xl font-bold text-primary-blue">500 ML Bottles</h3>
							<p className="text-ocean-blue font-bold mt-2">₹ 10 /- Per Bottle</p>
							<Link href="/products" className="mt-3 inline-block px-4 py-2 bg-primary-blue text-white rounded-full text-sm hover:bg-ocean-blue transition-all duration-300 transform hover:-translate-y-1 shadow-md">
								View Details
							</Link>
						</div>
						
						{/* 1 L Bottles */}
						<div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 shadow-sm transform hover:-translate-y-1">
							<div className="h-48 flex items-center justify-center mb-4">
								<img 
									src="/download (3).jpg" 
									alt="1 L Water Bottle" 
									className="h-full object-contain rounded-xl transition-all duration-300"
								/>
							</div>
							<h3 className="text-xl font-bold text-primary-blue">1 L Bottles</h3>
							<p className="text-ocean-blue font-bold mt-2">₹ 20 /- Per Bottle</p>
							<Link href="/products" className="mt-3 inline-block px-4 py-2 bg-primary-blue text-white rounded-full text-sm hover:bg-ocean-blue transition-all duration-300 transform hover:-translate-y-1 shadow-md">
								View Details
							</Link>
						</div>
						
						{/* 2L Bottles */}
						<div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 shadow-sm transform hover:-translate-y-1">
							<div className="h-48 flex items-center justify-center mb-4">
								<img 
									src="/images (1).jpg" 
									alt="2L Water Bottle" 
									className="h-full object-contain rounded-xl transition-all duration-300"
								/>
							</div>
							<h3 className="text-xl font-bold text-primary-blue">2L Bottles</h3>
							<p className="text-ocean-blue font-bold mt-2">₹ 30 /- Per Bottle</p>
							<Link href="/products" className="mt-3 inline-block px-4 py-2 bg-primary-blue text-white rounded-full text-sm hover:bg-ocean-blue transition-all duration-300 transform hover:-translate-y-1 shadow-md">
								View Details
							</Link>
						</div>
						
						{/* 20 L Jar */}
						<div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 shadow-sm transform hover:-translate-y-1">
							<div className="h-48 flex items-center justify-center mb-4">
								<img 
									src="/images (2).jpg" 
									alt="20 L Water Jar" 
									className="h-full object-contain rounded-xl transition-all duration-300"
								/>
							</div>
							<h3 className="text-xl font-bold text-primary-blue">20 L Jar</h3>
							<p className="text-ocean-blue font-bold mt-2">₹ 80 /- Per Bottle</p>
							<Link href="/products" className="mt-3 inline-block px-4 py-2 bg-primary-blue text-white rounded-full text-sm hover:bg-ocean-blue transition-all duration-300 transform hover:-translate-y-1 shadow-md">
								View Details
							</Link>
						</div>
					</div>
				</div>
			</section>
			
			{/* Why Our Packaged Drinking Water Stands Out? */}
			<section className="py-16 bg-blue-50 relative overflow-hidden">
				<div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images (3).jpg')" }}></div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Why Our Packaged Drinking Water Stands Out?</h2>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* Commitment to Safety and Taste */}
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="flex flex-col items-center mb-4">
								<div className="w-16 h-16 flex items-center justify-center mb-4">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
										<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
										<path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-primary-blue text-center">Commitment to Safety and Taste:</h3>
							</div>
							<p className="text-gray-600 text-center">
								Strict adherence to BIS and FSSAI guidelines ensures high safety and great taste.
							</p>
						</div>
						
						{/* Advanced Purification */}
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="flex flex-col items-center mb-4">
								<div className="w-16 h-16 flex items-center justify-center mb-4">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
										<path d="m14.5 9-5 5"></path>
										<path d="m9.5 9 5 5"></path>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-primary-blue text-center">Advanced Purification:</h3>
							</div>
							<p className="text-gray-600 text-center">
								Multi-step filtration and purification systems guarantee world-class packaged drinking water quality.
							</p>
						</div>
						
						{/* Stringent Process */}
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="flex flex-col items-center mb-4">
								<div className="w-16 h-16 flex items-center justify-center mb-4">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
										<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
										<path d="m9 12 2 2 4-4"></path>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-primary-blue text-center">Stringent Process:</h3>
							</div>
							<p className="text-gray-600 text-center">
								Careful water collection from premium sources, filtration, UV sterilization, and sanitized bottling.
							</p>
						</div>
						
						{/* Quality Assurance */}
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="flex flex-col items-center mb-4">
								<div className="w-16 h-16 flex items-center justify-center mb-4">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
										<path d="M12.01 2.011a3.2 3.2 0 0 1 2.113.797l.154.145.698.698a.2.2 0 0 0 .142.058h1.012a3.2 3.2 0 0 1 3.195 3.039l.005.161v1.012a.2.2 0 0 0 .058.142l.698.698a3.2 3.2 0 0 1 .148 4.366l-.145.154-.698.698a.2.2 0 0 0-.058.142v1.012a3.2 3.2 0 0 1-3.039 3.195l-.161.005h-1.012a.2.2 0 0 0-.142.058l-.698.698a3.2 3.2 0 0 1-4.366.148l-.154-.145-.698-.698a.2.2 0 0 0-.142-.058H8.871a3.2 3.2 0 0 1-3.195-3.039l-.005-.161v-1.012a.2.2 0 0 0-.058-.142l-.698-.698a3.2 3.2 0 0 1-.148-4.366l.145-.154.698-.698a.2.2 0 0 0 .058-.142V8.871a3.2 3.2 0 0 1 3.039-3.195l.161-.005h1.012a.2.2 0 0 0 .142-.058l.698-.698a3.2 3.2 0 0 1 2.253-.942z"></path>
										<path d="m9 12 2 2 4-4"></path>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-primary-blue text-center">Quality Assurance:</h3>
							</div>
							<p className="text-gray-600 text-center">
								Human inspection, modern equipment, and automated sanitation ensure zero defects in our packaged drinking water.
							</p>
						</div>
						
						{/* Modern Facilities */}
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="flex flex-col items-center mb-4">
								<div className="w-16 h-16 flex items-center justify-center mb-4">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
										<path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
										<path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
										<path d="M12 3v6"></path>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-primary-blue text-center">Modern Facilities:</h3>
							</div>
							<p className="text-gray-600 text-center">
								State-of-the-art production facilities with advanced technology for consistent quality.
							</p>
						</div>
						
						{/* Nutritional Enhancement */}
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="flex flex-col items-center mb-4">
								<div className="w-16 h-16 flex items-center justify-center mb-4">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
										<path d="M10 2v7.31"></path>
										<path d="M14 9.3V1.99"></path>
										<path d="M8.5 2h7"></path>
										<path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
										<path d="M5.58 16.5h12.85"></path>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-primary-blue text-center">Nutritional Enhancement:</h3>
							</div>
							<p className="text-gray-600 text-center">
								Our water is enriched with essential minerals that contribute to your overall health and well-being.
							</p>
						</div>
						
						{/* Regular Testing */}
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="flex flex-col items-center mb-4">
								<div className="w-16 h-16 flex items-center justify-center mb-4">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
										<path d="M10 2v7.31"></path>
										<path d="M14 9.3V1.99"></path>
										<path d="M8.5 2h7"></path>
										<path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
										<path d="M5.58 16.5h12.85"></path>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-primary-blue text-center">Regular Testing:</h3>
							</div>
							<p className="text-gray-600 text-center">
								Continuous quality monitoring and testing to ensure consistent excellence in every bottle.
							</p>
						</div>
						
						{/* Customer Commitment */}
						<div className="bg-white rounded-lg p-6 shadow-md">
							<div className="flex flex-col items-center mb-4">
								<div className="w-16 h-16 flex items-center justify-center mb-4">
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
										<path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
									</svg>
								</div>
								<h3 className="text-xl font-bold text-primary-blue text-center">Customer Commitment:</h3>
							</div>
							<p className="text-gray-600 text-center">
								Dedicated to customer satisfaction with reliable service and consistent quality.
							</p>
						</div>
					</div>
				</div>
			</section>
			
			{/* Our Commitment to Mineral Water Bottle */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Enjoy the clean, refreshing taste of Cristal Clear mineral water</h2>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							Crafted with excellence for optimal hydration and health benefits.
						</p>
					</div>
					
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
						<div className="bg-blue-50 rounded-lg p-8 shadow-md">
							<h3 className="text-2xl font-bold text-primary-blue mb-6">OUR COMMITMENT TO MINERAL WATER BOTTLE:</h3>
							<ul className="space-y-6">
								<li className="flex items-start gap-3">
									<div className="text-primary-blue font-bold mt-1">•</div>
									<div>
										<span className="font-bold text-primary-blue">High Safety and Great Taste:</span> As a mineral water manufacturer, we strictly follow the Bureau of Indian Standards (BIS) and Food Safety and Standards Authority of India (FSSAI) guidelines.
									</div>
								</li>
								<li className="flex items-start gap-3">
									<div className="text-primary-blue font-bold mt-1">•</div>
									<div>
										<span className="font-bold text-primary-blue">Advanced Purification:</span> Our plants use multi-step water filtration and purification systems to ensure world-class quality.
									</div>
								</li>
							</ul>
							
							<h3 className="text-2xl font-bold text-primary-blue mt-8 mb-6">PACKAGED BOTTLE QUALITY ASSURANCE:</h3>
							<ul className="space-y-6">
								<li className="flex items-start gap-3">
									<div className="text-primary-blue font-bold mt-1">•</div>
									<div>
										<span className="font-bold text-primary-blue">Packaging Quality:</span> Our packed water bottle goes through human inspection and other modern equipment testing, which ensures zero defects.
									</div>
								</li>
								<li className="flex items-start gap-3">
									<div className="text-primary-blue font-bold mt-1">•</div>
									<div>
										<span className="font-bold text-primary-blue">Line Sanitation:</span> Automated cleaning equipment guarantees maximum cleanliness and control.
									</div>
								</li>
							</ul>
						</div>
						
						<div className="relative">
							<div className="bg-blue-100 rounded-2xl p-4 overflow-hidden transform transition-transform hover:scale-105 duration-500">
								<img 
									src="/ChatGPT Image Aug 25, 2025, 04_41_33 AM.png" 
									alt="Cristal Clear Water Bottles" 
									className="w-full h-auto object-contain rounded-xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			
			{/* Our Process */}
			<section className="py-16 bg-blue-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">Our Process</h2>
					</div>
					
					<div className="relative">
						<div className="bg-white rounded-2xl shadow-lg overflow-hidden">
							<div className="relative">
								<img 
									src="/images (4).jpg" 
									alt="Water Bottle Process Background" 
									className="w-full h-auto rounded-t-2xl"
								/>
								
								<div className="absolute inset-0 flex flex-col">
									{/* Step 1 */}
									<div className="flex items-center h-1/6">
										<div className="w-1/2 pr-8 text-right">
											<div className="flex justify-end items-center">
												<div className="mr-4">
													<h3 className="text-xl font-bold text-primary-blue">Top Source Water Collection:</h3>
													<p className="text-sm text-gray-600">
														Carefully collect top quality water from the best sources and ensure rigorous testing for consistent excellence.
													</p>
												</div>
												<div className="bg-blue-100 rounded-full p-2">
													<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
														<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
													</svg>
												</div>
											</div>
										</div>
										<div className="w-1/2 flex justify-start items-center">
											<div className="bg-primary-blue rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
												1
											</div>
										</div>
									</div>
									
									{/* Step 2 */}
									<div className="flex items-center h-1/6">
										<div className="w-1/2"></div>
										<div className="w-1/2 pl-8">
											<div className="flex items-center">
												<div className="bg-primary-blue rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mr-4">
													2
												</div>
												<div>
													<h3 className="text-xl font-bold text-primary-blue">Filtration:</h3>
													<p className="text-sm text-gray-600">
														Sand and carbon filters effectively remove foreign substances and odors from the water filtration process.
													</p>
												</div>
											</div>
										</div>
									</div>
									
									{/* Step 3 */}
									<div className="flex items-center h-1/6">
										<div className="w-1/2 pr-8 text-right">
											<div className="flex justify-end items-center">
												<div className="mr-4">
													<h3 className="text-xl font-bold text-primary-blue">Ultra-Filtration:</h3>
													<p className="text-sm text-gray-600">
														This removes particles that are too small to see, making the water free of impurities and safe to drink.
													</p>
												</div>
												<div className="bg-blue-100 rounded-full p-2">
													<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
														<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
													</svg>
												</div>
											</div>
										</div>
										<div className="w-1/2 flex justify-start items-center">
											<div className="bg-primary-blue rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
												3
											</div>
										</div>
									</div>
									
									{/* Step 4 */}
									<div className="flex items-center h-1/6">
										<div className="w-1/2"></div>
										<div className="w-1/2 pl-8">
											<div className="flex items-center">
												<div className="bg-primary-blue rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mr-4">
													4
												</div>
												<div>
													<h3 className="text-xl font-bold text-primary-blue">Reverse Osmosis:</h3>
													<p className="text-sm text-gray-600">
														This process removes excess and unwanted minerals while adding selected minerals for the right nutrition.
													</p>
												</div>
											</div>
										</div>
									</div>
									
									{/* Step 5 */}
									<div className="flex items-center h-1/6">
										<div className="w-1/2 pr-8 text-right">
											<div className="flex justify-end items-center">
												<div className="mr-4">
													<h3 className="text-xl font-bold text-primary-blue">UV Sterilization:</h3>
													<p className="text-sm text-gray-600">
														UV sterilization provides additional disinfection, which is monitored hourly to ensure water safety and purity.
													</p>
												</div>
												<div className="bg-blue-100 rounded-full p-2">
													<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
														<circle cx="12" cy="12" r="4"></circle>
														<path d="M12 2v2"></path>
														<path d="M12 20v2"></path>
														<path d="m4.93 4.93 1.41 1.41"></path>
														<path d="m17.66 17.66 1.41 1.41"></path>
														<path d="M2 12h2"></path>
														<path d="M20 12h2"></path>
														<path d="m6.34 17.66-1.41 1.41"></path>
														<path d="m19.07 4.93-1.41 1.41"></path>
													</svg>
												</div>
											</div>
										</div>
										<div className="w-1/2 flex justify-start items-center">
											<div className="bg-primary-blue rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">
												5
											</div>
										</div>
									</div>
									
									{/* Step 6 */}
									<div className="flex items-center h-1/6">
										<div className="w-1/2"></div>
										<div className="w-1/2 pl-8">
											<div className="flex items-center">
												<div className="bg-primary-blue rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl mr-4">
													6
												</div>
												<div>
													<h3 className="text-xl font-bold text-primary-blue">Sanitized Filling Room:</h3>
													<p className="text-sm text-gray-600">
														The bottling process takes place in a clean and sanitized room, guaranteeing a controlled and hygienic environment for the highest standards of safety.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Mineral Benefits Section */}
			<section className="py-16 bg-blue-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4 transform transition-all duration-500 hover:scale-105">Mineral Benefits</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Our water is enriched with essential minerals that contribute to your overall health and well-being.
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Calcium */}
						<div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-2 duration-300">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto transform transition-all duration-500 hover:rotate-12">
								<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
									<path d="M2 12h20M12 2v20M22 18H2M18 22V2"></path>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-primary-blue text-center mb-2">Calcium</h3>
							<p className="text-gray-600 text-center">
								Plays a vital role in maintaining healthy bones and teeth, facilitating muscle movement, and nerve communication.
							</p>
						</div>
						
						{/* Magnesium */}
						<div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-2 duration-300">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto transform transition-all duration-500 hover:rotate-12">
								<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
									<circle cx="12" cy="12" r="10"></circle>
									<path d="M8 12h8M12 8v8"></path>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-primary-blue text-center mb-2">Magnesium</h3>
							<p className="text-gray-600 text-center">
								Important for over 300 biochemical reactions in the body, including energy production and muscle function.
							</p>
						</div>
						
						{/* Potassium */}
						<div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-2 duration-300">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto transform transition-all duration-500 hover:rotate-12">
								<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
									<path d="M8 2h8M12 2v20M2 12h20"></path>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-primary-blue text-center mb-2">Potassium</h3>
							<p className="text-gray-600 text-center">
								An essential electrolyte that plays an important role in maintaining fluid balance and muscle function.
							</p>
						</div>
						
						{/* Bicarbonates */}
						<div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-2 duration-300">
							<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto transform transition-all duration-500 hover:rotate-12">
								<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
									<circle cx="12" cy="12" r="10"></circle>
									<path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"></path>
								</svg>
							</div>
							<h3 className="text-xl font-bold text-primary-blue text-center mb-2">Bicarbonates</h3>
							<p className="text-gray-600 text-center">
								Help maintain the body's pH balance and support digestive health by neutralizing stomach acid.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Quality Assurance Section */}
			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">Our Quality Assurance</h2>
							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
											<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
											<polyline points="22 4 12 14.01 9 11.01"></polyline>
										</svg>
									</div>
									<div>
										<h3 className="text-xl font-bold text-primary-blue mb-2">Strict Compliance</h3>
										<p className="text-gray-600">
											Strict adherence to BIS and FSSAI guidelines ensures high safety and great taste in every bottle.
										</p>
									</div>
								</div>
								
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
											<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
										</svg>
									</div>
									<div>
										<h3 className="text-xl font-bold text-primary-blue mb-2">Advanced Filtration</h3>
										<p className="text-gray-600">
											Multi-step filtration and purification systems guarantee world-class packaged drinking water quality.
										</p>
									</div>
								</div>
								
								<div className="flex items-start gap-4">
									<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-blue">
											<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
											<line x1="16" y1="8" x2="2" y2="22"></line>
											<line x1="17.5" y1="15" x2="9" y2="15"></line>
										</svg>
									</div>
									<div>
										<h3 className="text-xl font-bold text-primary-blue mb-2">Premium Sourcing</h3>
										<p className="text-gray-600">
											Careful water collection from premium sources, filtration, UV sterilization, and sanitized bottling.
										</p>
									</div>
								</div>
							</div>
						</div>
						
						<div className="relative">
							<div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50 z-0"></div>
							<img 
								src="https://images.unsplash.com/photo-1536939459926-301728717817?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
								alt="Water Quality Testing" 
								className="rounded-lg shadow-xl relative z-10"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-16 bg-blue-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4 transform transition-all duration-500 hover:scale-105">Frequently Asked Questions</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Find answers to common questions about Cristal Clear Water products and services.
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-2 duration-300">
							<h3 className="text-xl font-bold text-primary-blue mb-3">Is Cristal Clear Water safe for all ages?</h3>
							<p className="text-gray-600">
								Absolutely, Cristal Clear Water is suitable for consumption by individuals of all ages, including children and expectant mothers. It complies with all regulations and undergoes rigorous testing to guarantee its safety.
							</p>
						</div>
						
						<div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-2 duration-300">
							<h3 className="text-xl font-bold text-primary-blue mb-3">What makes Cristal Clear Water different?</h3>
							<p className="text-gray-600">
								Our water is renowned for its cleanliness, purity, safety, and taste. We are committed to maintaining the best standards in accordance with the requirements set by BIS and FSSAI.
							</p>
						</div>
						
						<div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-2 duration-300">
							<h3 className="text-xl font-bold text-primary-blue mb-3">Do you offer home delivery?</h3>
							<p className="text-gray-600">
								Yes, we offer convenient home delivery services. Contact us to set up regular deliveries or one-time orders to your doorstep.
							</p>
						</div>
						
						<div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-2 duration-300">
							<h3 className="text-xl font-bold text-primary-blue mb-3">How can I become a distributor?</h3>
							<p className="text-gray-600">
								We welcome new distributors to join our network. Please visit our "Become a Distributor" page or contact us directly for more information about partnership opportunities.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="py-12 md:py-16 bg-gradient-to-r from-primary-blue to-ocean-blue text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Experience the Cristal Clear Difference</h2>
					<p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 md:mb-8">
						Join thousands of satisfied customers who trust Cristal Clear Water for their hydration needs.
					</p>
					<div className="flex flex-wrap justify-center gap-3 md:gap-4">
						<Link href="/products" className="px-6 py-2 md:px-8 md:py-3 bg-white text-primary-blue font-medium rounded-full hover:bg-blue-50 transition-all duration-300 shadow-md transform hover:-translate-y-1">
							View Products
						</Link>
						<Link href="/contact" className="px-6 py-2 md:px-8 md:py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-primary-blue transition-all duration-300 transform hover:-translate-y-1">
							Contact Us
						</Link>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div>
							<h3 className="text-xl font-bold mb-4">Cristal Clear Water</h3>
							<p className="text-gray-400 mb-4">
								Premium packaged drinking water for a healthier lifestyle.
							</p>
							<div className="flex space-x-4">
								<Link href="https://twitter.com" target="_blank" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
									</svg>
								</Link>
								<Link href="https://facebook.com" target="_blank" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
									</svg>
								</Link>
								<Link href="https://instagram.com" target="_blank" aria-label="Instagram" className="hover:text-blue-400 transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
										<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
										<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
									</svg>
								</Link>
								<Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
										<rect x="2" y="9" width="4" height="12"></rect>
										<circle cx="4" cy="4" r="2"></circle>
									</svg>
								</Link>
							</div>
						</div>
						
						<div>
							<h3 className="text-xl font-bold mb-4">Quick Links</h3>
							<ul className="space-y-2">
								<li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
								<li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
								<li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
								<li><Link href="/blogs" className="text-gray-400 hover:text-white transition-colors">Blogs</Link></li>
								<li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
							</ul>
						</div>
						
						<div>
							<h3 className="text-xl font-bold mb-4">Products</h3>
							<ul className="space-y-2">
								<li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">250ml Bottle</Link></li>
								<li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">500ml Bottle</Link></li>
								<li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">1L Bottle</Link></li>
								<li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">2L Bottle</Link></li>
								<li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">20L Can</Link></li>
							</ul>
						</div>
						
						<div>
							<h3 className="text-xl font-bold mb-4">Contact Us</h3>
							<ul className="space-y-2">
								<li className="flex items-start gap-2">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
										<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
										<circle cx="12" cy="10" r="3"></circle>
									</svg>
									<span className="text-gray-400">123 Water Street, Crystal City, State 12345</span>
								</li>
								<li className="flex items-center gap-2">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
										<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
									</svg>
									<span className="text-gray-400">+91 6389-457042</span>
								</li>
								<li className="flex items-center gap-2">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
										<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
									</svg>
									<span className="text-gray-400">6388523335</span>
								</li>
								<li className="flex items-center gap-2">
									<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
										<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
										<polyline points="22,6 12,13 2,6"></polyline>
									</svg>
									<span className="text-gray-400">syedsahab750@gmail.com</span>
								</li>
							</ul>
						</div>
					</div>
					
					<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
						<p>&copy; {new Date().getFullYear()} Cristal Clear Water. All rights reserved.</p>
					</div>
				</div>
			</footer>

			{/* WhatsApp Floating Button */}
			<div className="fixed bottom-6 right-6 z-50">
				<Link 
					href="https://wa.me/916389457042?text=Hello%20Cristal%20Clear%20Water,%20I%20would%20like%20to%20place%20an%20order." 
					target="_blank"
					className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
					aria-label="Contact us on WhatsApp"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
						<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
					</svg>
				</Link>
			</div>
		</main>
	);
}

