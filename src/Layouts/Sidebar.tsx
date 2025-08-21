import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "motion/react";
import { useState } from "react";
import Navigation from "./UI/Navigation";

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

export default function Sidebar() {
	const menu = ["welcome", "products"];
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<button className='md:hidden' onClick={() => setOpen(!open)}>
					<HamburgerButton isOpen={open} />
				</button>
			</SheetTrigger>
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
	);
}
