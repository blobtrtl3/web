export function Header() {
  return (
    <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur border-b border-gray-200 z-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex justify-between items-center h-[72px]">
          <div class="text-primary font-extrabold text-xl">TRTL3</div>
          <nav class="flex items-center gap-8">
            <a href="https://docs.trtl3.store" class="text-gray-800 text-[15px] font-medium hover:text-[#2f9e44] transition" target="_blank" rel="noopener noreferrer">Docs</a>
          </nav>
        </div>
      </div>
    </header>
  );
}


