import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="bg-asanti-green-light rounded-3xl p-12 lg:p-16">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
                  <Image
                    src="/handshake.png"
                    alt="Partnership"
                    width={48}
                    height={48}
                    className="mb-3"
                  />
                  <p className="text-sm font-semibold text-gray-800">
                    Trusted Partners
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
                  <Image
                    src="/africa.png"
                    alt="West Africa"
                    width={48}
                    height={48}
                    className="mb-3"
                  />
                  <p className="text-sm font-semibold text-gray-800">
                    West Africa
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center col-span-2">
                  <Image
                    src="/NIC_LOGO.png"
                    alt="NIC Registered"
                    width={64}
                    height={64}
                    className="mb-3"
                  />
                  <p className="text-sm font-semibold text-gray-800">
                    NIC Registered
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    National Insurance Commission
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Your Trusted Insurance Partner in{" "}
              <span className="text-asanti-green">Ghana</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Asanti Brokers Limited is a licensed insurance brokerage firm
              registered with the National Insurance Commission (NIC) of Ghana.
              Based in Accra, we connect individuals and businesses with the best
              insurance products from top-rated insurers across the country.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Led by Managing Director Sophia Antonio, our team of experienced
              professionals is dedicated to making insurance accessible,
              affordable, and hassle-free for every Ghanaian. We leverage
              technology to simplify the entire process — from getting a quote to
              filing a claim.
            </p>

            <div className="space-y-4 pt-4">
              {[
                "Licensed and regulated by the NIC",
                "Partnerships with 10+ leading insurers",
                "Digital-first approach for fast service",
                "Personalized advice from industry experts",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 bg-asanti-green rounded-full flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
