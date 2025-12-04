import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiMui,
    SiShadcnui,
    SiRedux,

    SiAxios,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiDocker,
    SiStorybook,
    SiTestinglibrary,
 
} from "react-icons/si";

import { TbBrandFramerMotion, TbBrandJavascript } from "react-icons/tb";
import { MdOutlineDataUsage } from "react-icons/md";
import { FcMindMap } from "react-icons/fc";
import { AiOutlineApi } from "react-icons/ai";
import { JSX } from "react";
import { ZustandIcon } from "./icons/ZustandIcons";

export const techIcons: Record<
    string,
    { icon: JSX.Element; color: string }
> = {
    // Frontend
    "React": { icon: <SiReact />, color: "#61DAFB" },
    "React Js": { icon: <SiReact />, color: "#61DAFB" },
    "Next Js": { icon: <SiNextdotjs />, color: "#000000" },
    "Next.js": { icon: <SiNextdotjs />, color: "#000000" },
    "Typescript": { icon: <SiTypescript />, color: "#3178C6" },
    "Javascript": { icon: <TbBrandJavascript />, color: "#F7DF1E" },
    "Tailwind CSS": { icon: <SiTailwindcss />, color: "#38BDF8" },
    "Tailwind": { icon: <SiTailwindcss />, color: "#38BDF8" },
    "Material UI": { icon: <SiMui />, color: "#007FFF" },
    "Shadcn": { icon: <SiShadcnui />, color: "#000000" },
    "Redux": { icon: <SiRedux />, color: "#764ABC" },
    "Zustand": { icon: <ZustandIcon />, color: "#5B4638" },
    "Axios": { icon: <SiAxios />, color: "#5A29E4" },
    "Framer Motion": { icon: <TbBrandFramerMotion />, color: "#EC4899" },
    "React Scroll": { icon: <MdOutlineDataUsage />, color: "#16A34A" },
    "Storybook": { icon: <SiStorybook />, color: "#FF4785" },

    // Backend
    "Node Js": { icon: <SiNodedotjs />, color: "#8CC84B" },
    "Node": { icon: <SiNodedotjs />, color: "#8CC84B" },
    "Express": { icon: <SiExpress />, color: "#000000" },
    "PostgreSQL": { icon: <SiPostgresql />, color: "#336791" },

    // Otros
    "Docker": { icon: <SiDocker />, color: "#0db7ed" },
    "TDD": { icon: <SiTestinglibrary />, color: "#E11D48" },
    "Zod": { icon: <FcMindMap />, color: "#16A34A" },


    "recharts": { icon: <AiOutlineApi />, color: "#06b6d4" }
};
