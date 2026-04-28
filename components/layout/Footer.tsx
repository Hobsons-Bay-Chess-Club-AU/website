import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Brand and About */}
          <div className="md:col-span-4">
            <Image
              src="/images/logo.png"
              alt="HBCC Logo"
              width={100}
              height={100}
              className="mb-8 w-24 h-auto"
            />
            <p className="text-white/60 text-lg leading-relaxed mb-8 font-open-sans">
              Hobsons Bay Chess Club is the largest and most vibrant chess community in Melbourne's West. 
              Building champions and community through chess since 2008.
            </p>
            <div className="flex space-x-4">
               <Link href="https://facebook.com" target="_blank" className="bg-white/5 hover:bg-hbcc-gold p-3 rounded-full transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </Link>
              <Link href="https://instagram.com" target="_blank" className="bg-white/5 hover:bg-hbcc-gold p-3 rounded-full transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-antonio font-bold uppercase mb-8 tracking-widest text-hbcc-gold">Explore</h3>
            <ul className="space-y-4">
              <li><Link href="/about-us" className="text-white/60 hover:text-white transition-colors text-lg">About Us</Link></li>
              <li><Link href="/play-chess" className="text-white/60 hover:text-white transition-colors text-lg">Play Chess</Link></li>
              <li><Link href="/juniors" className="text-white/60 hover:text-white transition-colors text-lg">Juniors</Link></li>
              <li><Link href="/tournaments" className="text-white/60 hover:text-white transition-colors text-lg">Tournaments</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-antonio font-bold uppercase mb-8 tracking-widest text-hbcc-gold">Support</h3>
            <ul className="space-y-4">
              <li><Link href="/membership" className="text-white/60 hover:text-white transition-colors text-lg">Membership</Link></li>
              <li><Link href="/sponsors" className="text-white/60 hover:text-white transition-colors text-lg">Sponsors</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors text-lg">Contact</Link></li>
              <li><Link href="https://portal.hobsonsbaychess.com/" className="text-white/60 hover:text-white transition-colors text-lg">Portal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-antonio font-bold uppercase mb-8 tracking-widest text-hbcc-gold">Find Us</h3>
            <p className="text-white/60 text-lg mb-6 font-open-sans leading-relaxed">
              Altona Meadows Community Centre<br />
              28 Trafalgar Ave, Altona Meadows VIC 3028
            </p>
            <p className="text-white text-xl font-bold font-antonio">
              info@hobsonsbaychess.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-white/40 text-sm font-open-sans">
            © {new Date().getFullYear()} HOBSONS BAY CHESS CLUB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="text-white/40 hover:text-white text-sm transition-colors uppercase tracking-widest">Privacy</Link>
            <Link href="/terms" className="text-white/40 hover:text-white text-sm transition-colors uppercase tracking-widest">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
