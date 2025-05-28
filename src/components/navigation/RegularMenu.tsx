"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { links } from ".";



export default function RegularMenu() {
	const pathname = usePathname();

	return (
		<header className="bg-white shadow-md border-b sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
				{/* Logo */}
				<Link
					href="/"
					className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
				>
					<Image
						src="/img/logos/logo-new.png"
						alt="EA Construction"
						width={60}
						height={60}
					/>
					<div>
						<h1 className="text-2xl font-extrabold text-gray-900 leading-tight">
							EA Construction Solutions
						</h1>
						<p className="text-xs text-gray-500 tracking-wide">
							Professional Building Services • Brugge, Belgium
						</p>
					</div>
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex items-center space-x-12">
					{links.map(link => {
						const isActive = pathname === link.href;
						return (
							<Link
								key={link.href}
								href={link.href}
								className={`text-lg transition-colors font-medium ${
									isActive
										? "text-green-600 underline underline-offset-4"
										: "text-gray-700 hover:text-green-600 hover:underline hover:underline-offset-4"
								}`}
							>
								{link.name}
							</Link>
						);
					})}
				</nav>

				{/* Contact Buttons */}
				<div className="flex items-center space-x-4">
					<Button
						variant="outline"
						size="sm"
						className="hidden sm:flex border-green-600 text-green-600 hover:bg-green-50 rounded-lg"
					>
						<Phone className="h-4 w-4 mr-2" />
						+32 50 123 456
					</Button>
					<Button
						size="sm"
						className="bg-green-600 hover:bg-green-700 rounded-lg shadow-sm"
					>
						<MessageCircle className="h-4 w-4 mr-2" />
						WhatsApp
					</Button>
				</div>
			</div>
		</header>
	);
}
