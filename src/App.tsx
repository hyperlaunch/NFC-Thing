import { Route, Switch } from "wouter";
import Footer from "./components/footer";
import Header from "./components/header";
import "./index.css";
import BrowserError from "./components/browser-error";
import Reader from "./components/reader";
import Tabs from "./components/tabs";
import Writer from "./components/writer";
import useNFCReader from "./hooks/use-nfc-reader";

export function App() {
	const { browserSupports } = useNFCReader();

	return (
		<div className="w-full max-w-sm mx-auto">
			<Header />
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
			<Footer />
		</div>
	);
}

export default App;
