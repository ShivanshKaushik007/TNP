import Link from 'next/link';

const instituteDocs = [
  {
    title: 'Placement Brochure',
    subtitle: 'Official Guide 2025-26',
    href: '/files/Placement_Brouchure_2025-26.pdf',
    type: 'PDF'
  },
  {
    title: 'Job Notification Form',
    subtitle: 'Recruiter Registration (JNF)',
    href: '/files/JNF_IET_Lucknow_2025-26.docx',
    type: 'DOCX'
  }
];

const studentDocs = [
  { name: 'Placement Policy', href: '/files/Student_Placement_Policy.pdf', type: 'PDF' },
  { name: 'Resume Template', href: '/files/Sample_Resume.docx', type: 'DOCX' },
  { name: 'Training Form', href: '/files/Training_Form.pdf', type: 'PDF' },
  { name: 'Internship NOC', href: '/files/Internship_noc.pdf', type: 'PDF' }
];

const departmentDocs = [
  { name: 'Computer Science & Eng.', href: '/files/CSE_brochure.pdf' },
  { name: 'Chemical Engineering', href: '/files/Chemical_dept_2019-20.pdf' },
  { name: 'Civil Engineering', href: '/files/Civil_dept_2019-20.pdf' },
  { name: 'Electrical Engineering', href: '/files/Electrical_dept_2019-20.pdf' },
  { name: 'Electronics Engineering', href: '/files/Electronics_dept_2019-20.pdf' },
  { name: 'Mechanical Engineering', href: '/files/Mechanical_dept_2019-20.pdf' }
];

export default function DownloadsPage() {
  return (
    <>
      <main className="bg-gray-50/50 py-16" id="downloads">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-extrabold text-brand-800 tracking-tight">Resources</h1>
            <div className="h-1.5 w-20 bg-brand-accent rounded-full mx-auto mt-4"></div>
            <p className="mt-6 text-muted max-w-2xl mx-auto text-lg">
              Official documents, placement policies, and department-specific brochures for students and recruiters.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-xl font-bold text-brand-800 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-accent rounded-full"></span>
              INSTITUTE DOCUMENTS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {instituteDocs.map((doc) => (
                <div key={doc.title} className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-brand-accent/30 transition-all group flex items-center gap-6">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-brand-800 text-lg truncate">{doc.title}</h3>
                    <p className="text-xs text-muted mb-4">{doc.subtitle}</p>
                    <a href={doc.href} download className="text-brand-700 font-bold text-sm flex items-center gap-2 hover:text-brand-accent transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                      Download {doc.type}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-xl font-bold text-brand-800 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-accent rounded-full"></span>
              STUDENT POLICIES &amp; FORMS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studentDocs.map((doc) => (
                <div key={doc.name} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group">
                  <div className="text-[10px] font-bold text-brand-accent uppercase mb-2">{doc.type}</div>
                  <h3 className="font-bold text-brand-800 mb-6 h-10 overflow-hidden text-sm leading-tight">{doc.name}</h3>
                  <a href={doc.href} download className="w-full py-2 bg-blue-400 text-white rounded-lg text-xs font-bold hover:bg-brand-700 hover:text-white transition-all flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-xl font-bold text-brand-800 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-brand-accent rounded-full"></span>
              DEPARTMENT BROCHURES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentDocs.map((dept) => (
                <div key={dept.name} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-brand-accent transition-all group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 bg-brand-50 text-brand-700 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    </div>
                    <span className="text-sm font-bold text-brand-800 truncate">{dept.name}</span>
                  </div>
                  <a href={dept.href} download className="p-2 text-brand-700 hover:bg-brand-700 hover:text-white rounded-lg transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div id="study-material" className="pt-10">
            <div className="bg-brand-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                  <div>
                    <h2 className="text-3xl font-bold">Placement Preparation Hub</h2>
                    <p className="text-white/60 mt-2">Curated resources to crack top-tier technical and HR interviews.</p>
                  </div>
                  <a href="#" className="bg-brand-accent text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-brand-accent/20 hover:scale-105 transition-transform text-center">View All Assets</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg mb-2">DSA Handbooks</h4>
                    <p className="text-sm text-white/50 mb-4">Topic-wise data structures &amp; algorithms notes from top alumni.</p>
                    <a href="#" className="text-brand-accent text-sm font-bold flex items-center gap-2">Access Drive <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg mb-2">Interview Experiences</h4>
                    <p className="text-sm text-white/50 mb-4">Archive of technical interview questions from FAANG &amp; Top MNCs.</p>
                    <a href="#" className="text-brand-accent text-sm font-bold flex items-center gap-2">Read Blogs <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                    </div>
                    <h4 className="font-bold text-lg mb-2">Aptitude &amp; Core</h4>
                    <p className="text-sm text-white/50 mb-4">Practice sets for Quant, Logical, and Core Subjects (OS, DBMS).</p>
                    <a href="#" className="text-brand-accent text-sm font-bold flex items-center gap-2">Download Packs <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </main>

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
              <p className="text-sm text-white/80 mb-4">Lecture Theatre Building,<br />Institute of Engineering and
                Technology,<br />Lucknow - 226021</p>

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
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://x.com/iet_lucknow" className="text-white/80 hover:text-white transition-all hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.033 10.033 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/placement-cell-iet-lucknow-439a1357" className="text-white/80 hover:text-white transition-all hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>

            <div className="text-sm text-white/70 text-center px-4">© 2025 Institute of Engineering &amp; Technology, Lucknow. All Rights Reserved.</div>

            <div><a href="#downloads" className="text-sm underline hover:no-underline whitespace-nowrap">Go to Top</a></div>
          </div>
        </div>
      </footer>
    </>
  );
}
