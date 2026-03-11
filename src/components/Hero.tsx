import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-asanti-green-light/40 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-asanti-green-light text-asanti-green-dark text-sm font-medium px-4 py-2 rounded-full">
              <Image
                src="/NIC_LOGO.png"
                alt="NIC"
                width={20}
                height={20}
                className="h-5 w-5 rounded-full"
              />
              NIC Licensed Insurance Broker
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Insurance{" "}
              <span className="text-asanti-green">Made Simple</span> for
              Everyone
            </h1>

            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Get covered in minutes. Asanti Brokers makes it easy to find the
              right motor, property, and business insurance — all from your
              phone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold px-8 py-4 rounded-full text-base transition-colors shadow-lg shadow-asanti-green/25"
              >
                Get a Free Quote
                <svg
                  className="ml-2 w-5 h-5"
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
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center border-2 border-gray-200 hover:border-asanti-green text-gray-700 hover:text-asanti-green font-semibold px-8 py-4 rounded-full text-base transition-colors"
              >
                See How It Works
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-asanti-green">1000+</p>
                <p className="text-xs text-gray-500">Happy Customers</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-asanti-green">10+</p>
                <p className="text-xs text-gray-500">Insurance Partners</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div className="text-center">
                <p className="text-2xl font-bold text-asanti-green">5 min</p>
                <p className="text-xs text-gray-500">To Get Covered</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-asanti-green/10">
              <Image
                src="/asanti-requirements-thumbnail.jpg"
                alt="Get insurance on your phone with Asanti Brokers"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-asanti-green-light rounded-full flex items-center justify-center">
                    <Image
                      src="/slug_steps_1.png"
                      alt="Motor insurance"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Motor Insurance
                    </p>
                    <p className="text-xs text-gray-500">
                      Comprehensive &amp; Third Party cover
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs font-medium bg-asanti-green-light text-asanti-green px-3 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-asanti-green-light rounded-full animate-pulse-gentle" />
            <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-asanti-green/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
