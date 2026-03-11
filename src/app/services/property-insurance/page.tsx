import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { PropertyIllustration } from "@/components/illustrations/PolicyIllustrations";
import { InsurerLogoGrid } from "@/components/icons/InsurerLogos";

export const metadata: Metadata = {
  title: "Property Insurance in Ghana | Home & Commercial Property Cover",
  description:
    "Protect your home, office, or commercial property in Ghana against fire, flooding, burglary, and natural disasters. Get tailored property insurance quotes from Asanti Brokers.",
};

export default function PropertyInsurancePage() {
  const features = [
    "Homeowner insurance for residential properties",
    "Tenant and renter insurance for personal belongings",
    "Commercial property cover for offices, shops, and warehouses",
    "Fire and allied perils protection",
    "Burglary and theft cover",
    "Flood and water damage protection",
    "Accidental damage to building structure",
    "Landlord liability for rented properties",
    "Loss of rent cover for landlords",
    "Replacement cost or indemnity valuation options",
  ];

  const whoNeeds = [
    "Homeowners in Accra, Kumasi, Takoradi, and other cities across Ghana",
    "Landlords renting out residential or commercial properties",
    "Tenants who want to protect their personal belongings and contents",
    "Business owners with office spaces, retail shops, or warehouses",
    "Property developers and estate managers overseeing multiple buildings",
  ];

  const whyChoose = [
    "We assess your property and recommend the right sum insured to avoid under-insurance",
    "Access to multiple insurers means competitive premiums for your property type",
    "We handle claims from start to finish, including loss adjuster coordination",
    "Expert advice on risk management to reduce premiums over time",
  ];

  return (
    <>
      <PageHeader
        label="Property Insurance"
        title="Safeguard Your Property in Ghana"
        description="Whether it is your family home, a rental property, or a commercial building, we provide tailored property insurance that gives you peace of mind."
        breadcrumb="Property Insurance"
      />

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Illustration */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 lg:p-10">
              <PropertyIllustration className="w-full h-48 lg:h-64" />
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Complete Protection for Your Most Valuable Asset
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Your property is likely your most significant investment. In Ghana, where flooding during the rainy season, fire incidents in markets and residential areas, and burglary remain real risks, having the right property insurance is not a luxury — it is a necessity.
                </p>
                <p>
                  Asanti Brokers arranges property insurance for everything from single residential homes to large commercial complexes. We ensure your building, contents, and fixtures are adequately valued and insured so you receive the full payout you deserve in the event of a claim.
                </p>
                <p>
                  We also advise on additional covers like loss of rent for landlords, accidental damage, and liability protection. Our team will visit your property, assess the risks, and recommend the most cost-effective policy from our panel of insurers.
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
            Get a Free Property Insurance Quote
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Share your property details and we will find you the best cover at the most competitive premium. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold px-10 py-4 rounded-full text-base transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+233277426580"
              className="inline-flex items-center justify-center border-2 border-white/20 hover:border-white/40 text-white font-semibold px-10 py-4 rounded-full text-base transition-colors"
            >
              Call 0277 426 580
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
