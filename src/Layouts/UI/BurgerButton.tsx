import { useState } from "react";
import { motion } from "framer-motion";

export default function HamburgerButton({ onClick }: { onClick?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    if (onClick) onClick();
  };

  return (
    <button
      className="flex flex-col justify-center items-center gap-1 md:hidden w-10 h-10 p-2"
      onClick={toggle}
    >
      {/* top line */}
      <motion.span
        className="block h-[2px] w-6 bg-white rounded"
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
      />
      {/* middle line */}
      <motion.span
        className="block h-[2px] w-6 bg-white rounded"
        animate={{ opacity: isOpen ? 0 : 1 }}
      />
      {/* bottom line */}
      <motion.span
        className="block h-[2px] w-6 bg-white rounded"
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
      />
    </button>
  );
}
