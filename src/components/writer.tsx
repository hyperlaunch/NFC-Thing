import useWebNFC from "@/hooks/use-web-nfc";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import { type FormEvent, type KeyboardEvent, useState } from "react";
import ActionButton from "./action-button";
import ReaderError from "./reader-error";
import ScanPending from "./scan-pending";
import Textbox from "./textbox";
import WriteSuccess from "./write-success";

export default function Writer() {
	const { write, error, abort } = useWebNFC();

	const [willScan, setWillScan] = useState(false);
	const [didWrite, setDidWrite] = useState(false);

	function reset() {
		abort();
		setWillScan(false);
		setDidWrite(false);
	}

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setWillScan(true);

		const form = e.target as HTMLFormElement;
		const message = form.querySelector("textarea")?.value || "";
		try {
			await write(message);

			setWillScan(false);
			setDidWrite(true);
		} catch (e) {
			console.error(e);
		}
	}

	if (error)
		return (
			<>
				<ReaderError />
				<ActionButton color="gray" type="button" onClick={reset}>
					<ArrowsRightLeftIcon className="size-5" />
					Try again
				</ActionButton>
			</>
		);

	return (
		<form onSubmit={handleSubmit}>
			<p className="mb-6 text-sm">
				Enter your content to write, press "Write now" and then touch an NFC
				sticker or card to your phone to write to it.
			</p>

			{didWrite ? (
				<>
					<WriteSuccess />
					<ActionButton color="gray" type="button" onClick={reset}>
						<ArrowsRightLeftIcon className="size-5" />
						Write again
					</ActionButton>
				</>
			) : willScan ? (
				<ScanPending onCancel={reset}>Touch NFC to write</ScanPending>
			) : (
				<>
					<Textbox
						required
						rows={4}
						placeholder="Enter content to write to NFC tag"
					/>
					<ActionButton color="yellow" type="submit">
						<ArrowsRightLeftIcon className="size-5" />
						Write now
					</ActionButton>
				</>
			)}
		</form>
	);
}
