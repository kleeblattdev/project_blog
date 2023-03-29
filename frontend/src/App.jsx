//library import
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//component import
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import DetailPage from "./pages/DetailPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
	const [count, setCount] = useState();

	return (
		<div className="App">
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/addPost" element={<AdminPage />} />
					<Route path="/:postID" element={<DetailPage />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
