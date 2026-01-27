import { AnimatedGroup } from '@/components/ui/animated-group';

export default function GalleryPage() {
  const sections = [
    {
      tag: 'Training & Placement',
      title: 'T&P Activities',
      description: 'Workshops, mock drives, and engagement sessions hosted by the T&P Cell.',
      items: [
        {
          src: '/images/tnproom.jpg',
          title: 'T&P Office',
          subtitle: 'Placement coordination hub',
        },
        {
          src: '/images/presentation.jpg',
          title: 'Company Presentations',
          subtitle: 'Industry interactions and briefings',
        },
        {
          src: '/images/gd.jpg',
          title: 'Group Discussions',
          subtitle: 'Soft-skill evaluation rounds',
        },
        {
          src: '/images/texas.jpg',
          title: 'Expert Sessions',
          subtitle: 'Mentoring by industry leaders',
        },
        {
          src: '/images/snf.jpg',
          title: 'Mock Drives',
          subtitle: 'Realistic practice for final rounds',
        },
        {
          src: '/images/ietlko.png',
          title: 'Campus Engagement',
          subtitle: 'Industry-academia collaboration',
        },
      ],
    },
    {
      tag: 'Campus',
      title: 'Campus & Architecture',
      description: 'A glimpse of the IET campus, iconic spaces, and student-friendly environments.',
      items: [
        {
          src: '/images/campus.jpg',
          title: 'Campus Greens',
          subtitle: 'Open spaces for collaboration and events',
        },
        {
          src: '/images/iet.jpeg',
          title: 'IET Building',
          subtitle: 'Signature academic block',
        },
        {
          src: '/images/ietlucknow.webp',
          title: 'Campus Perspective',
          subtitle: 'Aerial view of institute facilities',
        },
        {
          src: '/images/auditorium.png',
          title: 'Auditorium',
          subtitle: 'Talks, convocations, and major events',
        },
        {
          src: '/images/library.jpeg',
          title: 'Central Library',
          subtitle: 'Quiet study and research resources',
        },
        {
          src: '/images/ietlko.png',
          title: 'Main Entrance',
          subtitle: 'Gateway to the campus',
        },
      ],
    },
    {
      tag: 'Facilities',
      title: 'Labs & Facilities',
      description: 'Modern labs and learning spaces designed for hands-on experience and research.',
      items: [
        {
          src: '/images/facilities/computer.png',
          title: 'Computer Lab',
          subtitle: 'High-performance systems and tools',
        },
        {
          src: '/images/facilities/workspace.webp',
          title: 'Innovation Workspace',
          subtitle: 'Collaborative learning zones',
        },
        {
          src: '/images/facilities/training.jpg',
          title: 'Training Hall',
          subtitle: 'Skill development sessions',
        },
        {
          src: '/images/facilities/interview.jpg',
          title: 'Interview Rooms',
          subtitle: 'Professional recruitment setup',
        },
        {
          src: '/images/facilities/presentation.jpg',
          title: 'Presentation Hall',
          subtitle: 'Seminars and keynote sessions',
        },
        {
          src: '/images/facilities/audi.jpg',
          title: 'Auditorium Interior',
          subtitle: 'Large-capacity venue',
        },
      ],
    },
  ];

  return (
    <div className="bg-white text-brand-800">
      <section className="py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-14">
          {sections.map((section) => (
            <div key={section.title} className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-800/5 text-brand-800 text-xs font-semibold tracking-wide">
                    {section.tag}
                  </div>
                  <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-brand-800">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-muted max-w-3xl">
                    {section.description}
                  </p>
                </div>
                <div className="hidden lg:flex items-center gap-3 text-sm text-muted">
                  <span className="h-2 w-2 rounded-full bg-brand-accent" />
                  Curated highlights
                </div>
              </div>

              <AnimatedGroup
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                preset="scale"
              >
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    className="group relative rounded-2xl border border-gray-100 bg-white shadow-glow-sm overflow-hidden hover-lift"
                  >
                    <div className="relative h-56">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/10 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-white font-semibold text-lg">
                        {item.title}
                      </div>
                      <div className="text-white/80 text-sm">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                ))}
              </AnimatedGroup>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-800/5 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-glow-sm">
            <div>
              <div className="text-sm font-semibold text-brand-800">Visit IET</div>
              <h3 className="mt-2 text-2xl font-semibold text-brand-800">
                Planning a campus visit or recruiter interaction?
              </h3>
              <p className="mt-2 text-muted max-w-2xl">
                Get in touch with the Training & Placement Cell to schedule visits, workshops, or recruitment drives.
              </p>
            </div>
            <a
              href="/tpc/contactus"
              className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-white font-semibold shadow-glow-md hover:bg-brand-800 transition"
            >
              Contact T&P Cell
            </a>
          </div>
        </div>
      </section>
      <footer />
    </div>
  );
}
