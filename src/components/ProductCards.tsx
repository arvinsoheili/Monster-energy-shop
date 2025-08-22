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
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/app/store";
import { addToCart } from "@/services/cartSlice";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function ProductCards() {
	type Product = {
		id: number;
		name: string;
		price: number;
		image: string;
	};

	const dispatch = useDispatch<AppDispatch>();

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

	function add(p: Product) {
		dispatch(addToCart(p));
		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: (toast) => {
				toast.onmouseenter = Swal.stopTimer;
				toast.onmouseleave = Swal.resumeTimer;
			},
		});
		Toast.fire({
			icon: "success",
			title: `${p.name} added to cart`,
			theme: "dark",
		});
	}

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
						{/* <h4 className='text-stone-500 xl:text-xl'></h4> */}
					</div>
				</CardContent>
				<div className='flex flex-col justify-start text-neutral-400 text-start my-3 items-start h-full px-5 xl:text-xl'>
					<div className='flex w-full justify-between'>
						<p className='font-bold'>Vol:</p>
						<p className=''>{`${product.volume}${product.volUnit}`}</p>
					</div>
					<div className='flex w-full justify-between'>
						<p className='font-bold'>Price:</p>
						<p>${product.price}</p>
					</div>
				</div>
				<CardFooter className='flex flex-row gap-1 md:gap-2 text-end justify-center items-end'>
					<Drawer key={product.id}>
						<DrawerTrigger asChild>
							<MotionButton
								whileHover={{
									boxShadow: "0 0 10px 5px #a3e635",
									backgroundColor: "#a3e635",
								}}
								className='xl:text-xl md:py-6 flex-1'
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
									<div className='flex flex-col justify-start text-start py-3 items-start h-full text-sm'>
										<ul className='flex-1'>
											{product.contains.map((skill) => {
												return <li className='mx-0.5'>+ {skill}</li>;
											})}
										</ul>
										<div className='flex justify-between w-full text-neutral-400'>
											<p className='font-bold'>Price:</p>
											<p>${product.price}</p>
										</div>
									</div>
								</div>
								<DrawerFooter className='flex flex-row gap-2'>
									<DrawerClose className='flex-1'>
										<Button className='w-full' onClick={() => add(product)}>
											Add To Cart
										</Button>
									</DrawerClose>
									<DrawerClose asChild>
										<Button variant='outline'>Cancel</Button>
									</DrawerClose>
								</DrawerFooter>
							</div>
						</DrawerContent>
					</Drawer>
					<Button
						variant='outline'
						className=' xl:text-xl md:py-6 '
						onClick={() => add(product)}
					>
						<FontAwesomeIcon icon={faCartShopping} />
					</Button>
				</CardFooter>
			</MotionCard>
		));
	}, []);

	return (
		<div className='flex flex-col gap-10 overflow-x-hidden my-20 md:mt-30'>
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
