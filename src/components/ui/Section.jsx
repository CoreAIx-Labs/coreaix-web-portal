import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

const Section = ({ children, className, id, ...props }) => {
    return (
        <section
            id={id}
            className={cn("py-20 px-6 md:px-12 relative overflow-hidden", className)}
            {...props}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-7xl mx-auto"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
