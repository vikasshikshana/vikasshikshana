import Link from "next/link";

type Program = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  details: { label: string; value: string }[];
  color: string;
  process?: string[];
  courses?: string[];
  topics?: string[];
  activities?: string[];
};

const programs: Program[] = [
  {
    id: "scholarships",
    icon: "🎓",
    title: "Merit Scholarships",
    subtitle: "Rewarding Academic Excellence",
    description: `Our flagship scholarship program rewards academic excellence among children of members.
    Every year, we award merit scholarships to students who score 85% or above in SSLC (10th) and PUC (12th)
    examinations, as well as need-based scholarships for higher education.`,
    details: [
      { label: "SSLC Merit Scholarship", value: "₹5,000 – ₹15,000" },
      { label: "PUC Merit Scholarship", value: "₹8,000 – ₹25,000" },
      { label: "Higher Education Scholarship", value: "Up to ₹50,000/year" },
      { label: "Eligibility", value: "Children of active members (min. 1 year)" },
      { label: "Applications Open", value: "June – August each year" },
      { label: "Students Benefited (2024)", value: "120 students" },
    ],
    process: ["Submit application with mark sheet", "Verification by Education Committee", "Interview (for higher education)", "Award ceremony at Annual Day"],
    color: "blue",
  },
  {
    id: "vocational",
    icon: "💼",
    title: "Vocational Training",
    subtitle: "Building Skills for Livelihood",
    description: `Our state-of-the-art vocational training center offers short-term (1–6 month) skill development
    courses to members and their family members. All courses are subsidized for society members and include
    certification recognized by Karnataka Vocational Training Academy.`,
    details: [
      { label: "Course Duration", value: "1 to 6 months" },
      { label: "Fee (Members)", value: "₹500 – ₹2,000 (subsidized)" },
      { label: "Fee (Non-Members)", value: "₹2,500 – ₹8,000" },
      { label: "Current Courses", value: "12 active courses" },
      { label: "Batches per Year", value: "4 batches" },
      { label: "Trainees (2024)", value: "380 trainees" },
    ],
    courses: [
      "Computer Operations & MS Office",
      "Tally & Accounting Software",
      "Digital Marketing & Social Media",
      "Tailoring & Fashion Design",
      "Beautician & Wellness",
      "Mobile Phone Repair",
      "Two-Wheeler Mechanics",
      "Food Processing & Value Addition",
      "Plumbing & Electrical Work",
      "Handicrafts & Handloom",
    ],
    color: "green",
  },
  {
    id: "digital",
    icon: "💻",
    title: "Digital Literacy",
    subtitle: "Bridging the Digital Divide",
    description: `Our Digital Literacy Center, equipped with 50 computers and high-speed internet, offers
    computer literacy programs aligned with the Pradhan Mantri Gramin Digital Saksharta Abhiyan (PMGDISHA).
    We focus on empowering rural members, women, and senior citizens with essential digital skills.`,
    details: [
      { label: "Computer Lab Capacity", value: "50 workstations" },
      { label: "Internet Speed", value: "100 Mbps fiber optic" },
      { label: "Course Duration", value: "20 hours (PMGDISHA)" },
      { label: "Fee", value: "Free for members" },
      { label: "Certification", value: "PMGDISHA Certificate" },
      { label: "Graduates (2024)", value: "650 members" },
    ],
    topics: [
      "Computer basics and internet usage",
      "Google Search and email management",
      "Digital payments (UPI, Net Banking)",
      "Government e-services (Aadhaar, DigiLocker)",
      "Online shopping and safety",
      "Video calling and social media basics",
    ],
    color: "purple",
  },
  {
    id: "teacher",
    icon: "👩‍🏫",
    title: "Teacher Development",
    subtitle: "Empowering Educators",
    description: `We believe that great teachers make great schools. Our teacher development programs offer
    in-service training workshops, certification programs, and professional development opportunities for
    teacher-members and educators across our operational area.`,
    details: [
      { label: "Workshops per Year", value: "8–12 workshops" },
      { label: "Duration", value: "1 day to 2 weeks" },
      { label: "Eligibility", value: "Teacher members and guests" },
      { label: "Fee", value: "Subsidized or free" },
      { label: "Partner Institutions", value: "DIET, DSERT, NIMHANS" },
      { label: "Teachers Trained (2024)", value: "280 teachers" },
    ],
    topics: [
      "Activity-Based Learning (ABL) methodology",
      "Foundational Literacy and Numeracy (FLN)",
      "Digital classroom tools & smart board usage",
      "Inclusive education & learning disabilities",
      "NEET/CET coaching techniques",
      "Mental health and student wellbeing",
    ],
    color: "orange",
  },
  {
    id: "adult",
    icon: "📚",
    title: "Adult Education",
    subtitle: "Learning Has No Age",
    description: `Our adult education programs target illiterate and semi-literate members, with special focus
    on women in rural areas. Programs include functional literacy, financial literacy, health awareness,
    and legal rights education — all conducted in Kannada.`,
    details: [
      { label: "Program Duration", value: "3 to 6 months" },
      { label: "Medium", value: "Kannada (primarily)" },
      { label: "Schedule", value: "Evening batches (6–8 PM)" },
      { label: "Fee", value: "Completely free" },
      { label: "Target Group", value: "Women, rural adults, seniors" },
      { label: "Participants (2024)", value: "450 adults" },
    ],
    topics: [
      "Kannada reading and writing basics",
      "Basic arithmetic and numeracy",
      "Financial literacy (banking, savings, insurance)",
      "Legal rights awareness (RTE, POCSO, RTI)",
      "Health and nutrition education",
      "Environmental awareness",
    ],
    color: "teal",
  },
  {
    id: "school",
    icon: "🏫",
    title: "School Support",
    subtitle: "Supporting Government School Children",
    description: `We actively support children of members studying in government schools through school supply
    distribution, free coaching centers, library book drives, and SSLC/CET preparation workshops.
    Every child deserves an equal opportunity to excel.`,
    details: [
      { label: "Schools Partnered", value: "25 government schools" },
      { label: "Students Reached", value: "3,200+ students" },
      { label: "Coaching Centers", value: "5 weekend coaching centers" },
      { label: "Library Books Donated", value: "12,000+ books" },
      { label: "School Kits Distributed", value: "1,800 kits/year" },
      { label: "Free Coaching Beneficiaries (2024)", value: "560 students" },
    ],
    activities: [
      "Annual school supply kits (notebooks, pens, geometry box)",
      "Uniform distribution for BPL member families",
      "Free SSLC and CET coaching classes",
      "Science and math olympiad preparation",
      "Library book donation to school libraries",
      "Tablet/laptop loan scheme for members' children",
    ],
    color: "red",
  },
];

const colorMap: Record<string, { bg: string; text: string; badge: string }> = {
  blue: { bg: "bg-emerald-50", text: "text-emerald-900", badge: "bg-emerald-600" },
  green: { bg: "bg-green-50", text: "text-green-900", badge: "bg-green-600" },
  purple: { bg: "bg-purple-50", text: "text-purple-900", badge: "bg-purple-600" },
  orange: { bg: "bg-orange-50", text: "text-orange-900", badge: "bg-orange-600" },
  teal: { bg: "bg-teal-50", text: "text-teal-900", badge: "bg-teal-600" },
  red: { bg: "bg-red-50", text: "text-red-900", badge: "bg-red-600" },
};

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">What We Do</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Programs & Services</h1>
          <p className="text-emerald-200 text-lg max-w-2xl">
            Six comprehensive program areas designed to uplift every member of our cooperative family —
            from school children to senior citizens.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-white border-b sticky top-[88px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex gap-3 overflow-x-auto pb-1 text-sm font-medium">
            {programs.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="whitespace-nowrap text-emerald-700 hover:text-emerald-900 border border-emerald-200 rounded-full px-4 py-1.5 hover:bg-emerald-50 transition-colors">
                {p.icon} {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {programs.map((prog, i) => {
            const c = colorMap[prog.color];
            return (
              <div key={prog.id} id={prog.id} className="scroll-mt-32">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Info card */}
                  <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 ${c.badge} rounded-xl flex items-center justify-center text-2xl`}>
                        {prog.icon}
                      </div>
                      <div>
                        <h2 className={`text-2xl font-bold ${c.text}`}>{prog.title}</h2>
                        <p className="text-slate-500 text-sm">{prog.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed mb-6">{prog.description}</p>

                    {/* Courses / Topics / Activities */}
                    {prog.courses && (
                      <div>
                        <h3 className={`font-bold ${c.text} mb-3`}>Available Courses</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {prog.courses.map((course) => (
                            <div key={course} className="flex items-center gap-2 text-sm text-slate-600">
                              <div className={`w-1.5 h-1.5 rounded-full ${c.badge}`}></div>
                              {course}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {prog.topics && (
                      <div>
                        <h3 className={`font-bold ${c.text} mb-3`}>Program Topics</h3>
                        <ul className="space-y-2">
                          {prog.topics.map((topic) => (
                            <li key={topic} className="flex items-start gap-2 text-sm text-slate-600">
                              <div className={`w-1.5 h-1.5 rounded-full ${c.badge} mt-2 flex-shrink-0`}></div>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {prog.activities && (
                      <div>
                        <h3 className={`font-bold ${c.text} mb-3`}>Key Activities</h3>
                        <ul className="space-y-2">
                          {prog.activities.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-sm text-slate-600">
                              <div className={`w-1.5 h-1.5 rounded-full ${c.badge} mt-2 flex-shrink-0`}></div>
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {prog.process && (
                      <div>
                        <h3 className={`font-bold ${c.text} mb-3`}>Application Process</h3>
                        <ol className="space-y-2">
                          {prog.process.map((step, j) => (
                            <li key={step} className="flex items-start gap-3 text-sm text-slate-600">
                              <div className={`w-5 h-5 rounded-full ${c.badge} text-white text-xs flex items-center justify-center flex-shrink-0`}>{j + 1}</div>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>

                  {/* Details card */}
                  <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className={`${c.bg} rounded-2xl p-6`}>
                      <h3 className={`font-bold ${c.text} mb-4`}>Program Details</h3>
                      <div className="space-y-3">
                        {prog.details.map((d) => (
                          <div key={d.label} className="flex justify-between items-start text-sm border-b border-white/50 pb-2 last:border-0">
                            <span className="text-slate-600 font-medium">{d.label}</span>
                            <span className={`font-bold ${c.text} text-right ml-4`}>{d.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <Link
                          href="/contact"
                          className={`${c.badge} text-white w-full py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center block`}
                        >
                          Enquire / Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {i < programs.length - 1 && <div className="border-b border-gray-100 mt-16"></div>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Government Schemes */}
      <section className="py-12 md:py-20 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2">Partnerships</div>
            <h2 className="text-2xl md:text-3xl font-bold">Government Scheme Linkages</h2>
            <p className="text-slate-300 mt-3 max-w-2xl mx-auto">
              We help our members access a range of government schemes and subsidies.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "PMGDISHA (Digital Literacy)",
              "PM Kaushal Vikas Yojana",
              "Arivu Education Loan Scheme",
              "CM Kaushalya Yojana",
              "Samagra Shiksha Karnataka",
              "SSP Scholarship Portal",
              "Rajiv Gandhi Loan Scholarship",
              "MSME Startup Support",
            ].map((scheme) => (
              <div key={scheme} className="bg-white/5 rounded-lg p-4 border border-slate-700 text-center text-sm text-slate-300">
                {scheme}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-amber-50 border-t border-amber-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">Ready to Enroll or Apply?</h2>
          <p className="text-slate-700 mb-6">Contact us today to learn more about any of our programs or to begin your application.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/membership" className="bg-emerald-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Become a Member
            </Link>
            <Link href="/contact" className="border-2 border-emerald-800 text-emerald-800 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
