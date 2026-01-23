'use client';

import Link from 'next/link';

export default function Invitation() {
  return (
    <div className="bg-white">
      {/* MAIN CONTENT */}
      <main className="bg-white py-20" id="invitation">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-800 tracking-tight">
              INVITATION
            </h1>
            <p className="mt-3 text-muted font-medium">
              INSTITUTE OF ENGINEERING AND TECHNOLOGY, LUCKNOW<br />
              Training and Placement Cell • Uttar Pradesh, India
            </p>
            <p className="text-sm text-brand-700 mt-1">
              E-Mail :{' '}
              <a className="underline" href="mailto:placement@ietlucknow.ac.in">
                placement@ietlucknow.ac.in
              </a>
            </p>
          </div>

          {/* Letter Body */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-glow-md p-8 sm:p-10 lg:p-12">
            <div className="prose prose-sm sm:prose-base max-w-none text-muted leading-relaxed text-justify">
              <p><strong>Dear Sir / Madam,</strong></p>
              <br />

              <p>
                It gives me immense pleasure to extend to you the most cordial
                invitation to you to participate in the Campus Recruitment
                programme of our Institute. Now, more than ever, the emphasis is
                on Institute-Industry Interaction, and both the Institute,
                conducting the Campus Recruitment programme and the Industry,
                participating in the same, are bound to find it mutually
                beneficial.
              </p>
              <br />

              <p>
                IET Lucknow, a government Institute established in the year 1984,
                is the oldest and finest engineering institute in the state of
                U.P. Over the years, we have developed an excellent background in
                academics, technology, innovation and leadership in North India.
                We are among the elite technical institutes of India and have
                achieved tremendous excellence and progress in academics and
                research since our establishment in 1961. The Institute has been
                one of the most sought after institutions by students as well as
                recruiters all across the nation.
              </p>
              <br />

              <p>The Institute offers following programs-</p>
              <br />

              <ul className="list-disc pl-6">
                <li>8 programs for Bachelor of Technology (B.Tech)</li>
                <li>6 programs for Master of Technology (M.Tech)</li>
                <li>Master of Business Administration (MBA)</li>
                <li>Master of Computer Application (MCA)</li>
              </ul>
              <br />

              <p>
                We spare no efforts to groom our students, not only in their
                chosen discipline but also broaden their mindsets and create
                positive attitudes thus equipping them with all qualities to make
                them an asset to whichever institute/organization they may join.
                Undergraduates undergo an eight-week training in reputed
                organizations, while MCA students undergo training of 6 months
                during their last semester.
              </p>
              <br />

              <p>
                We feel immense joy in extending an invitation to visit our
                institute for participating in Campus Recruitment Drive for the
                students of 2020 batch. We will feel privileged if you would
                provide an opportunity to our students for campus placements. In
                addition, our pre-final year is a store-house of enormous
                potential. We would be obliged to have you as a part of our Summer
                Internship Drive and offer internship opportunities to our 2021
                batch students. This shall help you in previewing the pre-final
                year students as prospective employees.
              </p>
              <br />

              <p>
                I have included our Placement Brochure providing a profile of the
                Institute and various Department brochures giving the insights of
                various programmes/courses and details of the contact persons.
                Also enclosed is Job Notification Form (JNF) and Internship
                Notification Form (INF), which may be filled in and mailed to us,
                on receipt of which we would be happy to fix a mutually convenient
                date for your visit to our campus. It would be our proud privilege
                to host you at our campus.
              </p>
              <br />

              <p>
                Please feel free to call me on my mobile, should you require any
                further information/clarification.
              </p>
              <br />
              <p>Looking forward to a mutually beneficial relationship.</p>
              <br />

              <p className="mt-10"><strong>Thanks & Regards,</strong></p>
              <br />

              <p>
                <strong>Dr. Arun Kumar Tiwari</strong><br />
                Officer in Charge<br />
                Training and Placement Cell
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-brand-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Insights</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><Link href="/insights/aboutiet" className="hover:text-white transition-colors">About IET</Link></li>
                <li><Link href="/insights/message" className="hover:text-white transition-colors">Director&apos;s Message</Link></li>
                <li><a href="https://www.ietlucknow.ac.in/acad/publications" className="hover:text-white transition-colors">Faculty Publications</a></li>
                <li><Link href="/insights/recruiters" className="hover:text-white transition-colors">Past Recruiters</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">For Recruiters</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><Link href="/recruiters/procedure" className="hover:text-white transition-colors">Procedure</Link></li>
                <li><Link href="/recruiters/invitation" className="hover:text-white transition-colors">Invitation</Link></li>
                <li><Link href="/recruiters/ContactForm" id="company-contact-link" className="hover:text-white transition-colors">Company Contact Form</Link></li>
                <li><Link href="/recruiters/demographic" className="hover:text-white transition-colors">Demographics</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">For Students</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><a href="/files/Student_Placement_Policy.pdf" className="hover:text-white transition-colors">Placement Policy</a></li>
                <li><a href="/files/Company_Guidelines_21-22.pdf" className="hover:text-white transition-colors">Internship Guidelines</a></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
                <li><Link href="/downloads" className="hover:text-white transition-colors">Downloads</Link></li>
              </ul>
            </div>

            <div className="bg-brand-800/40 p-6 rounded-xl border border-white/5">
              <h4 className="font-semibold text-lg mb-3">Training &amp; Placement Office</h4>
              <p className="text-sm text-white/80 mb-4">Lecture Theatre Building,<br/>Institute of Engineering and Technology,<br/>Lucknow - 226021</p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a href="mailto:placement@ietlucknow.ac.in" className="underline hover:text-white">placement@ietlucknow.ac.in</a>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <h5 className="font-medium text-sm">Officer Incharge</h5>
                <div className="text-sm text-white/80">Dr. Arun Kumar Tiwari</div>
                <div className="text-sm mt-1 flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a href="mailto:aruntiwari@ietlucknow.ac.in" className="underline hover:text-white">aruntiwari@ietlucknow.ac.in</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-brand-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/ietplacementcell/" className="text-white/80 hover:text-white transition-all hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://x.com/iet_lucknow" className="text-white/80 hover:text-white transition-all hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.033 10.033 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/placement-cell-iet-lucknow-439a1357" className="text-white/80 hover:text-white transition-all hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>

            <div className="text-sm text-white/70 text-center px-4">© 2025 Institute of Engineering &amp; Technology, Lucknow. All Rights Reserved.</div>

            <div><a href="#invitation" className="text-sm underline hover:no-underline whitespace-nowrap">Go to Top</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}