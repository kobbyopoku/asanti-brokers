import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { MotorIllustration } from "@/components/illustrations/PolicyIllustrations";
import { InsurerLogoGrid } from "@/components/icons/InsurerLogos";

export const metadata: Metadata = {
  title: "Motor Insurance in Ghana | Comprehensive & Third Party Cover",
  description:
    "Get the best motor insurance in Ghana — comprehensive, third party fire & theft, or third party only. Covers private cars, commercial vehicles, taxis, ride-hailing, trucks, and fleet. Compare quotes from top Ghanaian insurers with Asanti Brokers.",
};

export default function MotorInsurancePage() {
  const features = [
    "Comprehensive cover (own damage + third party)",
    "Third party, fire & theft",
    "Third party only (mandatory under Ghana's Motor Vehicles Act)",
    "Covers private, commercial & fleet vehicles",
    "Ride-hailing & taxi cover (Bolt, Uber, Yango)",
    "Windscreen and accessories cover",
    "Personal accident benefits for driver and passengers",
    "Towing and recovery after breakdown or accident",
    "No-claims discount for safe drivers",
    "Excess buy-back options available",
  ];

  const whoNeeds = [
    "Private car owners who want full protection for their vehicle",
    "Ride-hailing and taxi drivers operating in Accra, Kumasi, or other cities",
    "Fleet owners and logistics companies managing multiple vehicles",
    "Companies providing vehicles to employees for business use",
    "Anyone driving on Ghanaian roads — third party insurance is required by law",
  ];

  const whyChoose = [
    "We compare motor insurance quotes from 10+ insurers to get you the best premium",
    "Fast claims support — we follow up with the insurer on your behalf so you get paid quickly",
    "Flexible payment plans including quarterly and monthly instalments",
    "Expert advice on the right level of cover for your vehicle and usage",
  ];

  return (
    <>
      <PageHeader
        label="Motor Insurance"
        title="Protect Your Vehicle on Ghana's Roads"
        description="Whether you drive a private car in Accra or manage a fleet of commercial vehicles, we'll find you the right motor insurance at the best price."
        breadcrumb="Motor Insurance"
      />

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Illustration */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 lg:p-10">
              <MotorIllustration className="w-full h-48 lg:h-64" />
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Motor Insurance for Every Driver
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Motor insurance is not just a legal requirement in Ghana — it is your financial safety net on the road. Whether you are involved in a minor fender-bender on the Accra motorway or a more serious incident, the right policy ensures you are not left paying out of pocket for repairs, medical bills, or third-party claims.
                </p>
                <p>
                  At Asanti Brokers, we work with all the leading motor insurers in Ghana to find you the best combination of cover and price. From basic third party only (the legal minimum under the Motor Vehicles Insurance Third Party Risks Act) to fully comprehensive policies that cover your own vehicle damage, theft, fire, and personal accident, we tailor the policy to your specific needs.
                </p>
                <p>
                  We also specialise in fleet insurance for businesses, ride-hailing cover for Bolt, Uber, and Yango drivers, and commercial vehicle policies for trucks and buses. Whatever you drive, we have got you covered.
                </p>
              </div>
            </div>
          </div>

          {/* What's Covered */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">
              What&apos;s Covered
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <div className="mt-0.5 w-4 h-4 bg-asanti-green rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm">{feature}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Who Needs This */}
          <div className="mt-12 grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Who Needs This?</h3>
              <ul className="space-y-3">
                {whoNeeds.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-asanti-green mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-gray-600 text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Asanti Brokers?</h3>
              <ul className="space-y-3">
                {whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-asanti-green mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <p className="text-gray-600 text-sm">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Insurers */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
              Our Insurance Partners
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              We Compare Quotes From Ghana&apos;s Top Insurers
            </h2>
            <p className="text-gray-600">
              As an independent broker, we are not tied to one company. We shop
              the market on your behalf to find the best rates and cover.
            </p>
          </div>
          <InsurerLogoGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-asanti-forest text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get a Free Motor Insurance Quote
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Tell us about your vehicle and we will compare quotes from multiple insurers to find you the best deal. No obligation, no hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold px-10 py-4 rounded-full text-base transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+233201961648"
              className="inline-flex items-center justify-center border-2 border-white/20 hover:border-white/40 text-white font-semibold px-10 py-4 rounded-full text-base transition-colors"
            >
              Call 0201 961 648
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
