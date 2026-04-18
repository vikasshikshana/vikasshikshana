import Link from "next/link";

const stats = [
  { value: "286+", label: "Active Members" },
  // { value: "850+", label: "Scholarships Awarded" },
  // { value: "3,200+", label: "Vocation Trainees" },
  // { value: "45", label: "Villages Covered" },
  { value: "20", label: "Years of Service" },
];

const programs = [
  {
    icon: "🎓",
    title: "Merit Scholarships",
    desc: "Annual scholarships for children of members who excel in SSLC and PUC examinations, ranging from ₹2,000 to ₹25,000.",
    href: "/programs#scholarships",
    color: "bg-amber-50 border-amber-100",
    iconBg: "bg-amber-100",
  },
  {
    icon: "💼",
    title: "Vocational Training",
    desc: "Short-term skill development courses in IT, tailoring, automobile repair, food processing, and more.",
    href: "/programs#vocational",
    color: "bg-emerald-50 border-emerald-100",
    iconBg: "bg-emerald-100",
  },
  {
    icon: "💻",
    title: "Digital Literacy",
    desc: "Computer literacy programs aligned with PMGDISHA, empowering members with essential digital skills.",
    href: "/programs#digital",
    color: "bg-sky-50 border-sky-100",
    iconBg: "bg-sky-100",
  },
  {
    icon: "📚",
    title: "Adult Education",
    desc: "Functional literacy, financial literacy, and continuing education programs for adult members.",
    href: "/programs#adult",
    color: "bg-violet-50 border-violet-100",
    iconBg: "bg-violet-100",
  },
  {
    icon: "🏫",
    title: "School Support",
    desc: "Supply distribution, free coaching centers, and library programs for members' children in government schools.",
    href: "/programs#school",
    color: "bg-rose-50 border-rose-100",
    iconBg: "bg-rose-100",
  },
  {
    icon: "👩‍🏫",
    title: "Teacher Development",
    desc: "In-service training workshops on modern pedagogy, digital tools, and activity-based learning methods.",
    href: "/programs#teacher",
    color: "bg-teal-50 border-teal-100",
    iconBg: "bg-teal-100",
  },
];

const testimonials = [
  {
    name: "Smt. Kavitha R.",
    role: "Member since 2012",
    text: "Thanks to the merit scholarship, my daughter could pursue her engineering degree without financial stress. The cooperative has been a lifeline for our family.",
    initial: "K",
  },
  {
    name: "Sri Manjunath K.",
    role: "Vocational Training Graduate",
    text: "The computer training course I completed here helped me start my own accounting services business. The support from the society is unmatched.",
    initial: "M",
  },
  {
    name: "Smt. Padma V.",
    role: "Women's Self-Help Group Leader",
    text: "The financial literacy workshops changed how I manage my household budget. I am now helping other women in my village do the same.",
    initial: "P",
  },
];

const news = [
  {
    date: "15 March 2025",
    tag: "Event",
    title: "Annual Scholarship Award Ceremony 2025",
    desc: "120 deserving students received merit scholarships at our 20th Annual Day celebration at Rajajinagar Kannada Bhavana.",
  },
  {
    date: "08 February 2025",
    tag: "Program",
    title: "New Batch: Digital Marketing Course",
    desc: "A new batch of 40 students enrolled in our Digital Marketing and Social Media Management vocational course.",
  },
  {
    date: "26 January 2025",
    tag: "Community",
    title: "Republic Day Tree Plantation Drive",
    desc: "Members and staff planted 500 saplings across 5 villages in Bengaluru Rural district as part of our Green Karnataka initiative.",
  },
];

const values = [
  { icon: "🤝", title: "Democratic Control", desc: "One member, one vote. Every voice matters." },
  { icon: "📖", title: "Education First", desc: "Continuous learning at the heart of all we do." },
  { icon: "🌍", title: "Community Care", desc: "Concern for the wellbeing of our community." },
  { icon: "🔍", title: "Transparency", desc: "Open books, open governance, open hearts." },
];

export default function Home() {
  return (
    <div className="bg-stone-50">

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-slate-800 via-emerald-900 to-teal-800 text-white overflow-hidden">
        {/* Soft decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-emerald-600/20 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-teal-500/15 blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-emerald-200 text-sm mb-6">
              <span>🏆</span>
              <span>Registered under Karnataka Souharda Sahakari Act, 1997</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Empowering Communities{" "}
              <span className="text-amber-400">Through Education</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100/80 leading-relaxed mb-10 max-w-2xl">
              Vikas Shikshana Souharda Sahakari Ni. is a member-owned cooperative dedicated to
              fostering educational excellence, skill development, and lifelong learning across Karnataka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/membership"
                className="bg-amber-500 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-amber-400 transition-colors text-center shadow-lg shadow-amber-900/20"
              >
                Become a Member
              </Link>
              <Link
                href="/programs"
                className="bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/20 transition-colors text-center backdrop-blur-sm"
              >
                Explore Programs
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-stone-50" style={{clipPath: "ellipse(55% 100% at 50% 100%)"}}></div>
      </section>

      {/* ── Stats ── */}
      <section className="py-8 md:py-12 bg-white border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <div className="text-2xl md:text-4xl font-bold text-emerald-800 group-hover:text-amber-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs ── */}
      <section className="py-12 md:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-3">Our Programs & Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Six comprehensive program areas designed to uplift every member of our cooperative family —
              from school children to senior citizens.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((p) => (
              <Link key={p.title} href={p.href} className="group">
                <div className={`${p.color} rounded-2xl p-6 h-full border hover:shadow-md transition-all hover:-translate-y-0.5`}>
                  <div className={`${p.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4`}>
                    {p.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                  <div className="mt-4 text-emerald-700 text-sm font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                    Learn more <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/programs" className="bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-block shadow-sm">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ── About / Mission ── */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2 mb-5">
                Building Karnataka's Future, One Member at a Time
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4 text-sm">
                Founded in 2005 by a group of dedicated educators and community leaders in Bengaluru,
                Vikas Shikshana Souharda Sahakari Ni. has grown from a small collective of 50 founding
                members to a thriving cooperative serving over 2,500 members across 45 villages and urban wards.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8 text-sm">
                Registered under the Karnataka Souharda Sahakari Act, 1997, we operate on the seven
                cooperative principles — with a special focus on our 5th principle: Education, Training, and Information.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {values.map((v) => (
                  <div key={v.title} className="flex items-start gap-3 p-3 rounded-xl bg-stone-50">
                    <span className="text-xl">{v.icon}</span>
                    <div>
                      <div className="font-semibold text-slate-700 text-sm">{v.title}</div>
                      <div className="text-slate-400 text-xs mt-0.5">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-block bg-emerald-800 text-white px-7 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-sm">
                Read Our Story
              </Link>
            </div>

            {/* Mission / Vision card — now warm emerald, not harsh blue */}
            <div className="bg-gradient-to-br from-emerald-900 to-teal-800 rounded-2xl p-8 text-white shadow-xl shadow-emerald-900/20">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-6 bg-amber-400 rounded-full"></div>
                <h3 className="text-lg font-bold text-amber-400">Our Mission</h3>
              </div>
              <p className="text-emerald-100/90 leading-relaxed mb-7 text-sm">
                "To promote equitable access to quality education, skill development, and lifelong learning
                for all members and their communities, operating on the cooperative principles of voluntary
                membership, democratic control, and concern for community."
              </p>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-6 bg-amber-400 rounded-full"></div>
                <h3 className="text-lg font-bold text-amber-400">Our Vision</h3>
              </div>
              <p className="text-emerald-100/90 leading-relaxed mb-7 text-sm">
                "A Karnataka where cooperative membership guarantees every child the right to learn, every
                adult the opportunity to grow, and every family the dignity of economic self-sufficiency."
              </p>
              <div className="border-t border-white/10 pt-5">
                <p className="text-emerald-300 text-sm italic leading-relaxed">
                  "ಸಹಕಾರ ತತ್ವಗಳ ಮೂಲಕ ಸಮುದಾಯ ವಿಕಾಸ"
                  <span className="block text-xs mt-1 text-emerald-400 not-italic">Community development through cooperative values</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── News ── */}
      <section className="py-12 md:py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Latest Updates</span>
              <h2 className="text-3xl font-bold text-slate-800 mt-2">News & Events</h2>
            </div>
            <Link href="/news" className="text-emerald-700 font-semibold hover:text-emerald-800 text-sm flex items-center gap-1">
              View all <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((n) => (
              <div key={n.title} className="bg-white rounded-2xl overflow-hidden border border-emerald-100 hover:shadow-md transition-shadow group">
                <div className="h-1.5 bg-gradient-to-r from-emerald-600 to-teal-500"></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">{n.tag}</span>
                    <span className="text-xs text-slate-400">{n.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2 leading-snug group-hover:text-emerald-700 transition-colors">{n.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{n.desc}</p>
                  <Link href="/news" className="text-emerald-700 text-sm font-semibold mt-4 inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Read more <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials — slate-800, neutral dark, not harsh blue ── */}
      <section className="py-12 md:py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Member Stories</span>
            <h2 className="text-3xl font-bold text-white mt-2">What Our Members Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 rounded-2xl p-7 border border-white/10 hover:bg-white/8 transition-colors">
                <div className="text-amber-400 text-5xl font-serif leading-none mb-4">"</div>
                <p className="text-slate-300 leading-relaxed mb-6 text-sm">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — warm amber-50, not harsh solid amber ── */}
      <section className="py-12 md:py-20 bg-amber-50 border-t border-amber-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-1.5 text-amber-700 text-sm font-medium mb-6">
            <span>🌱</span> Open for new members
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Join Our Cooperative Family Today
          </h2>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Become a member and gain access to scholarships, vocational training, education loans, and a
            supportive community committed to your growth and your family's future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/membership"
              className="bg-emerald-800 text-white px-9 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-colors text-base shadow-md shadow-emerald-900/20"
            >
              Apply for Membership
            </Link>
            <Link
              href="/contact"
              className="bg-white border border-slate-200 text-slate-700 px-9 py-4 rounded-xl font-semibold hover:bg-stone-50 hover:border-slate-300 transition-colors text-base shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
