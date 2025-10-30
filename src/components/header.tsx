export function Header() {
  return (
    <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur border-b border-gray-200 z-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex justify-between items-center h-[72px]">
          <div class="text-[#2f9e44] font-bold text-xl tracking-tight">TRTL3</div>
          <nav class="flex items-center gap-8">
            <a href="#docs" class="text-gray-800 text-[15px] font-medium hover:text-[#2f9e44] transition">Docs</a>
            <a href="#github" class="px-4 py-2 bg-[#2f9e44] text-white rounded-md text-[14px] font-semibold hover:bg-[#268a3a] transition-transform hover:-translate-y-[1px]">Star on GitHub</a>
          </nav>
        </div>
      </div>
    </header>
);
}
