import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ActionButton from "./action-button";
import ScanPending from "./scan-pending";
import Textbox from "./textbox";

export default function Writer() {
	const [didInitiateScan, setDidInitiateScan] = useState(false);
	const [willScan, setWillScan] = useState(false);

	return (
		<>
			<p className="mb-6 text-sm">
				Enter your content to write, press "Write now" and then touch an NFC
				sticker or card to your phone to write to it.
			</p>
			{willScan ? (
				<ScanPending
					onCancel={() => {
						setDidInitiateScan(true);
						setWillScan(false);
					}}
				>
					Touch NFC to write
				</ScanPending>
			) : (
				<>
					<Textbox rows={4} placeholder="Enter content to write to NFC tag" />
					<ActionButton
						onClick={() => setWillScan(true)}
						color={didInitiateScan ? "gray" : "yellow"}
						type="button"
					>
						<ArrowsRightLeftIcon className="size-5" />
						Write {didInitiateScan ? "again" : "now"}
					</ActionButton>
				</>
			)}
		</>
	);
}
