import { useEffect, useState } from "react";

export default function useWebNFC() {
	const [browserSupports, setBrowserSupports] = useState(false);

	useEffect(() => {
		setBrowserSupports("NDEFReader" in window);
	}, []);

	const read = () => {
		return new Promise((resolve, reject) => {
			const ndef = new NDEFReader();
			ndef
				.scan()
				.then(() => {
					ndef.onreadingerror = (error) =>
						reject(`Error scanning NFC: ${error}`);

					ndef.onreading = (event) => {
						const message = event.message;
						const records = [];

						for (const record of message.records) {
							if (record.recordType === "text")
								records.push(new TextDecoder().decode(record.data));
						}

						resolve(records);
					};
				})
				.catch((error) => {
					reject(`Error scanning NFC: ${error}`);
				});
		});
	};

	const write = (data: string) => {
		return new Promise((resolve, reject) => {
			const ndef = new NDEFReader();
			ndef
				.write({
					records: [{ recordType: "text", data: data }],
				})
				.then(() => {
					resolve("Message written successfully");
				})
				.catch((error) => {
					reject(`Error writing to NFC: ${error}`);
				});
		});
	};

	return { read, write, browserSupports };
}
