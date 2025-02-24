import Tab from "./tab";

export default function Tabs() {
	return (
		<nav className="mb-6 flex border-b border-gray-700">
			<Tab href="/">Read</Tab>
			<Tab href="/write">Write</Tab>
		</nav>
	);
}
