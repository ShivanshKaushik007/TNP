'use client';

import Link from 'next/link';

export default function ContactForm() {
  return (
    <div className="bg-white">
      {/* MAIN CONTENT */}
      <main className="bg-gray-50/50 py-16" id="company-contact">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-brand-800 tracking-tight">Corporate Interest Form</h1>
            <div className="h-1.5 w-20 bg-brand-accent rounded-full mx-auto mt-4 shadow-sm"></div>
            <p className="mt-6 text-muted max-w-2xl mx-auto text-lg leading-relaxed">
              Partner with IET Lucknow for your recruitment needs. Please fill out the details below, and our T&P team will
              get back to you shortly.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-50 rounded-full blur-3xl opacity-50"></div>

            <form action="#" method="POST" className="space-y-8 relative z-10">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-800 uppercase tracking-wider ml-1">Company Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Google, Microsoft, Tata Motors"
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none text-brand-800 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-800 uppercase tracking-wider ml-1">Industry Sector</label>
                  <select
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none text-brand-800 font-medium appearance-none"
                  >
                    <option>IT / Software</option>
                    <option>Core Engineering</option>
                    <option>Consulting / Analytics</option>
                    <option>Finance / Fintech</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-800 uppercase tracking-wider ml-1">Contact Person Name</label>
                  <input 
                    type="text" 
                    placeholder="Hiring Manager Name"
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none text-brand-800 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-800 uppercase tracking-wider ml-1">Designation</label>
                  <input 
                    type="text" 
                    placeholder="e.g. HR Head, Talent Acquisition"
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none text-brand-800 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-800 uppercase tracking-wider ml-1">Work Email Address</label>
                  <input 
                    type="email" 
                    placeholder="hr@company.com"
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none text-brand-800 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-800 uppercase tracking-wider ml-1">Contact Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none text-brand-800 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-800 uppercase tracking-wider ml-1">Proposed Recruitment Month</label>
                <div className="relative group">
                  <select 
                    name="Recruitment Month" 
                    required
                    defaultValue=""
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none text-brand-800 font-medium appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a month range</option>
                    <option value="August - October">August - October</option>
                    <option value="November - January">November - January</option>
                    <option value="February - April">February - April</option>
                    <option value="May - July">May - July (Summer Internships)</option>
                  </select>

                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-brand-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-800 uppercase tracking-wider ml-1">Additional Requirements / Message</label>
                <textarea 
                  rows={4}
                  placeholder="Briefly describe the job roles, eligibility criteria, or any specific requirements..."
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-brand-accent focus:bg-white focus:ring-0 transition-all outline-none text-brand-800 font-medium resize-none"
                ></textarea>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full md:w-auto px-10 py-4 bg-brand-800 hover:bg-brand-900 text-white font-bold rounded-2xl shadow-glow-sm hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1"
                >
                  Submit Expression of Interest
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}