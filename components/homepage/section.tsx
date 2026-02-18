import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
	children: React.ReactNode;
	className?: string;
	pinLabel?: string;
	title: string;
}

export function Section({
	children,
	className,
	pinLabel,
	title,
}: SectionProps) {
	return (
		<section className={cn("px-6 pt-24 lg:px-8", className)}>
			<div className="mx-auto max-w-2xl lg:max-w-7xl">
				<h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
					{pinLabel}
				</h2>
				<h3 className="mt-2 max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
					{title}
				</h3>
				{children}
			</div>
		</section>
	);
}
