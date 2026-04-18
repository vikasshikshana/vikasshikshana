import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="bg-white rounded-xl p-3 inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="Vikas Shikshana Souharda Sahakari Ni."
                width={180}
                height={90}
                className="object-contain"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering communities through education and cooperative values since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-amber-500 mb-3 text-xs uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "Programs" },
                { href: "/membership", label: "Membership" },
                { href: "/governance", label: "Governance" },
                { href: "/news", label: "News & Events" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-amber-500 mb-3 text-xs uppercase tracking-wider">Our Programs</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Merit Scholarships</li>
              <li>Education Loans</li>
              <li>Vocational Training</li>
              <li>Digital Literacy</li>
              <li>Teacher Development</li>
              <li>Adult Education</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-amber-500 mb-3 text-xs uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>📍 No. 45, 3rd Cross, Rajajinagar, Bengaluru – 560 010</li>
              <li>📞 +91 80 2345 6789</li>
              <li>📱 +91 98765 43210</li>
              <li>✉ info@vikasshikshana.org</li>
              <li>🕐 Mon–Sat: 9:00 AM – 5:30 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <p>© 2025 Vikas Shikshana Souharda Sahakari Ni.. All rights reserved.</p>
          <p>Registered under Karnataka Souharda Sahakari Act, 1997 | Reg. No. KSF/SCR/2005/1234</p>
        </div>
      </div>
    </footer>
  );
}
