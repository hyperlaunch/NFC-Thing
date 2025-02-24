import useNFCReader from "@/hooks/use-nfc-reader";
import { QrCodeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ActionButton from "./action-button";
import BrowserError from "./browser-error";
import ScanPending from "./scan-pending";

export default function Reader() {
	const [didInitiateScan, setDidInitiateScan] = useState(false);
	const [willScan, setWillScan] = useState(false);

	return (
		<>
			<p className="mb-6 text-sm">
				Press "Scan now" and then touch an NFC sticker or card to your phone to
				read its content.
			</p>
			{willScan ? (
				<ScanPending
					onCancel={() => {
						setDidInitiateScan(true);
						setWillScan(false);
					}}
				>
					Touch NFC to read
				</ScanPending>
			) : (
				<ActionButton
					onClick={() => setWillScan(true)}
					color={didInitiateScan ? "gray" : "yellow"}
					type="button"
				>
					<QrCodeIcon className="size-5" />
					Scan {didInitiateScan ? "again" : "now"}
				</ActionButton>
			)}
		</>
	);
}
