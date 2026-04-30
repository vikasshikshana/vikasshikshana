import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Meet the elected Board of Directors of Vikas Shikshana Souharda Sahakari Niyamitha. Learn how our cooperative is governed democratically by its members in Hosapete, Karnataka.",
  alternates: { canonical: "https://vikasshikshana.in/governance" },
};

const boardMembers = [
  {
    name: "Shri Vishwanath C. Hiremath",
    role: "Chairman",
    designation: "Businessman",
    since: "Elected 2026",
    bio: "A committed businessman with a deep passion for the cooperative sector. Recipient of the \"Sahakara Ratna\" award from the Karnataka state government and the \"Bhargava\" award from local Indian musicians. Actively contributes to social work through Vikas Yuvaka Mandal.",
    // committees: ["Education & Scholarship Committee (Chair)", "Program & Events Committee"],
    initials: "VH",
    photo: "/images/directors/vishwanath.png",
  },
  {
    name: "Shri Vikas K.",
    role: "Vice Chairman",
    designation: "3D Visualizer",
    since: "Elected 2026",
    bio: "A creative professional with a passion for painting. Actively involved in social work through Vikas Yuvaka Mandal.",
    // committees: ["Finance & Audit Committee (Chair)", "Member Welfare Committee"],
    initials: "VK",
    photo: "/images/directors/vikas.jpeg",
  },
  {
    name: "Shri S. S. Hiremath",
    role: "Director",
    designation: "Retired DDPU",
    since: "Elected 2026",
    bio: "A highly respected commerce lecturer, S. S. Hiremath brings over 30 years of academic expertise to the board. A former DDPU who oversaw government PU college administration across Gadag district.",
    // committees: ["Program & Events Committee (Chair)", "Education & Scholarship Committee"],
    initials: "SS",
  },
  {
    name: "Shri Basavaraj Sanna Jin",
    role: "Director",
    designation: "Businessman",
    since: "Elected 2026",
    // bio: "",
    // committees: ["Finance & Audit Committee", "Building & Infrastructure Committee (Chair)"],
    initials: "BS",
    photo: "/images/directors/basavaraj_s.jpeg",
  },
  {
    name: "Shri Anant Joshi",
    role: "Director",
    designation: "Journalist",
    since: "Elected 2026",
    bio: "A journalist with a passion for writing, collaboration, and media. Engages in social and health work through Vikas and Patanjali.",
    // committees: ["Education & Scholarship Committee", "Member Welfare Committee (Chair)"],
    initials: "AJ",
    photo: "/images/directors/anant.png",
  },
  {
    name: "Shri Gangadhar Pattar",
    role: "Director",
    designation: "Retired Agriculture Officer",
    since: "Elected 2026",
    bio: "A retired agriculture officer with wide-ranging interests in art, painting, reading, and social service.",
    // committees: ["Education & Scholarship Committee", "Member Welfare Committee (Chair)"],
    initials: "GP",
    photo: "/images/directors/gangadhar.png",
  },
  {
    name: "Shri Basavaraj K",
    role: "Director",
    // designation: "",
    since: "Elected 2026",
    // bio: "A retired Agriculture Officer representing our rural member base. Shri Patil has been instrumental in expanding our programs to agricultural communities and establishing our Tumkur branch.",
    // committees: ["Program & Events Committee", "Building & Infrastructure Committee"],
    initials: "BK",
  },
  {
    name: "Smt. Madhushri A.",
    role: "Director",
    designation: "Physics Lecturer",
    since: "Elected 2026",
    bio: "A physics lecturer with a love for reading books. Actively involved in social work through Vikas Yuvaka Mandal.",
    // committees: ["Member Welfare Committee", "Education & Scholarship Committee"],
    initials: "MA",
    photo: "/images/directors/madhu.jpg",
  },
  {
    name: "Shri Shankarachari",
    role: "Director",
    // designation: "IT Professional & Community Leader",
    since: "Elected 2026",
    // bio: "A senior IT professional who donated the initial 50 computers for our digital literacy center. Shri Pradeep spearheads our digital transformation and e-learning initiatives.",
    // committees: ["Program & Events Committee", "Building & Infrastructure Committee"],
    initials: "SH",
  },
  {
    name: "Shri Srinivas Kichadi",
    role: "Director",
    // designation: "IT Professional & Community Leader",
    since: "Elected 2026",
    // bio: "A senior IT professional who donated the initial 50 computers for our digital literacy center. Shri Pradeep spearheads our digital transformation and e-learning initiatives.",
    // committees: ["Program & Events Committee", "Building & Infrastructure Committee"],
    initials: "SK",
  },
  {
    name: "Smt. Rekha",
    role: "Director",
    // designation: "Primary School Teacher",
    since: "Elected 2026",
    // bio: "A passionate primary school teacher representing the younger generation of educator-members. Smt. Anitha leads our Foundational Literacy and Numeracy programs and connects us with the state's Samagra Shiksha initiatives.",
    // committees: ["Education & Scholarship Committee", "Program & Events Committee"],
    initials: "RK",
  },
  {
    name: "Shri Diwakar",
    role: "Distinguished Advisor",
    // designation: "Primary School Teacher",
    since: "Elected 2026",
    // bio: "A passionate primary school teacher representing the younger generation of educator-members. Smt. Anitha leads our Foundational Literacy and Numeracy programs and connects us with the state's Samagra Shiksha initiatives.",
    // committees: ["Education & Scholarship Committee", "Program & Events Committee"],
    initials: "DK",
  },
];

// const committees = [
//   {
//     name: "Education & Scholarship Committee",
//     chair: "Shri Ramesh B. Naidu (President)",
//     members: "5 directors + 2 expert members",
//     role: "Administers all scholarship programs, vocational training, digital literacy, and adult education. Reviews scholarship applications, conducts interviews for higher-education scholarships, and oversees our training center operations.",
//     meetings: "Monthly (or as required)",
//   },
//   {
//     name: "Finance & Audit Committee",
//     chair: "Smt. Lakshmi Devi K. (Vice President)",
//     members: "3 directors + external auditor liaison",
//     role: "Oversees all financial planning, budgeting, and accounting. Liaises with the statutory auditor, prepares financial statements for the Annual General Body, and ensures compliance with the Karnataka Souharda Sahakari Act.",
//     meetings: "Quarterly + as required",
//   },
//   {
//     name: "Member Welfare Committee",
//     chair: "Smt. Padmavathi H. Rao (Director)",
//     members: "4 directors + 1 honorary advisor",
//     role: "Handles member services, Common Good Fund applications, grievance redressal, and welfare schemes. Organizes member meets and community outreach programs.",
//     meetings: "Monthly",
//   },
//   {
//     name: "Program & Events Committee",
//     chair: "Shri Manjunath S. Gowda (Secretary)",
//     members: "4 directors",
//     role: "Plans and organizes all society events including Annual Day, Cooperative Week, scholarship award ceremonies, workshops, and cultural programs. Manages our newsletter and communications.",
//     meetings: "Bi-monthly + event-based",
//   },
//   {
//     name: "Building & Infrastructure Committee",
//     chair: "Shri Vijayakumar R. Shetty (Treasurer)",
//     members: "3 directors",
//     role: "Manages all physical assets of the society including our registered office, training center, and digital literacy center. Oversees maintenance, renovation, and expansion of facilities.",
//     meetings: "Quarterly",
//   },
// ];

const documents = [
  { name: "Annual Report 2024–25", type: "PDF", size: "2.4 MB" },
  { name: "Annual Report 2023–24", type: "PDF", size: "2.1 MB" },
  { name: "Audit Report 2024–25", type: "PDF", size: "890 KB" },
  { name: "Audit Report 2023–24", type: "PDF", size: "780 KB" },
  { name: "Society Bylaws (2023 Amended)", type: "PDF", size: "1.2 MB" },
  { name: "AGBM Minutes – September 2024", type: "PDF", size: "450 KB" },
  { name: "AGBM Minutes – September 2023", type: "PDF", size: "410 KB" },
  { name: "Election Results – 2022", type: "PDF", size: "320 KB" },
];

export default function GovernancePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Transparency</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Governance</h1>
          <p className="text-emerald-200 text-lg max-w-2xl">
            Our cooperative is governed democratically by its members. Meet the elected Board of Directors
            and learn how decisions are made transparently.
          </p>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">Democratic Structure</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">How We Are Governed</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="bg-emerald-900 text-white rounded-2xl p-8">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-amber-400 font-bold text-xl mb-2">General Body</h3>
              <p className="text-emerald-200 text-sm leading-relaxed">
                All members form the governing authority. Meets annually (AGBM) before 30 September.
                Elects the board every 5 years and approves major decisions.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-3xl text-emerald-300">↓</div>
            </div>
            <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-8">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-slate-800 font-bold text-xl mb-2">Board of Directors</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                12 elected directors manage day-to-day affairs. Elected by the General Body for a 5-year term.
                Guided by the cooperative's bylaws.
              </p>
            </div>
          </div>
          {/*<div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-8 max-w-4xl mx-auto">*/}
          {/*  {committees.map((c) => (*/}
          {/*    <div key={c.name} className="bg-stone-50 rounded-xl p-3 md:p-4 text-center border border-gray-100 text-xs">*/}
          {/*      <div className="font-bold text-slate-800 mb-1">{c.name.split(" ")[0]} Committee</div>*/}
          {/*      <div className="text-slate-500">{c.meetings}</div>*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-12 md:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">Leadership</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Board of Directors</h2>
            <p className="text-slate-500 text-sm mt-2">Elected in Jan 2026 | Term: 2026–2031</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {boardMembers.map((m) => (
              <div key={m.name} className="bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow overflow-hidden flex flex-col items-center pt-7 pb-5 px-5">
                {m.photo ? (
                  <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-emerald-100 shadow-md flex-shrink-0">
                    <Image src={m.photo} alt={m.name} width={128} height={128} className="w-full h-full object-cover object-center" />
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-2xl bg-emerald-900 flex items-center justify-center border-4 border-emerald-100 shadow-md flex-shrink-0">
                    <span className="text-white font-bold text-3xl">{m.initials}</span>
                  </div>
                )}
                <div className="mt-4 text-center w-full">
                  <h3 className="font-bold text-slate-800 leading-tight">{m.name}</h3>
                  <div className="text-amber-600 text-xs font-semibold mt-0.5">{m.role}</div>
                  <div className="text-slate-500 text-xs">{m.designation}</div>
                  <div className="text-slate-400 text-xs">{m.since}</div>
                  <p className="text-slate-600 text-xs leading-relaxed mt-3 text-left">{m.bio}</p>
                </div>
                {/*<div>*/}
                {/*  <div className="text-xs font-semibold text-slate-800 mb-1">Committee Roles:</div>*/}
                {/*  {m.committees.map((c) => (*/}
                {/*    <div key={c} className="text-xs text-slate-500 flex items-start gap-1">*/}
                {/*      <span className="text-emerald-300">•</span> {c}*/}
                {/*    </div>*/}
                {/*  ))}*/}
                {/*</div>*/}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*/!* Committees *!/*/}
      {/*<section className="py-12 md:py-20 bg-white">*/}
      {/*  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*    <div className="text-center mb-12">*/}
      {/*      <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">Standing Committees</div>*/}
      {/*      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Our Committees</h2>*/}
      {/*    </div>*/}
      {/*    <div className="space-y-4">*/}
      {/*      {committees.map((c) => (*/}
      {/*        <div key={c.name} className="bg-stone-50 rounded-xl p-6 border border-gray-100">*/}
      {/*          <div className="flex flex-col md:flex-row md:items-start gap-4">*/}
      {/*            <div className="md:w-64 flex-shrink-0">*/}
      {/*              <h3 className="font-bold text-slate-800">{c.name}</h3>*/}
      {/*              <div className="text-xs text-amber-600 font-medium mt-1">Chair: {c.chair}</div>*/}
      {/*              <div className="text-xs text-slate-500 mt-0.5">{c.members}</div>*/}
      {/*              <div className="text-xs text-slate-400 mt-0.5">Meets: {c.meetings}</div>*/}
      {/*            </div>*/}
      {/*            <p className="text-slate-600 text-sm leading-relaxed">{c.role}</p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/*/!* Profit Distribution *!/*/}
      {/*<section className="py-12 md:py-20 bg-slate-800 text-white">*/}
      {/*  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*    <div className="text-center mb-12">*/}
      {/*      <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2">Financial Transparency</div>*/}
      {/*      <h2 className="text-2xl md:text-3xl font-bold">Profit Distribution (as per bylaws)</h2>*/}
      {/*      <p className="text-slate-300 mt-3 max-w-2xl mx-auto">*/}
      {/*        As required under the Karnataka Souharda Sahakari Act, 1997, our net profits are distributed as follows:*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">*/}
      {/*      {[*/}
      {/*        { pct: "20%", label: "Operational Reserve Fund", desc: "For unforeseen losses and contingencies" },*/}
      {/*        { pct: "2%", label: "Cooperative Education Fund", desc: "Remitted to Karnataka State Souharda Federal Cooperative" },*/}
      {/*        { pct: "5%", label: "Common Good Fund", desc: "Community welfare and social programs" },*/}
      {/*        { pct: "73%", label: "Dividend to Members", desc: "Distributed as dividend on share capital (up to 15%)" },*/}
      {/*      ].map((item) => (*/}
      {/*        <div key={item.label} className="bg-white/5 rounded-xl p-6 border border-slate-700 text-center">*/}
      {/*          <div className="text-4xl font-bold text-amber-400 mb-2">{item.pct}</div>*/}
      {/*          <div className="font-bold text-sm mb-2">{item.label}</div>*/}
      {/*          <p className="text-slate-300 text-xs leading-relaxed">{item.desc}</p>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/*/!* Documents *!/*/}
      {/*<section className="py-12 md:py-20 bg-white">*/}
      {/*  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*    <div className="text-center mb-12">*/}
      {/*      <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">Downloads</div>*/}
      {/*      <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Documents & Reports</h2>*/}
      {/*    </div>*/}
      {/*    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">*/}
      {/*      {documents.map((d) => (*/}
      {/*        <div key={d.name} className="flex items-center justify-between p-4 bg-stone-50 rounded-xl border border-gray-100 hover:bg-emerald-50 transition-colors">*/}
      {/*          <div className="flex items-center gap-3">*/}
      {/*            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 text-xs font-bold">{d.type}</div>*/}
      {/*            <div>*/}
      {/*              <div className="font-medium text-slate-800 text-sm">{d.name}</div>*/}
      {/*              <div className="text-slate-400 text-xs">{d.size}</div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <button className="text-emerald-600 text-sm font-medium hover:text-emerald-700">Download</button>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*    <p className="text-center text-slate-500 text-xs mt-6">*/}
      {/*      For certified copies, please visit our registered office.*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* CTA */}
      <section className="py-10 md:py-16 bg-amber-50 border-t border-amber-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">Exercise Your Democratic Rights</h2>
          <p className="text-slate-700 mb-6">Every member has the right to attend the Annual General Body Meeting, vote, and stand for election. Join us and have a say.</p>
          <Link href="/membership" className="bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-block">
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  );
}
