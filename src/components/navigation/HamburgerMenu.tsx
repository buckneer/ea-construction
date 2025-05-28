"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { links } from ".";

export function HamburgerMenu() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	const overlayVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.95 },
	};

	return (
		<div className="md:hidden">
			{/* Top Bar with Logo & Toggle */}
			<div className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50">
				{/* Logo on Left */}
				<Link
					href="/"
					onClick={() => setOpen(false)}
					className="flex items-center space-x-2"
				>
					<Image
						src="/img/logos/logo-new.png"
						alt="EA Construction"
						width={40}
						height={40}
						className="rounded-full"
					/>
					<span className="text-lg font-bold text-gray-900">EA Construction</span>
				</Link>
				{/* Toggle Icon on Right */}
				<button
					onClick={() => setOpen(!open)}
					className="p-2 focus:outline-none transition-transform duration-300"
					aria-label="Toggle menu"
				>
					{open ? (
						<FaTimes className="h-8 w-8 text-gray-800 rotate-90" />
					) : (
						<FaBars className="h-8 w-8 text-gray-800" />
					)}
				</button>
			</div>

			{/* Animated Fullscreen Overlay Menu */}
			<AnimatePresence>
				{open && (
					<motion.div
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={overlayVariants}
						transition={{ duration: 0.3 }}
						className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 z-40"
					>
						<nav className="w-full px-6">
							<ul className="flex flex-col items-center space-y-6">
								{links.map(link => {
									const isActive = pathname === link.href;
									return (
										<li key={link.href}>
											<Link
												href={link.href}
												onClick={() => setOpen(false)}
												className={`text-2xl font-semibold transition-colors ${
													isActive
														? "text-green-600"
														: "text-gray-800 hover:text-green-600"
												}`}
											>
												{link.name}
											</Link>
										</li>
									);
								})}
							</ul>
						</nav>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
