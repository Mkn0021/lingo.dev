import { FeatureSection } from "@/components/homepage/feature-section";
import { Footer } from "@/components/homepage/footer";
import { HeroSection } from "@/components/homepage/hero-section";

export default function Home() {
	return (
		<>
			<HeroSection />
			<FeatureSection />
			<Footer />
		</>
	);
}
