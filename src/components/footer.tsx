import GHIcon from "./gh-icon";

export default function Footer() {
	return (
		<footer className="text-gray-400 text-sm mt-8 w-full max-w-sm mx-auto flex justify-between items-center">
			<div>
				© {new Date().getFullYear()}{" "}
				<a
					href="https://hyperlaunch.com"
					className="hover:text-yellow-400 transition-colors"
				>
					Hyperlaunch
				</a>
			</div>
			<a
				href="https://github.com/hyperlaunch/NFC-Thing"
				target="_blank"
				rel="noopener noreferrer"
				className="size-5 block hover:text-yellow-400 transition-colors"
			>
				<GHIcon />
			</a>
		</footer>
	);
}
