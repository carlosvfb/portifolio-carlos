'use client';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
  }

export function Header({ theme, toggleTheme }: HeaderProps) {
    return (
      <header className="bg-transparent border-b-[1px] border-black  text-black dark:text-white dark:border-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">Carlos Vítor</h1>
            <p className="text-sm font-semibold">Portifólio profissional</p>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:underline font-semibold">Sobre</a></li>
              <li><a href="#skills" className="hover:underline font-semibold">Habilidades</a></li>
              <li><a href="#projects" className="hover:underline font-semibold">Projetos</a></li>
              <li><a href="#contact" className="hover:underline font-semibold">Contato</a></li>
            </ul>
          </nav>
          <button onClick={toggleTheme} className="ml-4 p-2 bg-gray-600 rounded-full">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>
    );
  }
  