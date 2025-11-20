"use client"
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] sm:w-200 z-50">
      <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-xl p-4 flex items-center justify-between sm:justify-center">
        
        <button
          className="text-white text-2xl sm:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        <nav className="hidden sm:flex flex-row items-center gap-10">
          <a href="#sec2" className="text-amber-50 hover:text-sky-300 transition-colors">درباره من</a>
          <a href="#sec3" className="text-amber-50 hover:text-sky-300 transition-colors">تکنولوژی‌ها</a>
          <a href="#sec4" className="text-amber-50 hover:text-sky-300 transition-colors">تجربیات</a>
          <a href="#sec5" className="text-amber-50 hover:text-sky-300 transition-colors">پروژه‌ها</a>
        </nav>
      </div>

      <nav
        className={`sm:hidden mt-3 flex flex-col items-center gap-5 text-center backdrop-blur-lg bg-black/40 rounded-xl p-5 border border-white/10 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-5"
        }`}
      >
        <a
          href="#sec2"
          className="text-amber-50 hover:text-sky-300 transition-colors"
          onClick={() => setOpen(false)}
        >
          درباره من
        </a>
        <a
          href="#sec3"
          className="text-amber-50 hover:text-sky-300 transition-colors"
          onClick={() => setOpen(false)}
        >
          تکنولوژی‌ها
        </a>
        <a
          href="#sec4"
          className="text-amber-50 hover:text-sky-300 transition-colors"
          onClick={() => setOpen(false)}
        >
          تجربیات
        </a>
        <a
          href="#sec5"
          className="text-amber-50 hover:text-sky-300 transition-colors"
          onClick={() => setOpen(false)}
        >
          پروژه‌ها
        </a>
      </nav>
    </header>
  );
}
