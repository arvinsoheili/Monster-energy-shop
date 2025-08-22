import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Products from "@/data/Products.json";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";
import { clearCart, increaseQty, removeFromCart } from "@/services/cartSlice";
import { AnimatePresence, motion } from "framer-motion";

export default function Cart() {
	const items = useSelector((s: RootState) => s.cart.items);
	const dispatch = useDispatch<AppDispatch>();

	const list = Object.values(items);
	const total = list.reduce((sum, it) => sum + it.price * it.qty, 0);

	if (list.length === 0) {
		return (
			<div className='flex justify-center md:mt-30 md:mb-19 my-10 p-5'>
				<Card className='md:w-[50%] mt-10 p-5'>
					<h3 className='font-bold text-neutral-400'>Your cart</h3>
					<p className='text-gray-300'>Empty. Add something!</p>
				</Card>
			</div>
		);
	}

	return (
		<div className='flex justify-center md:mt-30 md:mb-19 my-10'>
			<Card className='md:w-[50%] mt-10'>
				<CardHeader className='-mb-4'>
					<CardTitle className='p-0 m-0'>Cart</CardTitle>
				</CardHeader>
				<hr className='w-[95%] justify-center mx-auto' />
				<CardContent className='max-h-94 inset-shadow-sm/20 inset-shadow-neutral-950 | md:flex md:flex-row'>
					<div className='max-h-94 overflow-y-auto md:pe-2.5 md:flex-2 scrollbar-hide'>
						<ul className='list-none p-0 pt-4 m-0'>
							<AnimatePresence>
								{list.map((it) => (
									<motion.li
										key={it.id} // must be unique
										initial={{ opacity: 0, x: -50 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -100 }}
										transition={{ duration: 0.3 }}
										className='flex items-center gap-4 mb-3'
									>
										<Avatar className='w-10 h-10 rounded-none justify-center'>
											<AvatarImage
												src={`/images/products/${it.image}`}
												alt={it.name}
												className=' rounded-none object-contain'
											/>
											<AvatarFallback className='bg-neutral-700 justify-center items-center flex rounded-full w-10'>
												{it.name.slice(0, 2)}
											</AvatarFallback>
										</Avatar>

										<div className='flex flex-col w-full'>
											<div className='flex flex-row justify-between'>
												<h2 className='text-sm -mb-1 me-5'>{it.name}</h2>
												<h4 className='text-sm text-end text-neutral-400'>
													{it.price}
												</h4>
											</div>
											<div className='flex items-center gap-5 justify-between'>
												<div className='text-sm text-neutral-400'>qty</div>
												<div className='flex flex-row gap-3'>
													<button
														onClick={() => dispatch(removeFromCart(it.id))}
													>
														-
													</button>
													<span>{it.qty}</span>
													<button onClick={() => dispatch(increaseQty(it.id))}>
														+
													</button>
												</div>
											</div>
										</div>
									</motion.li>
								))}
							</AnimatePresence>
						</ul>
					</div>

					<div className='max-md:hidden ps-2.5 border-l-1 flex-1 flex flex-col gap-3'>
						<div className='flex-1 flex flex-col gap-10'>
							<div className='flex flex-row justify-between w-full'>
								<div className='text-sm'>Total:</div>
								<div className='text-sm text-end text-neutral-400'>
									${total.toFixed(2)}
								</div>
							</div>

							<div className='flex flex-row gap-1 w-full'>
								<Button className='flex-1'>Order</Button>
								<Button variant='outline' onClick={() => dispatch(clearCart())}>
									<FontAwesomeIcon icon={faXmark} />
								</Button>
							</div>
						</div>
					</div>
				</CardContent>
				<CardFooter className='flex flex-col gap-3 w-full md:hidden'>
					<hr className='w-[95%] justify-center mx-auto' />
					<div className='flex flex-row justify-between w-full'>
						<div className='text-sm'>Total:</div>
						<div className='text-sm text-end text-neutral-400'>
							${total.toFixed(2)}
						</div>
					</div>

					<div className='flex flex-row gap-1 w-full'>
						<Button className='flex-1'>Order</Button>
						<Button variant='outline' onClick={() => dispatch(clearCart())}>
							<FontAwesomeIcon icon={faXmark} />
						</Button>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
