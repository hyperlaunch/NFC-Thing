import clsx from "clsx";
import type { ReactNode } from "react";
import { Link, useRoute } from "wouter";

export default function Tab({
	href,
	children,
}: { href: string; children: ReactNode }) {
	const [active] = useRoute(href);

	const classNames = clsx(
		"py-2 px-4 flex-1 text-center font-semibold transition-colors",
		{
			"text-yellow-400 border-b-2 border-yellow-400 pointer-events-none":
				active,
			"text-gray-400 hover:text-white": !active,
		},
	);

	return (
		<Link href={href} className={classNames}>
			{children}
		</Link>
	);
}
