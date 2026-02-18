import Link from "next/link";
import { Logo } from "./logo";
import { GridCell, GridRow } from "./grid";
import { ArrowRight, MenuIcon } from "@/components/ui/icons";

const navList = [
	{ title: "Home", link: "/" },
	{ title: "About", link: "/about" },
	{ title: "Services", link: "/services" },
	{ title: "Login", link: "/login" },
];

export function Navbar() {
	return (
		<header className="pt-12 sm:pt-16">
			<GridRow className="flex justify-between">
				<div className="relative flex gap-6">
					<GridCell className="py-3">
						<Logo />
					</GridCell>
					<Banner message="Radiant raises $100M Series A from Tailwind Ventures" />
				</div>
				<DesktopNavbar />
				<HamburgerMenu />
			</GridRow>
		</header>
	);
}

const DesktopNavbar = () => (
	<nav className="relative hidden lg:flex">
		{navList.map((item) => (
			<GridCell key={item.title}>
				<Link
					href={item.link}
					className="flex items-center px-4 py-3 text-base font-medium text-gray-950 bg-blend-multiply hover:bg-black/2.5"
				>
					{item.title}
				</Link>
			</GridCell>
		))}
	</nav>
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
