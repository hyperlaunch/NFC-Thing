import useWebNFC from "@/hooks/use-web-nfc";
import { QrCodeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ActionButton from "./action-button";
import ScanPending from "./scan-pending";

export default function Reader() {
	const { read } = useWebNFC();
	const [readData, setReadSata] = useState<unknown | null>(null);
	const [willScan, setWillScan] = useState(false);

	function reset() {
		setReadSata(null);
		setWillScan(true);
	}

	async function handleScan() {
		reset();
		const data = await read();

		setReadSata(data);
		setWillScan(false);
	}

	return (
		<>
			<p className="mb-6 text-sm">
				Press "Scan now" and then touch an NFC sticker or card to your phone to
				read its content.
			</p>
			{readData && (
				<pre className="bg-gray-800 p-4 rounded text-sm text-gray-200 w-full overflow-x-auto mb-6">
					{JSON.stringify(readData)}
				</pre>
			)}
			{willScan ? (
				<ScanPending onCancel={reset}>Touch NFC to read</ScanPending>
			) : (
				<ActionButton
					onClick={handleScan}
					color={readData ? "gray" : "yellow"}
					type="button"
				>
					<QrCodeIcon className="size-5" />
					Scan {readData ? "again" : "now"}
				</ActionButton>
			)}
		</>
	);
}
