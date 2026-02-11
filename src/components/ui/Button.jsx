import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className, ...props }) => {
    const baseStyles = "px-6 py-3 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";

    const variants = {
        primary: "bg-primary text-white shadow-[0_0_15px_rgba(45,127,249,0.3)] hover:shadow-[0_0_25px_rgba(45,127,249,0.6)] hover:-translate-y-0.5 border border-primary/50",
        secondary: "bg-transparent border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white hover:bg-white/5",
        glow: "bg-bg-dark border border-primary text-primary shadow-[0_0_10px_rgba(45,127,249,0.2)] hover:shadow-[0_0_20px_rgba(45,127,249,0.5)]"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
