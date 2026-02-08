"use client";

import Link from "next/link";
import Image from "next/image";

export default function PastRecruiters() {
  return (
    <div className="bg-white">
      {/* MAIN CONTENT */}
      <main className="bg-white py-20" id="recruiters">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-800">
              PAST RECRUITERS
            </h1>
          </div>

          <section aria-labelledby="past-recruiters" className="mt-8">
            <div id="past-recruiters" className="sr-only">
              List of past recruiters&apos; logos
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/dlf.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/zeta.png"
                  alt="Company 13 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/InMobi.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/amazon.png"
                  alt="Company 2 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/Intuit.png"
                  alt="Company 2 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/soti.png"
                  alt="Company 11 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/meesho.webp"
                  alt="Company 2 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/uber.svg"
                  alt="Company 2 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/bharatelectronics.png"
                  alt="Company 3 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/adobe.png"
                  alt="Company 1 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/forbes.png"
                  alt="Company 4 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/google.png"
                  alt="Company 5 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/arcad.png"
                  alt="Company 6 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/microsoft.png"
                  alt="Company 7 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/paytm.png"
                  alt="Company 8 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/volvo.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/zscaler.svg"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/zomato.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/wayfair.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/upstox.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/tactai.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/eicher.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/slice.jpg"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/servicenow.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/salesforce.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/rippling.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/persistant.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/hul.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/groupon.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/goldman.webp"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/gainsight.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/cisco.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/capgemini.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/bny.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/inox.jpg"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/atlassian.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/wayfair.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/morgan.png"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/LT.avif"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/newgen.avif"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/samsung.svg"
                  alt="Company 9 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/shapoorji.png"
                  alt="Company 10 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/tcs.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/intel.svg"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/ashok.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/bajaj.jpg"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/byjus.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/cognizant.jpg"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/ericsson.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/essar.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/hcl.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/hero.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/honda.svg"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/mahindra.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/oracle.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/prism.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/tata_motors.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/torrent.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/unacademy.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/wipro.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/zs.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/birlasoft.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/jaroeducation.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/infosys.jpg"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/lntinfotech.jpg"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-center h-36 relative">
                <Image
                  src="/images/pastRecruiter/usefulbi.png"
                  alt="Company 12 logo"
                  fill
                  className="object-contain p-2"
                  loading="lazy"
                  sizes="144px"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
