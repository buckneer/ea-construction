import ChooseUs from "@/components/Home/ChooseUs";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";

export default function Home() {
	return (
		<div className="">
			<Hero />
			<Services />
			<ChooseUs />
			<Projects />
			<Contact />
		</div>
	);
}
