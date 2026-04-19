import Link from "next/link";

const milestones = [
  { year: "2005", event: "Founded by 50 educators and community leaders in Hosapete" },
  { year: "2006", event: "Vikas School started in Sindhanur, Raichur District" },
  // { year: "2008", event: "Launched vocational training center in Rajajinagar" },
  // { year: "2010", event: "Membership crossed 500; opened second branch in Tumkur" },
  // { year: "2013", event: "Digital literacy center inaugurated with 30 computers" },
  // { year: "2015", event: "Celebrated 10 years; 1,000+ members; 200+ scholarships awarded" },
  // { year: "2018", event: "MOU signed with Karnataka Vocational Training Academy" },
  // { year: "2020", event: "Launched online classes during COVID-19; distributed 2,000+ study kits" },
    { year: "2020", event: "Outsourced Vikas School Sindhanur to IKUE School Sindhanur" },
  { year: "2022", event: "Membership crossed 2,000" },
  { year: "2025", event: "Celebrating 20 years with 2,500+ members" },
];

const principles = [
  { num: "1", title: "Voluntary & Open Membership", desc: "Cooperative membership is open to all persons able to use its services without discrimination." },
  { num: "2", title: "Democratic Member Control", desc: "Cooperatives are controlled by their members who actively participate in setting policies. One member, one vote." },
  { num: "3", title: "Member Economic Participation", desc: "Members contribute equitably to the capital of their cooperative and control it democratically." },
  { num: "4", title: "Autonomy & Independence", desc: "Cooperatives are autonomous, self-help organizations controlled by their members." },
  { num: "5", title: "Education, Training & Information", desc: "Cooperatives provide education for members, board, and staff to contribute to development. (Our founding principle)" },
  { num: "6", title: "Cooperation Among Cooperatives", desc: "Cooperatives serve their members most effectively by cooperating with other cooperatives." },
  { num: "7", title: "Concern for Community", desc: "Cooperatives work for the sustainable development of their communities." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">About Us</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Story & Mission</h1>
          <p className="text-emerald-200 text-lg max-w-2xl">
            Two decades of empowering people of Karnataka through education.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Who We Are</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Vikas Shikshana Souharda Sahakari Ni. was founded in January 2005 by a determined group
                of educators in Hosapete, Karnataka.
                Sharing the belief that education is the most powerful instrument of social transformation,
                they came together under the Karnataka Souharda Sahakari Act, 1997, to create a truly
                member-owned cooperative focused on educational upliftment.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The name itself embodies our purpose: <strong className="text-slate-800">Vikas</strong> (ವಿಕಾಸ)
                means Development, <strong className="text-slate-800">Shikshana</strong> (ಶಿಕ್ಷಣ) means Education,
                and <strong className="text-slate-800">Souharda</strong> (ಸೌಹಾರ್ದ) means Goodwill and
                Cooperative Friendship. Together, we are dedicated to developing our communities through education and solidarity.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Today, we serve 2,500+ members across Vijayanagara and Raichur districts — operating training centers, scholarship programs,
                digital literacy centers, and adult education initiatives that have transformed thousands of lives.
              </p>
              <div className="bg-emerald-50 rounded-xl p-6 border-l-4 border-emerald-600">
                <h3 className="font-bold text-slate-800 mb-2">Legal Registration</h3>
                <p className="text-sm text-slate-600">
                  Registered under the Karnataka Souharda Sahakari Act, 1997<br />
                  <strong>Registration No.:</strong> VJN-0003<br />
                  <strong>Date of Registration:</strong> 15 January 2005<br />
                  <strong>Federal Body:</strong> Karnataka State Souharda Federal Cooperative Ltd.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-emerald-900 rounded-xl p-8 text-white">
                <h3 className="text-amber-400 font-bold text-lg mb-3">Our Mission</h3>
                <p className="text-emerald-100 leading-relaxed">
                  To promote equitable access to quality education, skill development, and lifelong learning
                  for all members and their communities, operating on the cooperative principles of voluntary
                  membership, democratic control, and concern for community.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-8 text-slate-700">
                <h3 className="font-bold text-lg mb-3">Our Vision</h3>
                <p className="leading-relaxed">
                  A Karnataka where cooperative membership guarantees every child the right to learn,
                  every adult the opportunity to grow, and every family the dignity of economic self-sufficiency.
                </p>
              </div>
              <div className="bg-stone-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-800 mb-3">Operational Area</h3>
                <p className="text-slate-600 text-sm">
                  Vijayanagara District and  Raichur District, Karnataka
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-12 md:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">Two Decades of Impact</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Our Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-emerald-200 transform md:-translate-x-0.5"></div>
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={m.year} className={`flex items-start gap-6 relative ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"} pl-12 md:pl-0`}>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 inline-block">
                      <div className="text-emerald-600 font-bold text-sm mb-1">{m.year}</div>
                      <p className="text-slate-700 text-sm">{m.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-emerald-600 rounded-full border-2 border-white shadow transform md:-translate-x-1.5 mt-4"></div>
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 Principles */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">ICA Cooperative Principles</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">The Values We Live By</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              We operate on the seven cooperative principles established by the International Cooperative Alliance,
              as adopted by all Souharda cooperatives in Karnataka.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.num} className={`rounded-xl p-6 border ${p.num === "5" ? "bg-slate-800 text-white border-slate-700" : "bg-stone-50 border-gray-100"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-3 ${p.num === "5" ? "bg-amber-500 text-white" : "bg-emerald-600 text-white"}`}>
                  {p.num}
                </div>
                <h3 className={`font-bold mb-2 ${p.num === "5" ? "text-amber-400" : "text-slate-800"}`}>{p.title}</h3>
                <p className={`text-sm leading-relaxed ${p.num === "5" ? "text-emerald-200" : "text-slate-600"}`}>{p.desc}</p>
                {p.num === "5" && (
                  <div className="mt-3 text-xs text-amber-400 font-semibold">★ Our Founding Principle</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Souharda Advantage */}
      <section className="py-12 md:py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2">Why Souharda?</div>
            <h2 className="text-2xl md:text-3xl font-bold">The Souharda Advantage</h2>
            <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
              Unlike traditional cooperatives, Souharda cooperatives operate with complete member autonomy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Zero Government Interference", desc: "No government nominees on our board. No government share capital. Fully member-owned and controlled." },
              { title: "Self-Regulatory", desc: "Overseen by the Karnataka State Souharda Federal Cooperative — not government bureaucrats." },
              { title: "90%+ Profitability", desc: "Souharda cooperatives are among the most profitable cooperative models in India." },
              { title: "Tax Benefits", desc: "Eligible for deduction under Section 80P of the Income Tax Act, 1961 — same as regular cooperatives." },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 rounded-xl p-6 border border-slate-700">
                <div className="text-amber-400 text-lg mb-2">✓</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      {/*<section className="py-12 md:py-20 bg-white">*/}
      {/*  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*    <div className="text-center mb-12">*/}
      {/*      <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">Recognition</div>*/}
      {/*      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Awards & Achievements</h2>*/}
      {/*    </div>*/}
      {/*    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">*/}
      {/*      {[*/}
      {/*        { year: "2024", award: "Best Educational Cooperative", org: "Karnataka State Souharda Federal Cooperative Ltd." },*/}
      {/*        { year: "2022", award: "Excellence in Digital Literacy", org: "Pradhan Mantri Gramin Digital Saksharta Abhiyan" },*/}
      {/*        { year: "2020", award: "Outstanding Community Service (COVID-19 Relief)", org: "Bruhat Bengaluru Mahanagara Palike" },*/}
      {/*        { year: "2018", award: "Best Vocational Training Partner", org: "Karnataka Vocational Training Academy" },*/}
      {/*        { year: "2016", award: "Cooperative of the Year – Education Sector", org: "National Cooperative Union of India" },*/}
      {/*        { year: "2010", award: "Best New Cooperative", org: "Karnataka State Souharda Federal Cooperative Ltd." },*/}
      {/*      ].map((a) => (*/}
      {/*        <div key={a.award} className="text-center p-6 bg-amber-50 rounded-xl border border-amber-100">*/}
      {/*          <div className="text-3xl mb-2">🏆</div>*/}
      {/*          <div className="text-slate-800 font-bold mb-1">{a.award}</div>*/}
      {/*          <div className="text-xs text-emerald-600 font-medium mb-1">{a.year}</div>*/}
      {/*          <div className="text-slate-500 text-xs">{a.org}</div>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* CTA */}
      <section className="py-10 md:py-16 bg-amber-50 border-t border-amber-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">Be Part of Our Story</h2>
          <p className="text-slate-700 mb-6">Join 2,500+ members and help us write the next chapter of community development.</p>
          <Link href="/membership" className="bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-block">
            Join Today
          </Link>
        </div>
      </section>
    </div>
  );
}
