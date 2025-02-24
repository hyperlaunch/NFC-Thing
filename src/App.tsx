import { Route, Switch } from "wouter";
import Footer from "./components/footer";
import Header from "./components/header";
import "./index.css";
import Reader from "./components/reader";
import Tabs from "./components/tabs";
import Writer from "./components/writer";

export function App() {
	return (
		<div className="w-full max-w-sm mx-auto">
			<Header />
			<Tabs />
			<Switch>
				<Route path="/">
					<Reader />
				</Route>
				<Route path="/write">
					<Writer />
				</Route>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
