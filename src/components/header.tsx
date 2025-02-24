import { Link } from "wouter";
import Logo from "./logo";

export default function Header() {
	return (
		<header className="">
			<h1 className="flex justify-center mb-6">
				<Link href="/">
					<Logo />
				</Link>
			</h1>
			<p className="mb-6 text-sm">
				This is a demo of the Web NFC API with React. It showcases the ability
				to read and write NFC tags using web technologies.
			</p>
		</header>
	);
}
