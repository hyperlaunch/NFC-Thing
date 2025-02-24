import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

export default function ActionButton(
	props: ButtonHTMLAttributes<HTMLButtonElement> & { color: "gray" | "yellow" },
) {
	const { children, color, ...attributes } = props;
	const classNames = clsx(
		"py-2 px-4 rounded flex items-center justify-center gap-x-1 mb-6 w-full cursor-pointer",
		{
			"bg-yellow-500 hover:bg-yellow-400 text-gray-900": color === "yellow",
			"bg-gray-700 hover:bg-gray-600 text-gray-100": color === "gray",
		},
	);

	return (
		<button type="button" {...attributes} className={classNames}>
			{children}
		</button>
	);
}
