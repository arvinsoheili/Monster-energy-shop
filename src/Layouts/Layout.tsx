import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
	const location = useLocation();
	const hideLayoutOn = ["/welcome"];

	const shouldHideLayout = hideLayoutOn.includes(location.pathname);

	return (
		<>
			<div className='flex flex-col min-h-screen'>
				{!shouldHideLayout && <Header />}
				<main>
					<Outlet />
				</main>
				{!shouldHideLayout && <Footer copywrite='Developed By Develook' />}
			</div>
		</>
	);
}
