import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function WriteSuccess() {
	return (
		<div className="border border-green-500 text-white px-4 py-3 rounded-md mb-6 flex items-start text-sm">
			<CheckCircleIcon className="size-8 text-green-500 mr-2 mt-0.5 flex-none" />
			<div>
				<p className="font-semibold">
					NFC tag written successfully! The data has been stored on the tag.
				</p>
			</div>
		</div>
	);
}
