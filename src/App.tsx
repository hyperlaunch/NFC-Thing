import { Route, Switch } from "wouter";
import BrowserError from "./components/browser-error";
import Footer from "./components/footer";
import Header from "./components/header";
import Reader from "./components/reader";
import Tabs from "./components/tabs";
import Writer from "./components/writer";
import useWebNFC from "./hooks/use-web-nfc";

export function App() {
	const { browserSupports } = useWebNFC();

	return (
		<div className="w-full max-w-md mx-auto min-h-svh flex flex-col p-8 ">
			<Header />
			<div className="flex-grow">
				{browserSupports ? (
					<>
						<Tabs />
						<Switch>
							<Route path="/">
								<Reader />
							</Route>
							<Route path="/write">
								<Writer />
							</Route>
						</Switch>
					</>
				) : (
					<BrowserError />
				)}
			</div>
			<Footer />
		</div>
	);
}

export default App;
