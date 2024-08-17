import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";

const socials = [
  {icon: <FaGithub />, path: 'https://github.com/alelimiranda227'},
  {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/aleli-miranda-88b992152/'},
  {icon: <FaYoutube />, path: 'https://www.youtube.com/@alelimiranda8006'},
  {icon: <FaFacebook />, path: 'https://www.facebook.com/profile.php?id=100085927448924'},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon} 
          </Link>
        );
      })}
    </div>
  );
};

export default Social;