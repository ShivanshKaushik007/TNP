import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <>
      <main className="bg-white py-20" id="about">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-brand-800">Training &amp; Placement Cell</h1>
            <p className="mt-4 text-muted max-w-3xl mx-auto leading-relaxed">
              The Placement Office at IET Lucknow is dedicated to connecting students with recruiters
              and ensuring smooth execution of all placement activities through a structured,
              well-equipped system and a highly coordinated student team.
            </p>
          </div>

          <div className="bg-white border border-gray-200 shadow-glow-md rounded-2xl p-8 mb-20">
            <h2 className="text-2xl font-bold text-brand-800 mb-4 border-l-4 border-brand-accent pl-4">
              The Cell
            </h2>
            <p className="text-muted leading-relaxed text-justify">
              The Placement Office is responsible for campus placement at IET Lucknow. The Placement-in-Charge,
              the Assistant Placement Officer, the Placement Office staff and the student representatives handle
              various crucial tasks like reaching out to companies, scheduling activities and managing all official
              communication. The team strives to create a balance between recruiter expectations and student aspirations.
              The Placement Managers, Company Coordinators and Department Placement Coordinators ensure policies are
              followed,
              recruiters are assisted, and students are industry-ready. The office is supported with excellent
              infrastructure
              to handle every stage of the placement process smoothly.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-brand-800 mb-10 text-center">
              Facilities
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl shadow-glow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-accent/40 transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <img src="/images/facilities/workspace.webp" alt="Workspace"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-700 mb-2">Workspace</h3>
                  <p className="text-muted text-sm">
                    A modern workspace for all official placement processes.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl shadow-glow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-accent/40 transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <img src="/images/facilities/interview.jpg" alt="Interview Rooms"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-700 mb-2">Interview Rooms</h3>
                  <p className="text-muted text-sm">
                    6 air-conditioned interview cabins equipped with WiFi-enabled PCs and printing facilities.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl shadow-glow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-accent/40 transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <img src="/images/facilities/gd.jpg" alt="Group Discussion Room"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-700 mb-2">Group Discussion Room</h3>
                  <p className="text-muted text-sm">
                    A dedicated Group Discussion Hall for placement procedure rounds by visiting companies.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl shadow-glow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-accent/40 transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <img src="/images/facilities/computer.png" alt="Computer Center"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-700 mb-2">Computer Center</h3>
                  <p className="text-muted text-sm">
                    Department labs with modern systems for conducting online technical rounds.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl shadow-glow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-accent/40 transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <img src="/images/facilities/presentation.jpg" alt="Presentation Room"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-700 mb-2">Presentation Room</h3>
                  <p className="text-muted text-sm">
                    A connected lecture theatre with AC, projector, sound system and seating for 120.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl shadow-glow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-accent/40 transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <img src="/images/facilities/audi.jpg" alt="Auditorium"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-700 mb-2">Auditorium</h3>
                  <p className="text-muted text-sm">
                    State of art auditorium (850 capacity) for Pre-Placement Talks and Seminars.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl shadow-glow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-accent/40 transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <img src="/images/facilities/training.jpg" alt="Training Classroom"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-700 mb-2">Training Classroom</h3>
                  <p className="text-muted text-sm">
                    Dedicated training space for technical and professional skill development.
                  </p>
                </div>
              </div>

              <div className="group bg-white rounded-2xl shadow-glow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-brand-accent/40 transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <img src="/images/facilities/other_facilities.png" alt="Other Facilities"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-700 mb-2">Other Facilities</h3>
                  <p className="text-muted text-sm">
                    Lodging &amp; transport for HR teams along with customized meal options.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section id="records" className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-800">Past Impressive Records</h2>
                <div className="h-1.5 w-20 bg-brand-accent rounded-full mx-auto mt-4"></div>
                <p className="text-muted mt-6 max-w-2xl mx-auto text-lg">
                  IET Lucknow has consistently delivered excellent placement outcomes, showcasing a steady upward trajectory
                  in salary packages and recruiter trust.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                <article className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-extrabold text-brand-800 group-hover:text-brand-accent transition-colors">2024</h3>
                    <div className="p-2 bg-brand-50 rounded-lg text-brand-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-brand-800 font-semibold mb-4 leading-relaxed">500+ students placed across leading
                    product &amp; service companies.</p>

                  <div className="space-y-4 pt-4 border-t border-gray-50">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted uppercase tracking-wider">Highest CTC</span>
                      <span className="text-brand-accent font-bold">52 LPA</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted uppercase tracking-wider">Average CTC</span>
                      <span className="text-brand-800 font-bold">9.2 LPA</span>
                    </div>
                    <div className="mt-4">
                      <span className="text-[10px] text-muted uppercase font-bold tracking-widest block mb-2">Top
                        Recruiters</span>
                      <div className="text-xs text-muted italic">Amazon, Microsoft, TCS, Infosys</div>
                    </div>
                  </div>
                </article>

                <article className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-extrabold text-brand-800 group-hover:text-brand-accent transition-colors">2023</h3>
                    <div className="p-2 bg-brand-50 rounded-lg text-brand-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-brand-800 font-semibold mb-4 leading-relaxed">470+ offers across multiple
                    engineering branches.</p>

                  <div className="space-y-4 pt-4 border-t border-gray-50">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted uppercase tracking-wider">Highest CTC</span>
                      <span className="text-brand-accent font-bold">45 LPA</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted uppercase tracking-wider">Average CTC</span>
                      <span className="text-brand-800 font-bold">8.5 LPA</span>
                    </div>
                    <div className="mt-4">
                      <span className="text-[10px] text-muted uppercase font-bold tracking-widest block mb-2">Top
                        Recruiters</span>
                      <div className="text-xs text-muted italic">Wipro, HCL, Capgemini</div>
                    </div>
                  </div>
                </article>

                <article className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-extrabold text-brand-800 group-hover:text-brand-accent transition-colors">2022</h3>
                    <div className="p-2 bg-brand-50 rounded-lg text-brand-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-brand-800 font-semibold mb-4 leading-relaxed">Strong campus presence with core and
                    IT companies.</p>

                  <div className="space-y-4 pt-4 border-t border-gray-50">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted uppercase tracking-wider">Highest CTC</span>
                      <span className="text-brand-accent font-bold">38 LPA</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted uppercase tracking-wider">Average CTC</span>
                      <span className="text-brand-800 font-bold">7.8 LPA</span>
                    </div>
                    <div className="mt-4">
                      <span className="text-[10px] text-muted uppercase font-bold tracking-widest block mb-2">Top
                        Recruiters</span>
                      <div className="text-xs text-muted italic">TCS, Infosys, IBM</div>
                    </div>
                  </div>
                </article>

                <article className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-extrabold text-brand-800 group-hover:text-brand-accent transition-colors">2021</h3>
                    <div className="p-2 bg-brand-50 rounded-lg text-brand-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-brand-800 font-semibold mb-4 leading-relaxed">Resilient performance despite global
                    challenges.</p>

                  <div className="space-y-4 pt-4 border-t border-gray-50">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted uppercase tracking-wider">Highest CTC</span>
                      <span className="text-brand-accent font-bold">32 LPA</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted uppercase tracking-wider">Average CTC</span>
                      <span className="text-brand-800 font-bold">7.1 LPA</span>
                    </div>
                    <div className="mt-4">
                      <span className="text-[10px] text-muted uppercase font-bold tracking-widest block mb-2">Top
                        Recruiters</span>
                      <div className="text-xs text-muted italic">Accenture, Cognizant, Tech</div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
