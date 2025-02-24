import { ArrowPathIcon } from "@heroicons/react/24/solid";
import type { ReactNode } from "react";

export default function ScanPending({
	children,
	onCancel,
}: { children: ReactNode; onCancel: () => void }) {
	return (
		<div className="flex flex-col items-center mb-6 p-3 border border-gray-700 rounded">
			<div className="flex items-center mb-2">
				<ArrowPathIcon className="w-5 h-5 mr-2 animate-spin" />
				<span className="text-gray-300">{children}</span>
			</div>
			<button
				type="button"
				className="cursor-pointer text-xs text-red-500"
				onClick={onCancel}
			>
				Cancel
			</button>
		</div>
	);
}
