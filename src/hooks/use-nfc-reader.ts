import { useEffect, useState } from "react";

export default function useNFCReader() {
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
					ndef.onreading = (event) => {
						const message = event.message;
						resolve(message);
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
				.write(data)
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
