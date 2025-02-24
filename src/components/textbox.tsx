import type { TextareaHTMLAttributes } from "react";

export default function Textbox(
	props: TextareaHTMLAttributes<HTMLTextAreaElement>,
) {
	return (
		<textarea
			{...props}
			className="mb-2 w-full px-3 py-2 text-gray-100 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
		/>
	);
}
