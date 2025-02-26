import useWebNFC from "@/hooks/use-web-nfc";
import { QrCodeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ActionButton from "./action-button";
import ReaderError from "./reader-error";
import ScanPending from "./scan-pending";

export default function Reader() {
	const { data, error, abort, read } = useWebNFC();
	const [willScan, setWillScan] = useState(false);

	function reset() {
		abort();
		setWillScan(false);
	}

	async function handleScan() {
		try {
			setWillScan(true);
			await read();
			setWillScan(false);
		} catch (_) {}
	}

	if (error)
		return (
			<>
				<ReaderError />
				<ActionButton onClick={handleScan} color="gray" type="button">
					<QrCodeIcon className="size-5" />
					Try again
				</ActionButton>
			</>
		);

	return (
		<>
			<p className="mb-6 text-sm">
				Press "Scan now" and then touch an NFC sticker or card to your phone to
				read its content.
			</p>
			{data && (
				<pre className="bg-gray-800 p-4 rounded text-sm text-gray-200 w-full overflow-x-auto mb-6">
					{JSON.stringify(data)}
				</pre>
			)}
			{willScan ? (
				<ScanPending onCancel={reset}>Touch NFC to read</ScanPending>
			) : (
				<ActionButton
					onClick={handleScan}
					color={data ? "gray" : "yellow"}
					type="button"
				>
					<QrCodeIcon className="size-5" />
					Scan {data ? "again" : "now"}
				</ActionButton>
			)}
		</>
	);
}
