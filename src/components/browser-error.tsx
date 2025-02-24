import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

export default function BrowserError() {
	return (
		<div className="border border-red-500 text-white px-4 py-3 rounded-md mb-6 flex items-start text-sm">
			<ExclamationCircleIcon className="size-8 text-red-500 mr-2 mt-0.5 flex-none" />
			<div>
				<p className="font-semibold">
					Your browser doesn't support the Web NFC API
				</p>
				<p className="text-sm mt-1">
					<a
						href="https://caniuse.com/webnfc"
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:text-red-400"
					>
						More info
					</a>
				</p>
			</div>
		</div>
	);
}
