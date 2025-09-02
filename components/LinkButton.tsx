
import React from 'react';

interface LinkButtonProps {
  href: string;
  text: string;
  icon: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center w-full p-4 bg-white/10 border border-white/20 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-105 hover:shadow-purple-500/50"
    >
      <div className="w-6 h-6 mr-3 text-white/80 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className="text-lg font-semibold text-white tracking-wide">
        {text}
      </span>
    </a>
  );
};

export default LinkButton;
