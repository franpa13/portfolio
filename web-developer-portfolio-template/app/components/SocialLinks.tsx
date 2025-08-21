import { FileText, Mail, Linkedin } from 'lucide-react';
import { SiGithub, SiTiktok } from '@icons-pack/react-simple-icons';

const SocialLinks = () => {
  const socials = [
    { name: 'GitHub', icon: <SiGithub />, href: 'https://github.com/franpa13' },
    { name: 'LinkedIn', icon: <Linkedin />, href: 'https://www.linkedin.com/in/francisco-paredes-354a2b26b/' },
    { name: 'CV', icon: <FileText />, href: 'https://drive.google.com/file/d/1Gxglwg2xu7zU7EE7am4WtsdJGaVIRJTo/view?usp=sharing' },
    { name: 'Email', icon: <Mail />, href: 'mailto:franpa619@gmail.com' },
    { name: 'TikTok(Creador de contenido sobre programacion)', icon: <SiTiktok />, href: 'https://www.tiktok.com/@jujedev?is_from_webapp=1&sender_device=pc' },
  ];

  return (
    <div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group p-3 text-gray-300 hover:text-blue-400 transition-colors duration-200"
          aria-label={social.name}
        >
          {/* Ícono */}
          <span className="text-2xl group-hover:scale-110 transition-transform duration-200 inline-block">
            {social.icon}
          </span>

          {/* Tooltip */}
          <span className="absolute top-full mb-2 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 
            bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap
            transition-all duration-200 pointer-events-none">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
