export function Footer() {
  return (
    <footer className="py-12 mt-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center flex-wrap gap-8 mb-6">
          <a
            href="https://github.com/blobtrtl3/trtl3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text text-sm font-medium hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://docs.trtl3.store"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text text-sm font-medium hover:text-primary transition-colors"
          >
            Documentation
          </a>
          <a
            href="https://github.com/blobtrtl3/trtl3/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text text-sm font-medium hover:text-primary transition-colors"
          >
            License
          </a>
        </div>
        <p className="text-sm text-disable">
          Copyright &copy; 2025 - 2026 TRTL3. Released under the AGPL-3.0
          license.
        </p>
      </div>
    </footer>
  );
}
