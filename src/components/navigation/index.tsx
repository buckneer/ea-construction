"use client";

import { useWidth } from "@/hooks/useWidth";
import RegularMenu from "./RegularMenu";
import { HamburgerMenu } from "./HamburgerMenu";


export const links = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Services", href: "/services" },
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

const Navbar = () => {
	const regular = useWidth();


	return regular ? <RegularMenu /> : <HamburgerMenu />;
};

export default Navbar;
