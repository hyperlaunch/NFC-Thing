import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function ReaderError() {
	return (
		<div className="border border-red-500 text-white px-4 py-3 rounded-md mb-6 flex items-start text-sm">
			<ExclamationCircleIcon className="size-8 text-red-500 mr-2 mt-0.5 flex-none" />
			<div>
				<p className="font-semibold">
					Scan Failed: Unable to read NFC tag. Please try again.
				</p>
			</div>
		</div>
	);
}
