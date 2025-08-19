import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Navigation from "./UI/Navigation";
// import HamburgerButton from "./UI/BurgerButton";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function HamburgerButton({ isOpen }: { isOpen: boolean }) {
	return (
		<div className='flex flex-col justify-center items-center gap-1 w-10 h-10 p-2'>
			{/* top line */}
			<motion.span
				className='block h-[2px] w-6 bg-white rounded'
				animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
			/>
			{/* middle line */}
			<motion.span
				className='block h-[2px] w-6 bg-white rounded'
				animate={{ opacity: isOpen ? 0 : 1 }}
			/>
			{/* bottom line */}
			<motion.span
				className='block h-[2px] w-6 bg-white rounded'
				animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
			/>
		</div>
	);
}

export default function Header() {
	const menu = ["welcome", "products"];
	const [open, setOpen] = useState(false);

	return (
		<header className='max-w-screen w-full fixed top-0 z-10 bg-neutral-800 md:py-7 py-2 grid grid-cols-3 md:flex md:flex-row md:justify-between md:px-10 p-5'>
			<div className='max-md:hidden'>
				<menu className='items-center'>
					<ul className='flex flex-row gap-4 text-lg'>
						<Navigation items={menu} />
					</ul>
				</menu>
			</div>

			<button className='md:hidden' onClick={() => setOpen(!open)}>
				<HamburgerButton isOpen={open} />
			</button>

			<Avatar className='items-center justify-center flex'>
				<Link to='/welcome'>
					<AvatarImage
						className='md:w-10 w-5 md:-my-4'
						src='/monster-graffio.svg'
					/>
                    <AvatarFallback className="font-bold text-primary">Monster</AvatarFallback>
				</Link>
			</Avatar>

			<Sheet open={open} onOpenChange={setOpen}>
				{/* <SheetTrigger asChild></SheetTrigger> */}
				<SheetContent side='left'>
					<SheetHeader>
						<SheetTitle className='text-lg font-bold text-neutral-500'>
							Menu
						</SheetTitle>
						<SheetDescription>
							<menu className='items-center mt-10 text-md'>
								<ul className='flex flex-col gap-4'>
									<Navigation items={menu} />
								</ul>
							</menu>
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</header>
	);
}
