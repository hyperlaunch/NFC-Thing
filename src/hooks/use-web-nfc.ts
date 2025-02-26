import { useEffect, useRef, useState } from "react";

export default function useWebNFC() {
	const [browserSupports, setBrowserSupports] = useState(false);
	const [data, setData] = useState<unknown | null>(null);
	const [error, setError] = useState<unknown | null>(null);
	const ndefReaderRef = useRef<NDEFReader | null>(null);
	const abortControllerRef = useRef<AbortController | null>(null);

	useEffect(() => {
		setBrowserSupports("NDEFReader" in window);
	}, []);

	const abort = () => {
		if (abortControllerRef.current) {
			abortControllerRef.current.abort();
			abortControllerRef.current = null;
		}

		if (ndefReaderRef.current) {
			ndefReaderRef.current.onreadingerror = () => {};
			ndefReaderRef.current.onreading = () => {};
			ndefReaderRef.current = null;
		}

		setError(null);
		setData(null);
	};

	const read = () => {
		return new Promise((resolve, reject) => {
			abort();
			const ndef = new NDEFReader();
			ndefReaderRef.current = ndef;
			abortControllerRef.current = new AbortController();

			ndef
				.scan({ signal: abortControllerRef.current.signal })
				.then(() => {
					ndef.onreadingerror = (error) => {
						setError(error);
						reject(`Error scanning NFC: ${error}`);
					};

					ndef.onreading = (event) => {
						const message = event.message;
						const records = [];

						for (const record of message.records) {
							if (record.recordType === "text")
								records.push(new TextDecoder().decode(record.data));
						}

						setData(records);
						resolve(records);
					};
				})
				.catch((error) => {
					if (error.name === "AbortError") {
						console.log("NFC scan was aborted");
					} else {
						setError(error);
						reject(`Error scanning NFC: ${error}`);
					}
				});
		});
	};

	const write = (data: string) => {
		return new Promise((resolve, reject) => {
			abort();
			const ndef = new NDEFReader();
			ndefReaderRef.current = ndef;
			abortControllerRef.current = new AbortController();

			ndef
				.write(data, { signal: abortControllerRef.current.signal })
				.then(() => {
					resolve("Message written successfully");
				})
				.catch((error) => {
					if (error.name === "AbortError") {
						console.log("NFC write was aborted");
					} else {
						setError(error);
						reject(`Error writing to NFC: ${error}`);
					}
				});
		});
	};

	return { data, error, read, write, abort, browserSupports };
}
