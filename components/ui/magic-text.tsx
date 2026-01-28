"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface MagicTextProps {
    text: string;
    className?: string;
}

export const MagicText: React.FC<MagicTextProps> = ({ text, className }) => {
    const container = useRef(null);
    const isInView = useInView(container, { once: true, margin: "-20%" });
    const words = text.split(" ");

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.02, // Fast stagger for reading flow
            },
        },
    };

    const wordVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.p
            ref={container}
            className={cn("flex flex-wrap leading-relaxed", className)}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {words.map((word, i) => (
                <motion.span key={i} variants={wordVariants} className="mr-1.5 pt-1">
                    {word}
                </motion.span>
            ))}
        </motion.p>
    );
};
