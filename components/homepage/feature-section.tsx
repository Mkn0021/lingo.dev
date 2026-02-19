import React from "react";
import { Section } from "./section";
import { cn } from "@/lib/utils";

const features = [
	{
		pinLabel: "Upload",
		title: "Drop any document.",
		description:
			"Upload PDFs in Spanish, French, or Japanese. LinguaBot automatically extracts and prepares the text.",
		className: "max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl",
		children: <div className="h-full" />,
	},
	{
		pinLabel: "Ask",
		title: "Type your question.",
		description:
			"Ask naturally in English. LinguaBot translates your query behind the scenes before searching.",
		className: "lg:col-span-3 lg:rounded-tr-4xl",
		children: <div className="h-full" />,
	},
	{
		pinLabel: "Search",
		title: "Find the answer.",
		description:
			"Semantic search finds relevant chunks across all your documents, regardless of their original language.",
		className: "lg:col-span-2 lg:rounded-bl-4xl",
		children: <div className="h-full" />,
	},
	{
		pinLabel: "Translate",
		title: "Get it back.",
		description:
			"Results are translated instantly to your preferred language, even when the source was Spanish, French, or Japanese.",
		className: "lg:col-span-2",
		children: <div className="h-full" />,
	},
	{
		pinLabel: "Scale",
		title: "Connect databases.",
		description:
			"Query multilingual SQL tables directly. Ask in English, search across translated database columns. (coming soon)",
		className: "lg:col-span-2 lg:rounded-br-4xl",
		children: <div className="h-full" />,
	},
];

interface FeatureSkeletonProps {
	children?: React.ReactNode;
	className?: string;
	pinLabel: string;
	title: string;
	description: string;
}

export function FeatureSection() {
	return (
		<Section
			pinLabel="Features"
			title={
				<>
					Language should never
					<br />
					block information.
				</>
			}
		>
			<div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
				{features.map((feature) => (
					<FeatureSkeleton
						key={feature.pinLabel}
						pinLabel={feature.pinLabel}
						title={feature.title}
						description={feature.description}
						className={feature.className}
					>
						{feature.children}
					</FeatureSkeleton>
				))}
			</div>
		</Section>
	);
}

const FeatureSkeleton = ({
	children,
	className,
	pinLabel,
	title,
	description,
}: FeatureSkeletonProps) => (
	<div
		className={cn(
			"group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-xs ring-1 ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15",
			className,
		)}
	>
		<div className="flex min-h-80 flex-1 flex-col justify-stretch">
			{children}
		</div>
		<div className="relative p-10">
			<h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
				{pinLabel}
			</h3>
			<p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-dark:text-white">
				{title}
			</p>
			<p className="mt-2 max-w-150 text-sm/6 text-gray-600 group-data-dark:text-gray-400">
				{description}
			</p>
		</div>
	</div>
);
