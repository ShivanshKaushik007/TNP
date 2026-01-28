import Gallerythumb from "@/components/ui/image-gallery";
import Link from "next/link";
export default function GalleryPage() {
  const tnpact = {
    tag: "Training & Placement",
    title: "T&P Activities",
    description:
      "Workshops, mock drives, and engagement sessions hosted by the T&P Cell.",
    image: [
      "/images/tnproom.jpg",
      "/images/presentation.jpg",
      "/images/gd.jpg",
      "/images/texas.jpg",
      "/images/snf.jpg",
      "/images/ietlko.png",
    ],
  };
  const campusarch = {
    tag: "Campus",
    title: "Campus & Architecture",
    description:
      "A glimpse of the IET campus, iconic spaces, and student-friendly environments.",
    image: [
      "/images/campus.jpg",
      "/images/iet.jpeg",
      "/images/ietlucknow.webp",
      "/images/auditorium.png",
      "/images/library.jpeg",
      "/images/ietlko.png",
    ],
  };

  const facilities = {
    tag: "Facilities",
    title: "Labs & Facilities",
    description:
      "Modern labs and learning spaces designed for hands-on experience and research.",
    image: [
      "/images/facilities/computer.png",
      "/images/facilities/workspace.webp",
      "/images/facilities/training.jpg",
      "/images/facilities/interview.jpg",
      "/images/facilities/presentation.jpg",
      "/images/facilities/audi.jpg",
    ],
  };
  return (
    <div className="bg-white text-brand-800">
      <div>
        <Gallerythumb
          title={tnpact.title}
          description={tnpact.description}
          images={tnpact.image}
        />
        <div className="mt-8 mb-16 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-brand-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>View More</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div>
        <Gallerythumb
          title={campusarch.title}
          description={campusarch.description}
          images={campusarch.image}
        />
        <div className="mt-8 mb-16 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-brand-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>View More</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div>
        <Gallerythumb
          title={facilities.title}
          description={facilities.description}
          images={facilities.image}
        />
        <div className="mt-8 mb-16 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-brand-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>View More</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
