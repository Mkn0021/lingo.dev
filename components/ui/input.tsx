import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				"placeholder:text-muted-foreground aria-invalid:ring-destructive block w-full rounded-lg border border-transparent px-2 py-1.5 text-base/6 shadow-sm ring-1 ring-black/10 focus:outline-2 focus:-outline-offset-1 focus:outline-black sm:text-sm/6",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
