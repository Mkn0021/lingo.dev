import { Section } from "./section";

export function SnapshotSection() {
	return (
		<Section
			pinLabel="AI-powered"
			title={
				<>
					The magic behind
					<br />
					language-agnostic search.
				</>
			}
		>
			<div className="relative mt-16 aspect-1216/768 h-144 [--radius:var(--radius-xl)] sm:h-auto sm:w-304">
				<div className="absolute -inset-(--padding) rounded-[calc(var(--radius)+var(--padding))] shadow-xs ring-1 ring-black/5 [--padding:--spacing(2)]" />
				<div className="h-full rounded-lg shadow-2xl ring-1 ring-black/10" />
			</div>
		</Section>
	);
}
