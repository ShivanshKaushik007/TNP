import Image from "next/image";

export type GalleryThumbImage = {
  src: string;
  alt: string;
};

export type GalleryThumbImageInput = string | GalleryThumbImage;

type GallerythumbProps = {
  images?: GalleryThumbImageInput[];
  title?: string;
  description?: string;
};

export default function Gallerythumb({
  images = [],
  title = "Gallery Highlights",
  description =
    "A visual glimpse of Training & Placement activities, campus life, and facilities.",
}: GallerythumbProps) {
  const normalizedImages: GalleryThumbImage[] = images
    .filter((img) => Boolean(img))
    .map((img, idx) =>
      typeof img === "string" ? { src: img, alt: `image-${idx + 1}` } : img
    );

  return (
    <>
      <section className="w-full flex flex-col items-center justify-start py-8 sm:py-10 md:py-12">
        <div className="max-w-3xl text-center px-3 sm:px-4">
          <h1 className="text-2xl sm:text-3xl font-extrabold">{title}</h1>
          <p className="text-sm text-slate-500 mt-2">{description}</p>
        </div>

        {/* Mobile: horizontal scroll with snap; desktop: flex row with hover expand */}
        <div className="flex flex-nowrap md:flex-wrap items-stretch gap-2 sm:gap-3 md:gap-2 h-[240px] sm:h-[300px] md:h-[400px] w-full max-w-5xl mt-6 md:mt-10 px-3 sm:px-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scroll-smooth scrollbar-hide pb-2 md:pb-0">
          {normalizedImages.length === 0 ? (
            <div className="w-full min-w-full rounded-lg border border-dashed border-slate-200 bg-slate-50 flex items-center justify-center text-sm text-slate-500">
              No images to display.
            </div>
          ) : (
            normalizedImages.map((img, idx) => (
              <div
                key={`${img.src}-${idx}`}
                className="relative group flex-shrink-0 md:flex-grow transition-all w-[160px] sm:w-[200px] md:w-56 rounded-lg overflow-hidden h-full md:h-[400px] duration-500 md:hover:w-full snap-center snap-always"
              >
                <Image
                  className="object-cover object-center"
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 200px, 224px"
                  loading="lazy"
                />
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
}
