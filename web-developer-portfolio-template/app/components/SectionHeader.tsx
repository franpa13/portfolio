"use client";
import { motion } from "framer-motion";
import { ReactElement } from "react";

interface SectionHeaderProps {
    icon?: ReactElement;
    subtitle: string;
    title: string;
    highlightedText?: string;
    description: string;
    subtitleColor?: string;
    gradientFrom?: string;
    gradientTo?: string;
    className?: string;
}

export const SectionHeader = ({
    icon,
    subtitle,
    title,
    highlightedText,
    description,
    subtitleColor = "#FFD700",
    gradientFrom = "from-blue-400",
    gradientTo = "to-purple-500",
    className = ""
}: SectionHeaderProps) => {
    return (
        <div className={`flex flex-col gap-4 items-center justify-center mb-16 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-2"
                style={{ color: subtitleColor }}
            >
                {icon && <div className="text-base md:text-2xl">{icon}</div>}
                <span className="text-sm font-medium tracking-wider">{subtitle}</span>
            </motion.div>

            <motion.h2
                className="text-2xl sm:text-4xl  font-bold text-center text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            >
                {title} {highlightedText && (
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientFrom} ${gradientTo}`}>
                        {highlightedText}
                    </span>
                )}
            </motion.h2>

            <motion.p
                className="text-base sm:text-lg text-gray-400 max-w-2xl text-center mt-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {description}
            </motion.p>
        </div>
    );
};