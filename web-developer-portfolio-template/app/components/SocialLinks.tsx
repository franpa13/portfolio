
import { IconType } from 'react-icons';
export interface SocialLinksType {
  name: string,
  icon: IconType,
  href: string
}
interface Props {
  socials: SocialLinksType[]
}
const SocialLinks = ({ socials }: Props) => {


  return (
    <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
      {socials.map(({ name, icon: Icon, href }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group p-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
          aria-label={name}
        >
          {/* Ícono */}
          <Icon size={20} className="text-xs sm:text-sm md:text-2xl transition-colors duration-300" />

          {/* Tooltip */}
          <span className="absolute top-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 
            bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap
            transition-all duration-200 pointer-events-none">
            {name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
