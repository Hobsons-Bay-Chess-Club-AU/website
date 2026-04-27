import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Image
              src="/images/logo.png"
              alt="HBCC Logo"
              width={80}
              height={80}
              className="mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              Hobsons Bay Chess Club is a friendly community club for chess players of all levels.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/play-chess" className="text-gray-400 hover:text-white transition-colors">Play Chess</Link></li>
              <li><Link href="/juniors" className="text-gray-400 hover:text-white transition-colors">Juniors</Link></li>
              <li><Link href="/tournaments" className="text-gray-400 hover:text-white transition-colors">Tournaments</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/membership" className="text-gray-400 hover:text-white transition-colors">Membership</Link></li>
              <li><Link href="/sponsors" className="text-gray-400 hover:text-white transition-colors">Sponsors</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="https://portal.hobsonsbaychess.com/" className="text-gray-400 hover:text-white transition-colors">Member Login</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 text-sm mb-2">
              Altona Meadows Community Centre<br />
              28 Trafalgar Ave, Altona Meadows VIC 3028
            </p>
            <p className="text-gray-400 text-sm">
              Email: info@hobsonsbaychess.com
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Hobsons Bay Chess Club. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
