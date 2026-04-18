import Link from "next/link";

const featuredEvent = {
  title: "20th Annual Day & Scholarship Award Ceremony 2025",
  date: "15 March 2025",
  location: "Rajajinagar Kannada Bhavana, Bengaluru",
  description: `Our landmark 20th Annual Day was a grand celebration of two decades of educational empowerment.
    The event was graced by Honorable Sri Dinesh Gundu Rao, Minister for Health & Family Welfare,
    Government of Karnataka, as the Chief Guest. 120 meritorious students received scholarships totaling
    ₹18.5 lakhs, and 38 vocational training graduates received their certificates.`,
  highlights: [
    "120 students received merit and need-based scholarships",
    "38 vocational training graduates received certificates",
    "Launch of new Digital Marketing course batch",
    "Special felicitation of 10 founding members",
    "Cultural programs by member students",
  ],
};

const allNews = [
  {
    id: 1,
    category: "Events",
    date: "15 March 2025",
    title: "20th Annual Day & Scholarship Ceremony",
    excerpt: "Our landmark 20th Annual Day was celebrated with grandeur, with 120 students receiving scholarships worth ₹18.5 lakhs.",
    tags: ["Annual Day", "Scholarships"],
  },
  {
    id: 2,
    category: "Programs",
    date: "08 February 2025",
    title: "New Batch: Digital Marketing Course Launched",
    excerpt: "40 students enrolled in our new Digital Marketing and Social Media Management batch, a timely addition to our vocational offerings.",
    tags: ["Vocational Training", "Digital Literacy"],
  },
  {
    id: 3,
    category: "Community",
    date: "26 January 2025",
    title: "Republic Day Tree Plantation Drive — 500 Saplings Planted",
    excerpt: "Members and staff planted 500 saplings across 5 villages in Bengaluru Rural district as part of our Green Karnataka initiative.",
    tags: ["Environment", "Republic Day"],
  },
  {
    id: 4,
    category: "Events",
    date: "20 November 2024",
    title: "Cooperative Week 2024 Celebrations",
    excerpt: "We celebrated the International Cooperative Week (Nov 4–10) with awareness camps, member felicitation, and a cooperative quiz competition for students.",
    tags: ["Cooperative Week", "Awareness"],
  },
  {
    id: 5,
    category: "Programs",
    date: "05 October 2024",
    title: "MOU with Tumkur Polytechnic College",
    excerpt: "Vikas Shikshana Souharda Sahakari Ni. signed a Memorandum of Understanding with Tumkur Polytechnic College for joint vocational training programs.",
    tags: ["Partnership", "Vocational Training"],
  },
  {
    id: 6,
    category: "Governance",
    date: "28 September 2024",
    title: "Annual General Body Meeting — Key Decisions",
    excerpt: "The 19th Annual General Body Meeting approved the annual report, 12% dividend declaration, and expansion of scholarship fund by 25%.",
    tags: ["AGBM", "Governance"],
  },
  {
    id: 7,
    category: "Community",
    date: "15 August 2024",
    title: "Independence Day Blood Donation Camp",
    excerpt: "In collaboration with Jayadeva Hospital, we organized a blood donation camp where 85 member volunteers donated blood.",
    tags: ["Health", "Independence Day"],
  },
  {
    id: 8,
    category: "Programs",
    date: "01 July 2024",
    title: "200 Students Complete PMGDISHA Digital Literacy Course",
    excerpt: "200 members and family members received PMGDISHA certificates in a graduation ceremony attended by local elected representatives.",
    tags: ["Digital Literacy", "PMGDISHA"],
  },
  {
    id: 9,
    category: "Programs",
    date: "10 June 2024",
    title: "Scholarship Applications Open for 2024–25",
    excerpt: "We invite applications for merit and need-based scholarships for students who have excelled in SSLC and PUC examinations. Last date: 31 July 2024.",
    tags: ["Scholarships", "Applications"],
  },
  {
    id: 10,
    category: "Community",
    date: "08 March 2024",
    title: "Women's Day: Empowering Women Through Education",
    excerpt: "Our International Women's Day event honored 25 women members who completed vocational training and successfully established their own businesses.",
    tags: ["Women's Day", "Empowerment"],
  },
  {
    id: 11,
    category: "Programs",
    date: "15 January 2024",
    title: "Teacher Development Workshop on NEP 2020",
    excerpt: "80 teacher-members attended a 2-day workshop on implementing the National Education Policy 2020 in Karnataka classrooms, conducted in partnership with DIET Bengaluru.",
    tags: ["Teacher Development", "NEP 2020"],
  },
  {
    id: 12,
    category: "Governance",
    date: "01 January 2024",
    title: "Society Completes 19 Years",
    excerpt: "As we step into our 19th year, we look back at 850+ scholarships, 3,200+ vocational trainees, and 45 villages touched. Thank you to our 2,500+ members!",
    tags: ["Anniversary", "Milestone"],
  },
];

const upcomingEvents = [
  {
    date: "05 April 2025",
    title: "SSLC Results Scholarship Camp",
    desc: "Free guidance camp for SSLC students on scholarship applications, higher education options, and CET coaching enrollment.",
    time: "10:00 AM – 1:00 PM",
    location: "Society Office, Rajajinagar",
  },
  {
    date: "15 April 2025",
    title: "New Vocational Training Batch: Tailoring",
    desc: "Enrollment open for the June 2025 batch of our popular Tailoring and Fashion Design course. Limited to 25 seats.",
    time: "All day (enrollment open)",
    location: "Vocational Training Center",
  },
  {
    date: "30 April 2025",
    title: "Board Meeting – May 2025",
    desc: "Regular monthly Board of Directors meeting to review programs and approve scholarship applications.",
    time: "11:00 AM",
    location: "Society Conference Room",
  },
  {
    date: "15 June 2025",
    title: "Scholarship Applications Open 2025–26",
    desc: "Merit and need-based scholarship applications open for students who appeared in the 2025 board examinations.",
    time: "Application period",
    location: "Society Office / Online",
  },
];

const categoryColors: Record<string, string> = {
  Events: "bg-blue-100 text-blue-800",
  Programs: "bg-green-100 text-green-800",
  Community: "bg-purple-100 text-purple-800",
  Governance: "bg-amber-100 text-amber-800",
};

export default function NewsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Stay Updated</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">News & Events</h1>
          <p className="text-emerald-200 text-lg max-w-2xl">
            The latest from Vikas Shikshana Souharda Sahakari Ni. — program launches, scholarships,
            community events, and governance updates.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-10 md:py-16 bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-4">Featured Event</div>
          <div className="bg-white rounded-2xl shadow-sm border border-amber-200 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600"></div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs text-slate-500 mb-2">{featuredEvent.date} · {featuredEvent.location}</div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">{featuredEvent.title}</h2>
                  <p className="text-slate-600 leading-relaxed text-sm mb-6">{featuredEvent.description}</p>
                  <div className="bg-emerald-50 rounded-xl p-4 text-xs text-emerald-700">
                    🏛️ Felicitated by Hon. Sri Dinesh Gundu Rao, Minister for Health, Govt. of Karnataka
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-3">Event Highlights</h3>
                  <ul className="space-y-2">
                    {featuredEvent.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-amber-500 font-bold">★</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-10 md:py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">What's Coming</div>
          <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingEvents.map((e) => (
              <div key={e.title} className="bg-white/5 rounded-xl p-5 border border-slate-700">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-500 text-white rounded-lg px-3 py-2 text-center font-bold text-xs flex-shrink-0">
                    <div className="text-lg font-bold">{e.date.split(" ")[0]}</div>
                    <div>{e.date.split(" ")[1]} {e.date.split(" ")[2]}</div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{e.title}</h3>
                    <p className="text-emerald-300 text-xs mb-2">{e.desc}</p>
                    <div className="text-slate-300 text-xs">🕐 {e.time} · 📍 {e.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">Archive</div>
          <h2 className="text-3xl font-bold text-slate-800 mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allNews.map((n) => (
              <div key={n.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-1 bg-gradient-to-r from-emerald-600 to-emerald-400"></div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[n.category]}`}>
                      {n.category}
                    </span>
                    <span className="text-slate-400 text-xs">{n.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2 leading-snug text-sm">{n.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-3">{n.excerpt}</p>
                  <div className="flex flex-wrap gap-1">
                    {n.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-slate-600 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-10 md:py-16 bg-amber-50 border-t border-amber-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">
            Stay Connected with Our Monthly Newsletter
          </h2>
          <p className="text-slate-700 mb-6">
            Get updates on scholarships, new courses, events, and cooperative news delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-900"
            />
            <button className="bg-emerald-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
