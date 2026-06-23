"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface SectionHeaderProps {
    icon?: string;
    title: string;
    highlightedText?: string;
    description: string;
  
    gradientFrom?: string;
    gradientTo?: string;
    className?: string;
}

export const SectionHeader = ({
    icon,
    title,
    highlightedText,
    description,

    gradientFrom = "from-blue-400",
    gradientTo = "to-purple-500",
    className = ""
}: SectionHeaderProps) => {
    return (
        <div className={`flex flex-col gap-4 items-center justify-center mb-16 ${className}`}>


            <motion.h2
                className="text-xl sm:text-2xl  font-bold text-center text-white "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            >
                {title}

                {highlightedText && (
                    <span
                        className={`
      flex items-center gap-4
      bg-clip-text
      text-transparent
      bg-gradient-to-r
      
      ${gradientFrom}
      ${gradientTo}
    `}
                    >
                        {highlightedText}

                        <Image
                            src={icon ? icon : "/gifs/cohete.gif"}
                            width={28}
                            height={28}
                            alt="Icon"
                            className="

     
     rounded-full
    w-9 h-9
      lg:w-12 lg:h-12 
    "
                        />


                    </span>
                )}

            </motion.h2>

            <motion.p
                className="text-xs sm:text-sm text-gray-400 max-w-2xl mt-0 leading-relaxed flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {description.split("\n").map((line, index) => (
                    <span
                        key={index}
                        className="w-full text-center block"
                    >
                        {line}
                    </span>
                ))}
            </motion.p>
        </div>
    );
};