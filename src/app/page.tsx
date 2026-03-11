import Image from "next/image";
import Link from "next/link";
import {
  MotorIllustration,
  PropertyIllustration,
  BusinessIllustration,
  TravelIllustration,
  FirePerilsIllustration,
  MarineIllustration,
} from "@/components/illustrations/PolicyIllustrations";
import { InsurerLogoGrid } from "@/components/icons/InsurerLogos";
import AnimatedCounter from "@/components/AnimatedCounter";
import Testimonials from "@/components/Testimonials";

const policies = [
  {
    Illustration: MotorIllustration,
    title: "Motor Insurance",
    description:
      "Comprehensive and third-party cover for private cars, commercial vehicles, taxis, and ride-hailing.",
    color: "from-emerald-50 to-green-50",
  },
  {
    Illustration: PropertyIllustration,
    title: "Property Insurance",
    description:
      "Protect your home, office, or commercial property against fire, theft, and natural disasters.",
    color: "from-amber-50 to-yellow-50",
  },
  {
    Illustration: BusinessIllustration,
    title: "Business & Liability",
    description:
      "Public liability, professional indemnity, and workmen's compensation for your business.",
    color: "from-teal-50 to-emerald-50",
  },
  {
    Illustration: TravelIllustration,
    title: "Travel Insurance",
    description:
      "Medical emergencies, trip cancellation, and lost luggage — for local and international travel.",
    color: "from-sky-50 to-blue-50",
  },
  {
    Illustration: FirePerilsIllustration,
    title: "Fire & Special Perils",
    description:
      "Protection against fire, lightning, storms, floods, and earthquakes for all property types.",
    color: "from-orange-50 to-red-50",
  },
  {
    Illustration: MarineIllustration,
    title: "Marine & Cargo",
    description:
      "Goods-in-transit cover by sea, air, or road — essential for importers and exporters.",
    color: "from-cyan-50 to-teal-50",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-asanti-green-light/40 via-white to-white" />
        {/* Decorative circles */}
        <div className="absolute top-32 right-0 w-96 h-96 bg-asanti-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-asanti-green/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold px-8 py-4 rounded-full text-base transition-colors shadow-lg shadow-asanti-green/25"
                >
                  Get a Free Quote
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center border-2 border-gray-200 hover:border-asanti-green text-gray-700 hover:text-asanti-green font-semibold px-8 py-4 rounded-full text-base transition-colors"
                >
                  See How It Works
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-asanti-green">
                    <AnimatedCounter value="1,000+" />
                  </p>
                  <p className="text-xs text-gray-500">Happy Customers</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-asanti-green">
                    <AnimatedCounter value="10+" />
                  </p>
                  <p className="text-xs text-gray-500">Insurance Partners</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-asanti-green">
                    <AnimatedCounter value="5 min" />
                  </p>
                  <p className="text-xs text-gray-500">To Get Covered</p>
                </div>
              </div>
            </div>

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
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-asanti-green-light rounded-full flex items-center justify-center">
                      <Image src="/slug_steps_1.png" alt="Motor insurance" width={24} height={24} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Motor Insurance</p>
                      <p className="text-xs text-gray-500">Comprehensive &amp; Third Party cover</p>
                    </div>
                    <div className="ml-auto">
                      <span className="text-xs font-medium bg-asanti-green-light text-asanti-green px-3 py-1 rounded-full">Popular</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-asanti-green-light rounded-full animate-pulse-gentle" />
              <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-asanti-green/20 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Policy Types - Visual Cards */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
              What We Offer
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Insurance for Every Need
            </h2>
            <p className="text-gray-600">
              We cover all major insurance categories in Ghana — from mandatory
              motor insurance to specialized marine cargo cover.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy) => (
              <Link
                key={policy.title}
                href="/services"
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-asanti-green/30 hover:shadow-xl transition-all"
              >
                <div className={`bg-gradient-to-br ${policy.color} p-6 flex items-center justify-center`}>
                  <policy.Illustration className="w-full h-40" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-asanti-green transition-colors">
                    {policy.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {policy.description}
                  </p>
                  <span className="inline-flex items-center mt-4 text-asanti-green text-sm font-semibold">
                    Learn More
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors shadow-lg shadow-asanti-green/25"
            >
              View All Services
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-asanti-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
                Why Asanti
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Your Trusted Insurance Partner in Ghana
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Asanti Brokers Limited is a licensed insurance brokerage
                registered with the National Insurance Commission (NIC). We
                connect you with Ghana&apos;s leading insurers to get you the
                best rates and coverage.
              </p>
              <div className="space-y-4">
                {[
                  "Licensed and regulated by the NIC",
                  "Compare quotes from 10+ leading insurers",
                  "Digital-first — get covered from your phone",
                  "Dedicated claims support team",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-asanti-green rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center mt-8 text-asanti-green font-semibold hover:text-asanti-green/80 transition-colors"
              >
                Learn More About Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "1,000+", label: "Customers Served" },
                { stat: "10+", label: "Insurance Partners" },
                { stat: "98%", label: "Claims Settled" },
                { stat: "24h", label: "Response Time" },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-asanti-green mb-1">
                    <AnimatedCounter value={item.stat} />
                  </p>
                  <p className="text-sm text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Insurer Partners - with logos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
              Our Partners
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Trusted by Ghana&apos;s Leading Insurers
            </h2>
            <p className="text-gray-500 text-sm">
              We compare quotes across these top-rated insurance companies
            </p>
          </div>
          <InsurerLogoGrid />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Covered?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a free quote in minutes. Our team will help you find the perfect
            insurance plan at the best rate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold px-10 py-4 rounded-full text-base transition-colors shadow-lg shadow-asanti-green/25"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+233277426580"
              className="inline-flex items-center justify-center border-2 border-gray-200 hover:border-asanti-green text-gray-700 hover:text-asanti-green font-semibold px-10 py-4 rounded-full text-base transition-colors"
            >
              Call 0277 426 580
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
