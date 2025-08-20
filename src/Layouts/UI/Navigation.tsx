import { motion } from "framer-motion";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation({ items }: { items: string[] }) {
	const location = useLocation();

	const underlineVariants = {
		rest: { scaleX: 0 },
		hover: { scaleX: 1 },
	};

	return (
		<>
			{items.map((item) => {
				const path = `/${item}`;
				const isActive = location.pathname === path;

				return (
					<motion.li
						key={item}
						className='relative inline-block cursor-pointer'
						initial='rest'
						whileHover='hover'
					>
						<Link
							to={path}
							className={`relative z-10 transition-colors duration-200 ${
								isActive ? "font-bold text-lime-500" : "font-normal text-white"
							}`}
						>
							{item.charAt(0).toUpperCase() + item.slice(1)}
						</Link>

						{!isActive && (
							<motion.div
								className='absolute bottom-0 left-0 h-[2px] w-full bg-lime-500 origin-left'
								variants={underlineVariants}
								transition={{ duration: 0.3, ease: "easeInOut" }}
							/>
						)}
					</motion.li>
				);
			})}
		</>
	);
}

export default React.memo(Navigation);