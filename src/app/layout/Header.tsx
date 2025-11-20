export default function Header() {
  return (
    <header className="fixed top-5 left-90 rounded-lg w-200 z-50 backdrop-blur-md bg-white/10 border-b border-white/10">
      <nav className="flex flex-row items-center justify-center gap-10 p-4">
        <button className="text-amber-50 hover:text-sky-300 transition-colors cursor-pointer">
          درباره من
        </button>
        <button className="text-amber-50 hover:text-sky-300 transition-colors cursor-pointer">
          تکنولوژی‌ها
        </button>
        <button className="text-amber-50 hover:text-sky-300 transition-colors cursor-pointer">
          تجربیات
        </button>
        <button className="text-amber-50 hover:text-sky-300 transition-colors cursor-pointer">
          پروژه‌ها
        </button>
      </nav>
    </header>
  );
}
