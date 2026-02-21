import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-full glass-card hover-glow flex items-center justify-center group transition-all duration-300"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 h-6 w-6 text-primary transition-all duration-500 ${
            theme === "dark" 
              ? "rotate-90 scale-0 opacity-0" 
              : "rotate-0 scale-100 opacity-100"
          }`} 
        />
        <Moon 
          className={`absolute inset-0 h-6 w-6 text-primary transition-all duration-500 ${
            theme === "dark" 
              ? "rotate-0 scale-100 opacity-100" 
              : "-rotate-90 scale-0 opacity-0"
          }`} 
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
