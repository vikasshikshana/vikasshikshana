import Link from "next/link";

const benefits = [
  { icon: "🎓", title: "Scholarship Access", desc: "We will help in getting merit and need-based scholarships for SSLC, PUC, and higher education." },
  { icon: "💼", title: "Subsidized Training", desc: "Access all vocational and skill development courses at heavily subsidized rates." },
  // { icon: "💻", title: "Free Digital Literacy", desc: "Free computer and digital literacy training for you and your family members." },
  // { icon: "📚", title: "Adult Education", desc: "Free functional literacy and financial literacy programs." },
  { icon: "🏦", title: "Education Loan Facilitation", desc: "Expert guidance and facilitation for education loans through cooperative banks and government schemes." },
  { icon: "🗳️", title: "Voting Rights", desc: "Participate in the Annual General Body Meeting and vote on all major decisions." },
  { icon: "💰", title: "Dividend on Shares", desc: "Annual dividend declared on your share capital investment." },
  // { icon: "🤝", title: "Welfare Fund", desc: "Access to Common Good Fund for emergency educational assistance." },
  // { icon: "📰", title: "Cooperative Newsletter", desc: "Monthly newsletter with updates, schemes, and educational resources." },
];

const regularMember = {
  type: "Regular Member",
  description: "Full membership with voting rights and all benefits",
  minShares: 10,
  shareValue: 100,
  minAmount: "₹1,000",
  rights: ["Full voting rights at General Body", "Dividend on share capital", "Board election eligibility", "All program access at subsidized rates"],
};

const steps = [
  { step: "01", title: "Download Application", desc: "Collect membership application form from our office." },
  { step: "02", title: "Fill & Attach Documents", desc: "Complete the form and attach required documents (ID proof, address proof, passport photo)." },
  { step: "03", title: "Submit & Pay", desc: "Submit the form at our office along with the share capital amount and admission fee." },
  { step: "04", title: "Verification", desc: "The Board's Membership Committee reviews and verifies your application (3–5 working days)." },
  { step: "05", title: "Welcome!", desc: "Receive your membership certificate, passbook, and member ID card. You are now a member!" },
];

const docs = [
  "Completed Membership Application Form",
  "ID Proof (self-attested photocopy)",
  "Address Proof (self-attested photocopy)",
  "2 recent passport-size photographs",
  "Introduction letter from existing member (recommended)",
];

const faqs = [
  { q: "Who can become a member?", a: "Any individual aged 18 years and above who resides or works within our operational area (Bengaluru Urban, Bengaluru Rural, or Tumkur district) can apply for membership. There is no caste, religion, or gender restriction — membership is open to all." },
  { q: "Can my family members also use the programs?", a: "Yes! As a regular member, your spouse, children, and dependent family members are eligible for scholarships, coaching programs, and many other benefits. Children of members can apply for merit and need-based scholarships." },
  { q: "How is my share capital kept safe?", a: "Your share capital is maintained in a separate statutory reserve fund as required by the Karnataka Souharda Sahakari Act, 1997. It is refundable upon resignation from membership (subject to bylaws)." },
  { q: "Can I withdraw my membership?", a: "Yes. You can submit a resignation letter to the Board. Upon acceptance, your share capital will be refunded (after deduction of any dues) within 90 days as per our bylaws." },
  { q: "How often are dividends declared?", a: "Dividends are declared at the Annual General Body Meeting based on the financial performance of the cooperative for that year." },
];

export default function MembershipPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Join Us</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Membership</h1>
          <p className="text-emerald-200 text-lg max-w-2xl">
            Become a member of the Vikas Shikshana Souharda Sahakari Ni. and unlock a world of educational
            opportunities and cooperative benefits for your entire family.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">Member Benefits</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Why Join Our Cooperative Organization?</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
              Membership in Vikas Shikshana Souharda Sahakari Ni. is an investment in your family's educational future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-stone-50 rounded-xl p-6 hover:bg-emerald-50 transition-colors border border-gray-100 hover:border-emerald-200">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">{b.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Types */}
      <section className="py-12 md:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">Membership</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Regular Membership</h2>
            <p className="text-slate-600 mt-3 max-w-xl mx-auto">Full membership with voting rights, dividend eligibility, and access to all programs and benefits.</p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="rounded-2xl p-8 border-2 border-emerald-600 bg-emerald-900 text-white">
              <h3 className="text-2xl font-bold mb-2 text-amber-400">{regularMember.type}</h3>
              <p className="text-sm mb-6 text-emerald-200">{regularMember.description}</p>
              <div className="rounded-xl p-4 mb-6 bg-emerald-800">
                <div className="text-xs uppercase tracking-wider mb-2 text-slate-300">Share Capital</div>
                <div className="text-3xl font-bold text-white">{regularMember.minAmount}</div>
                <div className="text-xs mt-1 text-emerald-100">
                  Minimum {regularMember.minShares} shares × ₹{regularMember.shareValue}/share
                </div>
                <div className="text-xs mt-1 text-emerald-100">
                  + ₹100 one-time admission fee
                </div>
              </div>
              <ul className="space-y-2">
                {regularMember.rights.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-emerald-100">
                    <span className="text-amber-400">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">Application Process</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">How to Become a Member</h2>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-0 md:gap-0">
            {steps.map((s, i) => (
              <div key={s.step} className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 flex-1 relative">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] right-0 h-0.5 bg-emerald-200 -translate-y-px" style={{right: "-50%"}}></div>
                )}
                <div className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 w-full">
                  <div className="relative z-10 w-12 h-12 rounded-full bg-emerald-900 text-white text-base font-bold flex items-center justify-center flex-shrink-0 md:mx-auto md:mb-3">
                    {s.step}
                  </div>
                  <div className="text-left md:text-center md:px-2">
                    <h3 className="font-bold text-slate-800 text-sm mb-1">{s.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-12 md:py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">Required Documents</div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Documents Checklist</h2>
              <ul className="space-y-3">
                {docs.map((d) => (
                  <li key={d} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-emerald-600 rounded text-white text-xs flex items-center justify-center mt-0.5 flex-shrink-0">✓</div>
                    <span className="text-slate-600 text-sm">{d}</span>
                  </li>
                ))}
              </ul>
              {/* <div className="mt-8">
                <Link
                  href="/contact"
                  className="bg-emerald-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors inline-block"
                >
                  Download Application Form
                </Link>
              </div> */}
            </div>
            <div>
              <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">Office Address</div>
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-6">
                <h3 className="font-bold text-slate-800 mb-3">Registered Office</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ground Floor, JKS Complex, Anjaneya Temple, Main Bazar, <br />
                  Hosapete – 583 201,<br />
                  Karnataka, India
                </p>
                <div className="mt-4 space-y-1 text-sm text-slate-600">
                  <div>📞 +91 88610 16415</div>
                  <div>📱 +91 88610 16415 (WhatsApp)</div>
                  <div>✉ vikasshikshana@gmail.com</div>
                  <div>🕐 Mon–Sat: 9:00 AM – 5:30 PM</div>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-800 mb-2">Need Help?</h3>
                <p className="text-slate-600 text-sm">
                  Walk into our office during working hours and our staff will guide you through the
                  entire membership process at no charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">FAQ</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-stone-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-slate-800 mb-2">Q: {f.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">A: {f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-amber-50 border-t border-amber-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">Start Your Journey Today</h2>
          <p className="text-slate-700 mb-6">Join 2,500+ members who have already invested in their community's educational future.</p>
          <Link href="/contact" className="bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-block">
            Visit Our Office or Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
