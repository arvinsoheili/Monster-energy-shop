import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import WelcomeData from "../data/Hero.json";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Welcome() {
	const MotionAvatar = motion.create(Avatar);
	const MotionButton = motion.create(Button);

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

	const navigate = useNavigate();

	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 100 }} // start below the screen
				animate={{ opacity: 1, y: 0 }} // slide into place
				exit={{ opacity: 0, y: -500 }} // slide up when exiting
				transition={{ duration: 0.6, ease: "easeIn" }}
				className='font-monster bg-stone-950 min-h-screen w-full flex flex-col md:flex-row gap-4 md:gap-4 lg:gap-2 text-white justify-center items-center py-6 md:py-10'
			>
				<motion.section
					variants={gridContainerVariants}
					initial='hidden'
					animate='show'
					className=''
				>
					<MotionAvatar variants={gridSquareVariants} className=''>
						<AvatarImage
							src={WelcomeData.image}
							className='md:rotate-30 md:w-[80%] max-w-full'
						/>
					</MotionAvatar>
				</motion.section>
				<div className='flex flex-col justify-center gap-3 md:justify-center md:flex md:flex-col md:gap-8 px-10 lg:pr-20'>
					<motion.section
						className='text-center flex flex-col gap-0.2'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.7 }}
					>
						<h1 className='text-6xl lg:text-8xl'>{WelcomeData.title}</h1>
						<p className='text-2xl md:text-2xl lg:text-4xl text-primary'>
							{WelcomeData.description}
						</p>
					</motion.section>
					<MotionButton
						onClick={() => navigate("/products")}
						className='text-xl lg:text-3xl font-bold px-10 py-2 lg:py-6'
						initial={{
							opacity: 1,
							backgroundColor: "#0a0a0a",
							strokeOpacity: 0,
							stroke: "#0a0a0a",
							color: "#0a0a0a",
							boxShadow: "none",
							transition: { duration: 0.8 },
						}}
						animate={{
							opacity: 1,
							backgroundColor: "#a3e635",
							strokeOpacity: 1,
							stroke: "#a3e635",
							boxShadow:
								"0 20px 25px -5px rgba(163, 230, 53, 0.3), 0 10px 10px -5px rgba(163, 230, 53, 0.3)",
							transition: {
								opacity: { delay: 0.8, duration: 1.5 },
								backgroundColor: { delay: 0.8, duration: 1.5 },
								boxShadow: { delay: 1, duration: 0.5, ease: "easeOut" }, // separate transition
							},
						}}
						whileHover={{
							boxShadow: "0 0 10px 5px #a3e635",
							transition: { delay: 0, duration: 0.9, ease: "easeIn" },
						}}
					>
						{WelcomeData.button}
					</MotionButton>
				</div>
			</motion.div>
		</>
	);
}

export default Welcome;
