import { cn } from "@/lib/utils";
import { PlusIcon } from "@/components/ui/icons";

interface GridProps {
	className?: string;
	children?: React.ReactNode;
	top?: boolean;
	bottom?: boolean;
}

export function GridRow({
	className,
	children,
	top = true,
	bottom = true,
}: GridProps) {
	return (
		<div
			className={cn(
				"group/row relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]",
				className,
			)}
		>
			<GridBorder top={top} bottom={bottom} />
			{children}
		</div>
	);
}

export const GridBorder = ({ className, top, bottom }: GridProps) => (
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

export const GridCell = ({
	className,
	children,
	top = true,
	bottom = true,
}: GridProps) => (
	<div className={cn("group/item relative flex", className)}>
		{top && (
			<>
				<PlusIcon className="-top-2 -left-2 group-first/item:block" />
				<PlusIcon className="-top-2 -right-2" />
			</>
		)}
		{bottom && (
			<>
				<PlusIcon className="-bottom-2 -left-2 group-first/item:group-last/row:block" />
				<PlusIcon className="-right-2 -bottom-2 group-last/row:block" />
			</>
		)}
		{children}
	</div>
);
