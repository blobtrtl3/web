import { Sun } from "lucide-react";

export function ToggleTheme() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
    >
      <Sun />
    </button>
  );
}

