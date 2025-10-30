export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-[72px]">
          <div className="text-[#2f9e44] font-bold text-xl tracking-tight">TRTL3</div>
          <nav className="flex items-center gap-8">
            <a href="#docs" className="text-gray-800 text-[15px] font-medium hover:text-[#2f9e44] transition">Docs</a>
            <a href="#github" className="px-4 py-2 bg-[#2f9e44] text-white rounded-md text-[14px] font-semibold hover:bg-[#268a3a] transition-transform hover:-translate-y-[1px]">Star on GitHub</a>
          </nav>
        </div>
      </div>
    </header>
);
}
