import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Navigation from "./UI/Navigation";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function Header() {
	const menu = ["welcome", "products"];

	return (
		<header className='max-w-screen w-full fixed top-0 z-10 bg-neutral-800 md:py-7 py-2 grid grid-cols-3 md:grid md:grid-cols-3 md:justify-between md:px-10 p-5'>
			{/* Navbar */}
			<div>
				<div className='max-md:hidden'>
					<menu className='items-center'>
						<ul className='flex flex-row gap-4 text-lg'>
							<Navigation items={menu} />
						</ul>
					</menu>
				</div>

				<Sidebar />
			</div>

			{/* Logo */}
			<Avatar className='items-center justify-center flex'>
				<Link to='/welcome'>
					<AvatarImage
						className='md:w-10 w-4.5 md:-my-4'
						src='/monster-graffio.svg'
					/>
					<AvatarFallback className='font-bold text-primary'>
						Monster
					</AvatarFallback>
				</Link>
			</Avatar>

			{/* Shopping Cart */}
			<div className='flex justify-end'>
				<Cart />
			</div>
		</header>
	);
}
