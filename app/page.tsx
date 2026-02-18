import { Footer } from "@/components/homepage/footer";
import { HeroSection } from "@/components/homepage/hero-section";
import { FeatureSection } from "@/components/homepage/feature-section";
import { SnapshotSection } from "@/components/homepage/snapshot-section";

export default function Home() {
	return (
		<div className="overflow-x-hidden">
			<HeroSection />
			<SnapshotSection />
			<FeatureSection />
			<Footer />
		</div>
	);
}
