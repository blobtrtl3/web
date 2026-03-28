import { Github } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-gray-200/80 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex items-center gap-2 group">
            <img
              src="https://raw.githubusercontent.com/blobtrtl3/docs/841ed1ff604ac649f55e2ce19df6220258d94a1b/logo/logo.svg"
              alt="Trtl3 logo"
              className="h-8 w-8"
            />
            <span className="text-text font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
              TRTL3
            </span>
          </a>
          <nav className="flex items-center gap-6">
            <a
              href="https://docs.trtl3.store"
              className="text-text text-sm font-medium hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
            <a
              href="https://github.com/blobtrtl3/trtl3"
              className="text-text hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
            >
              <Github size={20} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
