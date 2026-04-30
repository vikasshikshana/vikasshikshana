"use client";
import { useState } from "react";

const offices = [
  {
    type: "Registered & Main Office",
    address: "Ground Floor, JKS Complex, Anjaneya Temple, Main Bazar, Hosapete – 583 201, Karnataka",
    phone: "+91 8861016415",
    mobile: "+91 8861016415",
    email: "vikasshikshana@gmail.com",
    hours: "Monday – Saturday: 9:00 AM – 5:30 PM",
    closed: "2nd & 4th Saturdays",
  },
  // {
  //   type: "Tumkur Branch Office",
  //   address: "No. 12, 1st Floor, Gandhi Nagar, Tumkur – 572 101, Karnataka",
  //   phone: "+91 81 6789 0123",
  //   mobile: "+91 94482 56789",
  //   email: "tumkur@vikasshikshana.org",
  //   hours: "Monday – Saturday: 9:30 AM – 5:00 PM",
  //   closed: "Sundays and Public Holidays",
  // },
  // {
  //   type: "Vocational Training Center",
  //   address: "No. 2, 5th Cross, Malleshwaram, Bengaluru – 560 003, Karnataka",
  //   phone: "+91 80 2346 7890",
  //   mobile: "+91 97424 56789",
  //   email: "training@vikasshikshana.org",
  //   hours: "Monday – Saturday: 8:00 AM – 7:00 PM",
  //   closed: "Sundays",
  // },
];

const contacts = [
  { role: "CEO", name: "Smt. Shashikala HM", mobile: "+91 8861016415", email: "vikasshikshana@gmail.com" },
  // { role: "Secretary", name: "Sri Manjunath S. Gowda", mobile: "+91 98765 22222", email: "secretary@vikasshikshana.org" },
  // { role: "Membership Enquiries", name: "Membership Desk", mobile: "+91 8861016415", email: "vikasshikshana@gmail.com" },
  // { role: "Scholarship Enquiries", name: "Education Committee", mobile: "+91 98765 33333", email: "scholarships@vikasshikshana.org" },
  // { role: "Training Center", name: "Training Coordinator", mobile: "+91 97424 56789", email: "training@vikasshikshana.org" },
  // { role: "Grievance Redressal", name: "Welfare Committee", mobile: "+91 98765 44444", email: "grievance@vikasshikshana.org" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    enquiryType: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "64cfd7c8-7f74-4aaf-acbe-a341276225a7",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject || formData.enquiryType,
          enquiry_type: formData.enquiryType,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">Get in Touch</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-emerald-200 text-lg max-w-2xl">
            We are here to help. Whether you want to become a member, apply for a scholarship, enroll in a
            course, or simply learn more — reach out to us.
          </p>
        </div>
      </section>

      {/* Key Contacts */}
      <section className="py-10 md:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-2">Direct Contacts</div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Who to Contact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contacts.map((c) => (
              <div key={c.role} className="bg-white rounded-xl p-5 border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all">
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">{c.role}</div>
                <div className="font-bold text-slate-800 mb-3">{c.name}</div>
                <div className="space-y-1 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <span>📱</span>
                    <a href={`tel:${c.mobile}`} className="hover:text-emerald-700">{c.mobile}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>✉</span>
                    <a href={`mailto:${c.email}`} className="hover:text-emerald-700 text-xs break-all">{c.email}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Offices */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">Send a Message</div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Write to Us</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Received!</h3>
                  <p className="text-green-600">
                    Thank you for reaching out. Our team will respond within 2 working days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sri / Smt. Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Enquiry Type *</label>
                    <select
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    >
                      <option value="">Select an option...</option>
                      <option>Membership Enquiry</option>
                      <option>Scholarship Application</option>
                      <option>Vocational Training Enrollment</option>
                      {/*<option>Digital Literacy Course</option>*/}
                      <option>Education Loan Assistance</option>
                      <option>Governance / Document Request</option>
                      <option>Grievance / Complaint</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Brief subject of your enquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your enquiry in detail..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-emerald-900 text-white py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                  {error && (
                    <p className="text-xs text-red-600 text-center">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}
                  <p className="text-xs text-slate-500 text-center">
                    We respond within 2 working days. For urgent matters, please call directly.
                  </p>
                </form>
              )}
            </div>

            {/* Offices */}
            <div>
              <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">Locations</div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Offices</h2>
              <div className="space-y-4">
                {offices.map((o) => (
                  <div key={o.type} className="bg-stone-50 rounded-xl p-6 border border-gray-100">
                    <div className="font-bold text-slate-800 mb-1">{o.type}</div>
                    <div className="text-sm text-slate-600 space-y-1">
                      <div className="flex items-start gap-2">
                        <span>📍</span>
                        <span>{o.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📞</span>
                        <a href={`tel:${o.phone}`} className="hover:text-emerald-700">{o.phone}</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📱</span>
                        <a href={`tel:${o.mobile}`} className="hover:text-emerald-700">{o.mobile} (WhatsApp)</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✉</span>
                        <a href={`mailto:${o.email}`} className="hover:text-emerald-700 text-xs">{o.email}</a>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>🕐</span>
                        <span>{o.hours}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-400">
                        <span>🚫</span>
                        <span>Closed: {o.closed}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl h-96 overflow-hidden border border-emerald-100 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.565!2d76.3775!3d15.2972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5f1234567890%3A0x0!2sJKS%20Complex%2C%20Anjaneya%20Temple%2C%20Main%20Bazar%2C%20Hosapete%20583201!5e0!3m2!1sen!2sin!4v1618000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social & Quick Info */}
      <section className="py-10 md:py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-bold text-lg mb-2 text-amber-400">WhatsApp</h3>
              <p className="text-slate-300 text-sm">
                Send us a WhatsApp message at<br />
                <a href="tel:+919876543210" className="text-white font-medium">+91 8861016415</a><br />
                for quick responses.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-bold text-lg mb-2 text-amber-400">Email</h3>
              <p className="text-slate-300 text-sm">
                Email at: <a href="mailto:vikasshikshana@gmail.com" className="text-white">vikasshikshana@gmail.com</a><br />
                {/*Scholarships: <a href="mailto:scholarships@vikasshikshana.org" className="text-white text-xs">scholarships@vikasshikshana.org</a><br />*/}
                {/*Training: <a href="mailto:training@vikasshikshana.org" className="text-white">training@vikasshikshana.org</a>*/}
              </p>
            </div>
            <div>
              <div className="text-4xl mb-3">⏰</div>
              <h3 className="font-bold text-lg mb-2 text-amber-400">Office Hours</h3>
              <p className="text-slate-300 text-sm">
                Monday – Saturday<br />
                <span className="text-white font-medium">9:00 AM – 5:30 PM</span><br />
                Closed on Sundays & Public Holidays
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
