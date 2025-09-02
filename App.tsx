
import React from 'react';
import LinkButton from './components/LinkButton';
import { InstagramIcon, SpotifyIcon, WhatsAppIcon } from './components/Icons';
import AnimatedBackground from './components/AnimatedBackground';

const App: React.FC = () => {
  const links = [
    {
      href: 'https://instagram.com/edsonskievicz',
      text: '@edsonskievicz',
      icon: <InstagramIcon />,
    },
    {
      href: '#', // Fictitious link
      text: 'Meus sons',
      icon: <SpotifyIcon />,
    },
    {
      href: 'https://wa.me/5500000000000', // Editable WhatsApp link
      text: 'Contato',
      icon: <WhatsAppIcon />,
    },
  ];

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-gray-900 via-purple-900/80 to-black text-white overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-between min-h-screen p-4 sm:p-6">
        <header className="text-center pt-16 sm:pt-20">
          <img 
            src="https://picsum.photos/seed/edson/128/128" 
            alt="Foto de Edson Skievicz"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-lg"
          />
          <h1 
            style={{ fontFamily: "'Russo One', sans-serif" }}
            className="text-4xl sm:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
          >
            Edson Skievicz
          </h1>
          <p className="mt-4 text-md sm:text-lg text-gray-300 font-light">
            Entre cogumelos, riffs e boas vibes
          </p>
        </header>

        <nav className="w-full max-w-md my-8 sm:my-10">
          <div className="flex flex-col space-y-4">
            {links.map((link, index) => (
              <LinkButton key={index} href={link.href} text={link.text} icon={link.icon} />
            ))}
          </div>
        </nav>

        <footer className="pb-6 text-center">
          <p className="text-sm text-gray-400/80">
            Criado com boas vibes
          </p>
        </footer>
      </div>
    </main>
  );
};

export default App;
