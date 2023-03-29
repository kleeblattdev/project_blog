import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
	const [count, setCount] = useState();

	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route />
					<Route />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
