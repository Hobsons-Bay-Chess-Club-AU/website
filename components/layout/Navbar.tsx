"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about-us" },
  { name: "PLAY CHESS", href: "/play-chess" },
  { name: "JUNIORS", href: "/juniors" },
  { name: "TOURNAMENTS", href: "/tournaments" },
  { name: "SPONSORS", href: "/sponsors" },
  { name: "MEMBERSHIP", href: "/membership" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Home Page: Hamburger only, non-sticky
  if (isHome) {
    return (
      <>
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="HBCC Logo" width={80} height={80} className="w-20 h-auto" />
            </Link>
            
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4 text-white/80">
                <Link href="#" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </Link>
              </div>
              <button onClick={() => setIsOpen(true)} className="text-white hover:text-hbcc-gold transition-colors">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" /></svg>
              </button>
            </div>
          </div>
        </nav>
        <OverlayMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
    );
  }

  // Subpages: Horizontal menu, sticky, dynamic background
  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white py-2 shadow-xl" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="HBCC Logo" width={60} height={60} className={`w-14 h-auto transition-all ${scrolled ? "" : "brightness-0 invert"}`} />
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                    scrolled ? "text-black hover:text-hbcc-gold" : "text-white hover:text-hbcc-gold"
                  } ${pathname === item.href ? "text-hbcc-gold" : ""}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                href="https://portal.hobsonsbaychess.com/"
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  scrolled ? "bg-hbcc-gold text-black hover:bg-black hover:text-white" : "bg-hbcc-gold text-black hover:bg-white"
                }`}
              >
                MEMBER LOGIN
              </Link>
            </div>

            {/* Mobile Toggle for Subpages */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsOpen(true)} className={scrolled ? "text-black" : "text-white"}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" /></svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <OverlayMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

function OverlayMenu({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
  return (
    <div 
      className={`fixed inset-0 bg-black/98 z-[100] flex flex-col items-center justify-center transition-all duration-500 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <button 
        onClick={() => setIsOpen(false)}
        className="absolute top-8 right-8 text-white hover:text-hbcc-gold transition-colors"
      >
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex flex-col items-center space-y-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-4xl md:text-6xl font-antonio font-bold text-white hover:text-hbcc-gold transition-colors tracking-tighter uppercase"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
