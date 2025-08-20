import "./App.css";
import { lazy, Suspense, useEffect } from "react";
// import ProductCards from "./components/ProductCards";
import SEO from "./components/SEO";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layouts/Layout";
// import Welcome from "./components/Welcome";

const ProductCards = lazy(() => import("./components/ProductCards"));
const Welcome = lazy(() => import("./components/Welcome"));
// const ProductCards = lazy(() => 
//   new Promise(resolve => {
//     setTimeout(() => resolve(import("./components/ProductCards")), 2000);
//   })
// );


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
				<Suspense fallback={<div className='text-center p-10'>Loading...</div>}>
					<Routes>
						<Route element={<Layout />}>
							<Route
								path='/undefined'
								element={<Navigate to='/welcome' replace />}
							/>
							<Route path='/' element={<Navigate to='/welcome' replace />} />
							<Route path='/welcome' element={<Welcome />} />
							<Route path='/products' element={<ProductCards />} />
						</Route>
					</Routes>
				</Suspense>
			</BrowserRouter>
		</>
	);
}

export default App;
