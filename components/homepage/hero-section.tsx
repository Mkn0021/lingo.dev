import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Navbar } from "./navbar";
import { Button } from "@/components/ui/button";

export function HeroSection() {
	return (
		<HeroContainer>
			<Navbar />
			<div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
				<h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
					Close every deal.
				</h1>
				<p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
					Radiant helps you sell more by revealing sensitive information about
					your customers.
				</p>
				<div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
					<Button asChild>
						<Link href="/login?tab=sign-up">Get started</Link>
					</Button>
					<Button variant="secondary" asChild>
						<Link href="#">See pricing</Link>
					</Button>
				</div>
			</div>
		</HeroContainer>
	);
}

const HeroContainer = ({ children }: { children?: React.ReactNode }) => (
	<div className="relative max-w-full overflow-hidden">
		<GradientBackground className="ring-1 ring-black/5 ring-inset" />
		<div className="relative px-6 lg:px-8">
			<div className="mx-auto max-w-2xl lg:max-w-7xl">{children}</div>
		</div>
	</div>
);

export const GradientBackground = ({ className }: { className?: string }) => (
	<div
		className={cn(
			"absolute inset-2 bottom-0 rounded-4xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-linear-145",
			className,
		)}
	/>
);
