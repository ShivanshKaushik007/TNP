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
      <section className="w-full flex flex-col items-center justify-start py-12">
      
        <div className="max-w-3xl text-center px-4">
          <h1 className="text-3xl font-extrabold">{title}</h1>
          <p className="text-sm text-slate-500 mt-2">{description}</p>
        </div>

        <div className="flex items-center gap-2 h-[400px] w-full max-w-5xl mt-10 px-4">
          {normalizedImages.length === 0 ? (
            <div className="w-full h-full rounded-lg border border-dashed border-slate-200 bg-slate-50 flex items-center justify-center text-sm text-slate-500">
              No images to display.
            </div>
          ) : (
            normalizedImages.map((img, idx) => (
              <div
                key={`${img.src}-${idx}`}
                className="relative group flex-grow transition-all w-56 rounded-lg overflow-hidden h-[400px] duration-500 hover:w-full"
              >
                <img
                  className="h-full w-full object-cover object-center"
                  src={img.src}
                  alt={img.alt}
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
