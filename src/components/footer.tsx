export function Footer() {
  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-text">
            Copyright &copy; 2025 - Present Trlt3.
          </div>
          <div className="flex gap-6">
            <a href="https://docs.trtl3/store" className="text-text hover:text-accent-500">
              Docs
            </a>
            <a
              href="https://github.com/blobtrtl3/trtl3"
              target="_blank"
              className="text-text hover:text-accent-500"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
