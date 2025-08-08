import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import HeroData from "../data/Hero.json";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function Hero() {
	const MotionAvatar = motion(Avatar);
	const MotionButton = motion(Button);

	const gridContainerVariants = {
		hidden: { opacity: 0, y: -500 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.25, duration: 0.8 },
			y: 0,
		},
	};

	const gridSquareVariants = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	return (
		<>
			<div className='font-monster bg-stone-950 h-screen w-full flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-2 text-white justify-center md:justify-center items-center py-10'>
				<motion.section
					variants={gridContainerVariants}
					initial='hidden'
					animate='show'
					className=""
				>
					<MotionAvatar variants={gridSquareVariants} className="">
						<AvatarImage src={HeroData.image} className="md:rotate-30 md:w-[80%]"/>
					</MotionAvatar>
				</motion.section>
				<div className='flex flex-col justify-center gap-3 md:justify-center md:flex md:flex-col md:gap-8 px-10 lg:pr-20'>
					<motion.section
						className='text-center flex flex-col gap-0.2'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.7 }}
					>
						<h1 className='text-6xl lg:text-8xl'>{HeroData.title}</h1>
						<p className='text-2xl md:text-2xl lg:text-4xl text-lime-500'>
							{HeroData.description}
						</p>
					</motion.section>
					<MotionButton
						className='text-xl lg:text-3xl font-bold px-10 py-2 lg:py-6'
						initial={{
							opacity: 1,
							backgroundColor: "#0a0a0a",
							strokeOpacity: 0,
							stroke: "#0a0a0a",
							boxShadow: "0 0 10px 5px#0a0a0a",
							color: "#0a0a0a",
						}}
						animate={{
							opacity: 1,
							backgroundColor: "#a3e635",
							strokeOpacity: 1,
							stroke: "#a3e635",
							boxShadow: "0 0 10px 5px #a3e635",
						}}
						transition={{ delay: 0.8, duration: 1.5 }}
					>
						{HeroData.button}
					</MotionButton>
				</div>
			</div>
		</>
	);
}

export default Hero;
