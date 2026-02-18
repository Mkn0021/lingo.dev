import React from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { GridCell, GridRow } from "./grid";
import { GradientBackground } from "./hero-section";
import { Button } from "@/components/ui/button";
import { FacebookIcon, LinkedinIcon, XIcon } from "@/components/ui/icons";

const footerLinks = [
	{
		title: "Product",
		links: [
			{ label: "Pricing", href: "/pricing" },
			{ label: "Analysis", href: "#" },
			{ label: "API", href: "#" },
		],
	},
	{
		title: "Company",
		links: [
			{ label: "Careers", href: "#" },
			{ label: "Blog", href: "/blog" },
			{ label: "Company", href: "/company" },
		],
	},
	{
		title: "Support",
		links: [
			{ label: "Help center", href: "#" },
			{ label: "Community", href: "#" },
		],
	},
	{
		title: "Legal",
		links: [
			{ label: "Terms of service", href: "#" },
			{ label: "Privacy policy", href: "#" },
		],
	},
] as const;

const socialLinks = [
	{
		label: "Visit us on Facebook",
		href: "https://facebook.com",
		Icon: FacebookIcon,
	},
	{
		label: "Visit us on X",
		href: "https://x.com",
		Icon: XIcon,
	},
	{
		label: "Visit us on LinkedIn",
		href: "https://linkedin.com",
		Icon: LinkedinIcon,
	},
] as const;

export function Footer() {
	return (
		<FooterContainer>
			<div className="relative pt-20 pb-16 text-center sm:py-24">
				<hgroup>
					<h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
						Get started
					</h2>
					<p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
						Ready to dive in?
						<br />
						Start your free trial today.
					</p>
				</hgroup>
				<p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
					Get the cheat codes for selling and unlock your team's revenue
					potential.
				</p>
				<Button className="mt-6" asChild>
					<Link href="/login?tab=sign-up">Get started</Link>
				</Button>
			</div>
			<div className="pb-16">
				<GridRow>
					<div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
						<div className="col-span-2 flex">
							<GridCell className="pt-6 lg:pb-6" bottom={false}>
								<Logo />
							</GridCell>
						</div>
						<FooterLink />
					</div>
				</GridRow>
				<GridRow className="flex items-center justify-between">
					<GridCell className="py-2 text-sm/6 text-gray-950">
						© 2026 Radiant Inc.
					</GridCell>
					<GridCell className="gap-8 py-3">
						<SocialLinks />
					</GridCell>
				</GridRow>
			</div>
		</FooterContainer>
	);
}

const FooterContainer = ({ children }: { children: React.ReactNode }) => (
	<footer className="relative mt-24">
		<GradientBackground className="inset-0 rounded-none" />
		<div className="absolute inset-2 rounded-4xl bg-white/80" />
		<div className="px-6 lg:px-8">
			<div className="mx-auto max-w-2xl lg:max-w-7xl">{children}</div>
		</div>
	</footer>
);

const FooterLink = () => (
	<div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
		{footerLinks.map((section) => (
			<div key={section.title}>
				<h3 className="text-sm/6 font-medium text-gray-950/50">
					{section.title}
				</h3>

				<ul className="mt-6 space-y-4 text-sm/6">
					{section.links.map((link) => (
						<li key={link.label}>
							<a
								className="font-medium text-gray-950 data-hover:text-gray-950/75"
								href={link.href}
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		))}
	</div>
);

const SocialLinks = () => (
	<>
		{socialLinks.map(({ href, label, Icon }) => (
			<Link
				key={href}
				target="_blank"
				rel="noreferrer"
				aria-label={label}
				className="text-gray-950 data-hover:text-gray-950/75"
				href={href}
			>
				<Icon />
			</Link>
		))}
	</>
);
