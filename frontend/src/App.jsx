//library import
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//component import
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import DetailPage from "./pages/DetailPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./App.scss";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
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
