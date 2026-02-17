import React from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { ArrowRight, MenuIcon, PlusIcon } from "../ui/icons";

const navList = [
	{ title: "Home", link: "/" },
	{ title: "About", link: "/about" },
	{ title: "Services", link: "/services" },
	{ title: "Contact", link: "/contact" },
];

export function Navbar() {
	return (
		<header className="pt-12 sm:pt-16">
			<div className="group/row relative isolate flex justify-between pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]">
				<NavBorder top bottom />
				<div className="relative flex gap-6">
					<NavBarItem className="py-3">
						<Logo />
					</NavBarItem>
					<Banner message="Radiant raises $100M Series A from Tailwind Ventures" />
				</div>
				<DesktopNavbar />
				<HamburgerMenu />
			</div>
		</header>
	);
}

const DesktopNavbar = () => (
	<nav className="relative hidden lg:flex">
		{navList.map((item) => (
			<NavBarItem key={item.title}>
				<Link
					href={item.link}
					className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply hover:bg-black/2.5"
				>
					{item.title}
				</Link>
			</NavBarItem>
		))}
	</nav>
);

const NavBarItem = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => (
	<div className={cn("group/item relative flex", className)}>
		<PlusIcon className="-top-2 -left-2 group-first/item:block" />
		<PlusIcon className="-top-2 -right-2" />
		<PlusIcon className="-bottom-2 -left-2 group-first/item:group-last/row:block" />
		<PlusIcon className="-right-2 -bottom-2 group-last/row:block" />
		{children}
	</div>
);

const NavBorder = ({
	className,
	top,
	bottom,
}: {
	className?: string;
	top: boolean;
	bottom: boolean;
}) => (
	<div
		className={cn(
			"absolute inset-y-0 left-1/2 w-screen -translate-x-1/2",
			className,
		)}
	>
		{top && (
			<>
				<div className="absolute inset-x-0 top-0 border-t border-black/5" />
				<div className="absolute inset-x-0 top-2 border-t border-black/5" />
			</>
		)}
		{bottom && (
			<>
				<div className="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block" />
				<div className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block" />
			</>
		)}
	</div>
);

const Banner = ({ message }: { message: string }) => (
	<div className="relative hidden items-center py-3 lg:flex">
		<Link
			className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white hover:bg-fuchsia-950/30"
			href="#"
		>
			{message}
			<ArrowRight />
		</Link>
	</div>
);

const HamburgerMenu = () => (
	<button
		className="flex size-12 items-center justify-center self-center rounded-lg hover:bg-black/5 lg:hidden"
		aria-label="Open main menu"
		type="button"
		aria-expanded="false"
		data-headlessui-state=""
	>
		<MenuIcon />
	</button>
);
