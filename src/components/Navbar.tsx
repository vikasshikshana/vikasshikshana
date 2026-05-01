"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import TranslateWidget from "./TranslateWidget";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  // { href: "/programs", label: "Programs" },
  { href: "/membership", label: "Membership" },
  { href: "/governance", label: "Governance" },
  // { href: "/news", label: "News & Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-emerald-900 text-white sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="bg-emerald-950 text-xs py-1.5 px-4 flex justify-between items-center">
        <span className="text-emerald-300 font-medium tracking-wide">ವಿಕಾಸ ಶಿಕ್ಷಣ ಸೌಹಾರ್ದ ಸಹಕಾರಿ ನಿ.</span>
        <div className="hidden sm:flex gap-5 text-emerald-300">
          <span>📞 +91 8861016415</span>
          <span>✉ vikasshikshana@gmail.com</span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src="/images/icon.png"
                alt="Vikas Shikshana logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-sm leading-tight">Vikas Shikshana</div>
              <div className="text-xs text-emerald-300 leading-tight">Souharda Sahakari Ni.</div>
            </div>
          </Link>

           {/* Desktop nav + translate */}
           <div className="hidden md:flex items-center gap-0.5">
             {navLinks.map((link) => (
               <Link
                 key={link.href}
                 href={link.href}
                 className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                   pathname === link.href
                     ? "bg-amber-500 text-white"
                     : "text-emerald-100 hover:bg-emerald-800 hover:text-white"
                 }`}
               >
                 {link.label}
               </Link>
             ))}
             <div className="ml-2 pl-3 border-l border-emerald-700">
               <TranslateWidget />
             </div>
           </div>

           {/* Mobile: hamburger only (translate is in mobile dropdown) */}
           <div className="md:hidden flex items-center gap-2">
             <button
               className="p-2 rounded text-emerald-200 hover:bg-emerald-800"
               onClick={() => setIsOpen(!isOpen)}
               aria-label="Toggle menu"
             >
               <div className="w-5 h-0.5 bg-current mb-1"></div>
               <div className="w-5 h-0.5 bg-current mb-1"></div>
               <div className="w-5 h-0.5 bg-current"></div>
             </button>
           </div>

        </div>

         {/* Mobile dropdown */}
         {isOpen && (
           <div className="md:hidden pb-3 border-t border-emerald-800">
             {navLinks.map((link) => (
               <Link
                 key={link.href}
                 href={link.href}
                 className={`block px-4 py-2 text-sm font-medium ${
                   pathname === link.href ? "text-amber-400" : "text-emerald-100 hover:text-white"
                 }`}
                 onClick={() => setIsOpen(false)}
               >
                 {link.label}
               </Link>
             ))}
             <div className="px-4 py-2 border-t border-emerald-800 mt-2">
               <TranslateWidget />
             </div>
           </div>
         )}
      </div>
    </nav>
  );
}
