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
      class="w-4 border-none hover:cursor-pointer focus:outline-none"
    >
      {isDark ? (
        <Moon class="text-text" />
      ) : (
        <Sun class="text-text" />
      )}
    </button>
  );
}

