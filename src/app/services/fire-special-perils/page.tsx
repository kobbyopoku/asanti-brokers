import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { FirePerilsIllustration } from "@/components/illustrations/PolicyIllustrations";
import { InsurerLogoGrid } from "@/components/icons/InsurerLogos";

export const metadata: Metadata = {
  title: "Fire & Special Perils Insurance in Ghana | Building & Contents Cover",
  description:
    "Protect your property in Ghana against fire, lightning, explosions, storms, floods, and earthquakes. Fire and special perils insurance for residential and commercial properties from Asanti Brokers.",
};

export default function FireSpecialPerilsPage() {
  const features = [
    "Fire damage to building and contents",
    "Lightning strike damage",
    "Explosion and gas-related incidents",
    "Storm and tempest damage",
    "Flood and water damage cover",
    "Earthquake and earth tremor protection",
    "Damage by aircraft or vehicles",
    "Riot, strike, and malicious damage",
    "Bush fire and wildfire cover",
    "Consequential loss and business interruption",
  ];

  const whoNeeds = [
    "Owners of residential properties in flood-prone areas of Accra and other cities",
    "Businesses operating in markets, industrial zones, and commercial districts",
    "Warehouse and factory owners storing flammable or high-value goods",
    "Banks and financial institutions requiring collateral protection on mortgaged properties",
    "Schools, churches, and other institutions with significant building assets",
  ];

  const whyChoose = [
    "We ensure your property is valued correctly to prevent under-insurance at claims time",
    "Access to special perils extensions that many basic policies exclude",
    "Experienced claims team that works with loss adjusters to settle claims fast",
    "Risk assessment and fire prevention advice to help reduce your premium",
  ];

  return (
    <>
      <PageHeader
        label="Fire & Special Perils"
        title="Protection Against Fire and Natural Disasters"
        description="Fires, floods, storms, and explosions can destroy years of investment in minutes. Our fire and special perils insurance ensures you can rebuild."
        breadcrumb="Fire & Special Perils"
      />

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Illustration */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 lg:p-10">
              <FirePerilsIllustration className="w-full h-48 lg:h-64" />
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Guard Against Ghana&apos;s Most Common Property Risks
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fire outbreaks at markets like Kantamanto, Makola, and Kejetia are a painful reminder of how quickly livelihoods can be wiped out. Seasonal flooding in parts of Accra, Kumasi, and other cities causes millions of cedis in damage every year. Fire and special perils insurance is the foundation of any property protection programme.
                </p>
                <p>
                  This policy covers your building and contents against fire, lightning, explosion, and a range of &quot;special perils&quot; including storm, flood, earthquake, riot, and malicious damage. It is the most widely held commercial property policy in Ghana and is often required by banks as a condition for mortgage or loan facilities.
                </p>
                <p>
                  At Asanti Brokers, we go beyond just placing the policy. We help you get a proper valuation of your property, advise on the right sum insured, and ensure your policy includes the special perils extensions that are relevant to your location and risk profile. When you need to claim, we manage the entire process on your behalf.
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
            Get a Free Fire Insurance Quote
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Protect your property against fire and special perils. Share your property details and we will find the best cover for you.
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
