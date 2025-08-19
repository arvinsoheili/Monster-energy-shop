import "./App.css";
import { useEffect } from "react";
import ProductCards from "./components/ProductCards";
import SEO from "./components/SEO";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Welcome from "./components/Welcome";

function App() {
	useEffect(() => {
		const body = document.getElementsByTagName("body")[0];
		body.classList.add("dark");
	}, []);

	return (
		<>
			<Analytics />
			<SEO />
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path='/undefined' element={<Navigate to='/welcome' replace />} />
						<Route path='/' element={<Navigate to='/welcome' replace />} />
						<Route path='/welcome' element={<Welcome />} />
						<Route path='/products' element={<ProductCards />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
