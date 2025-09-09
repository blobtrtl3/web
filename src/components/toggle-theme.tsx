import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-4 border-none hover:cursor-pointer"
    >
      {isDark ? (
        <Moon className="text-text" />
      ) : (
        <Sun className="text-text" />
      )}
    </button>
  );
}

