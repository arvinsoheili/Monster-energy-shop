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

export default function Cart() {
	return (
		<div className='flex justify-center md:mt-30 md:mb-19'>
			<Card className='w-[50%]'>
				<CardHeader className='-mb-4'>
					<CardTitle className='p-0 m-0'>Cart</CardTitle>
				</CardHeader>
				<hr className='w-[95%] justify-center mx-auto' />
				<CardContent className=' max-h-94 inset-shadow-sm/20 inset-shadow-neutral-950 | md:flex md:flex-row'>
					<div className='max-h-94 overflow-y-auto md:pe-2.5 md:flex-2 scrollbar-hide'>
						<ul className='list-none p-0 pt-4 m-0'>
							{Products.products.map((it) => (
								<li className='flex items-center gap-4 mb-3'>
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
											<h4 className='text-sm text-end text-neutral-400'>{`$25`}</h4>
										</div>
										<div className='flex items-center gap-5 justify-between'>
											<div className='text-sm text-neutral-400'>qty</div>
											<div className='flex flex-row gap-3'>
												<button>-</button>
												<span>1</span>
												<button>+</button>
											</div>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>

					<div className='max-md:hidden ps-2.5 border-l-1 flex-1 flex flex-col gap-3'>
						<div className='flex-1 flex flex-col gap-10'>
							<div className='flex flex-row justify-between w-full'>
								<div className='text-sm'>Total:</div>
								<div className='text-sm text-end text-neutral-400'>$300</div>
							</div>

							<div className='flex flex-row gap-1 w-full'>
								<Button className='flex-1'>Order</Button>
								<Button variant='outline'>
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
						<div className='text-sm text-end text-neutral-400'>$300</div>
					</div>

					<div className='flex flex-row gap-1 w-full'>
						<Button className='flex-1'>Order</Button>
						<Button variant='outline'>Clear</Button>
					</div>
				</CardFooter>
			</Card>
		</div>
	);
}
