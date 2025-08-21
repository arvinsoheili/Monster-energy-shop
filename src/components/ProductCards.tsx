import { motion } from "motion/react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Products from "../data/Products.json";
import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "./ui/drawer";
import { useMemo } from "react";
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

	const MotionButton = motion.create(Button);
	const MotionCard = motion.create(Card);
	const productCards = useMemo(() => {
		return Products.products.map((product) => (
			<MotionCard
				key={product.id}
				variants={gridSquareVariants}
				className='w-full mx-auto dark:shadow-lg dark:shadow-neutral-900 dark:inset-shadow-2xs dark:inset-shadow-neutral-600'
			>
				<CardHeader className='flex justify-center items-center'>
					<Avatar className='w-full'>
						<AvatarImage
							className='rounded-xl w-full h-[15rem] xl:h-[20rem] object-contain p-5'
							src={`images/products/${product.image}`}
						/>
						<AvatarFallback className='bg-stone-600 p-5 rounded-full'>
							{product.name.slice(0, 2)}
						</AvatarFallback>
					</Avatar>
				</CardHeader>
				<CardContent className='gap-3 justify-center text-center h-full'>
					<div className='gap-0.5'>
						<h2 className='text-3xl max-xs:text-2xl xl:text-4xl font-medium break-words'>{`${product.name}`}</h2>
						<h4 className='text-stone-500 xl:text-xl'>{`${product.volume}${product.volUnit}`}</h4>
					</div>
				</CardContent>
				<div className='flex justify-start text-start my-3 items-start h-full px-5 xl:text-xl'>
					<ul>
						{product.contains.map((skill) => {
							return <li className='mx-0.5'>+ {skill}</li>;
						})}
					</ul>
				</div>
				<CardFooter className='flex flex-row gap-5 text-end justify-center items-end'>
					<Drawer>
						<DrawerTrigger asChild>
							<MotionButton
								whileHover={{
									boxShadow: "0 0 10px 5px #a3e635",
									backgroundColor: "#a3e635",
								}}
								className='w-full xl:text-xl py-6'
							>
								Buy Now
							</MotionButton>
						</DrawerTrigger>

						<DrawerContent className=''>
							<div className='mx-auto w-full max-w-sm'>
								<DrawerHeader>
									<DrawerTitle className='text-2xl'>{product.name}</DrawerTitle>
									<DrawerDescription>
										{product.volume}
										{product.volUnit}
									</DrawerDescription>
								</DrawerHeader>
								<div className='p-4 pb-0 grid grid-cols-2'>
									<Avatar className='flex justify-center '>
										<AvatarImage
											src={`images/products/${product.image}`}
											className='max-h-70 object-fit'
										/>
										<div className='border-r-2 px-2.5' />
									</Avatar>
									<div className='flex justify-start text-start my-3 items-start h-full text-sm'>
										<ul>
											{product.contains.map((skill) => {
												return <li className='mx-0.5'>+ {skill}</li>;
											})}
										</ul>
									</div>
								</div>
								<DrawerFooter>
									<Button disabled>Add To Cart</Button>
									<DrawerClose asChild>
										<Button variant='outline'>Cancel</Button>
									</DrawerClose>
								</DrawerFooter>
							</div>
						</DrawerContent>
					</Drawer>
				</CardFooter>
			</MotionCard>
		));
	}, []);

	return (
		<div className='flex flex-col gap-10 overflow-x-hidden my-20'>
			<motion.section
				variants={gridContainerVariants}
				initial='hidden'
				animate='show'
				className='grid grid-cols-1 min-[580px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-15'
			>
				{productCards}
			</motion.section>
		</div>
	);
}
