import { motion } from "motion/react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Profiles from "../data/Profiles.json";
import { Button } from "@/components/ui/button";
export default function ProductCards() {
	const gridContainerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.25 },
		},
	};

	const gridSquareVariants = {
		hidden: { opacity: 0, y: -20 },
		show: { opacity: 1, y: 0 },
	};

	const MotionButton = motion(Button);
	const MotionCard = motion(Card);
	const profileCards = Profiles.profiles.map((profile) => {
		return (
			<MotionCard variants={gridSquareVariants} className='w-full mx-auto'>
				<CardHeader className='flex justify-center items-center'>
					<Avatar className='w-full'>
						<AvatarImage
							className='rounded-xl w-full h-[25em] object-contain p-5'
							src={`images/products/${profile.image}`}
						/>
						<AvatarFallback className='bg-stone-600 p-5 rounded-full'>
							{profile.name.slice(0, 2)}
						</AvatarFallback>
					</Avatar>
				</CardHeader>
				<CardContent className='gap-3 justify-center text-center h-full'>
					<div className='gap-0.5'>
						<h2 className='text-3xl font-medium break-words'>{`${profile.name}`}</h2>
						<h4 className='text-stone-500'>{`${profile.volume}${profile.volUnit}`}</h4>
					</div>
				</CardContent>
				<div className='flex justify-start text-start my-3 items-start h-full px-5'>
					<ul>
						{profile.contains.map((skill) => {
							return <li className='mx-0.5'>+ {skill}</li>;
						})}
					</ul>
				</div>
				<CardFooter className='flex flex-row gap-5 text-end justify-center items-end'>
					<MotionButton whileHover={{ boxShadow: "0 0 10px 5px #a3e635", backgroundColor: "#a3e635" }} className='bg-lime-500 w-full'>Buy Now</MotionButton>
				</CardFooter>
			</MotionCard>
		);
	});

	return (
		<div className='flex flex-col gap-10 overflow-x-hidden my-20'>
			<motion.section
				variants={gridContainerVariants}
				initial='hidden'
				animate='show'
				className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-15 mx-15'
			>
				{profileCards}
			</motion.section>
		</div>
	);
}
