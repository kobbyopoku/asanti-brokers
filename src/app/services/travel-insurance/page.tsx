import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { TravelIllustration } from "@/components/illustrations/PolicyIllustrations";
import { InsurerLogoGrid } from "@/components/icons/InsurerLogos";

export const metadata: Metadata = {
  title: "Travel Insurance in Ghana | International & Local Trip Cover",
  description:
    "Get travel insurance for trips from Ghana — covering medical emergencies, trip cancellation, lost luggage, and emergency evacuation. Single trip and annual plans available from Asanti Brokers.",
};

export default function TravelInsurancePage() {
  const features = [
    "Overseas medical expenses and hospitalisation",
    "Trip cancellation and curtailment cover",
    "Lost, stolen, or delayed baggage compensation",
    "Personal accident cover while abroad",
    "Emergency medical evacuation and repatriation",
    "Flight delay and missed connection benefits",
    "Personal liability cover while travelling",
    "Single trip and annual multi-trip plans",
    "Schengen visa-compliant travel insurance",
    "Cover for pre-existing medical conditions (select plans)",
  ];

  const whoNeeds = [
    "Ghanaians travelling abroad for business, holiday, or education",
    "Frequent travellers who need annual multi-trip cover",
    "Travellers applying for Schengen, UK, US, or Canadian visas",
    "Companies sending employees on international assignments",
    "Families travelling together who want group travel cover",
  ];

  const whyChoose = [
    "Schengen-compliant policies accepted by all European embassies in Accra",
    "Quick policy issuance — often within the same day for urgent travel",
    "24/7 worldwide emergency assistance hotline",
    "Competitive premiums with cover limits that meet visa requirements",
  ];

  return (
    <>
      <PageHeader
        label="Travel Insurance"
        title="Travel With Confidence From Ghana"
        description="Whether you are flying to Europe, America, Asia, or anywhere in Africa, our travel insurance keeps you protected from departure to return."
        breadcrumb="Travel Insurance"
      />

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Illustration */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl p-8 lg:p-10">
              <TravelIllustration className="w-full h-48 lg:h-64" />
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Protection for Every Journey
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Travelling from Ghana — whether for business, holiday, studies, or a medical trip — can expose you to unexpected risks. A medical emergency abroad without insurance can cost tens of thousands of dollars, and a cancelled flight or lost passport can derail your entire trip.
                </p>
                <p>
                  Asanti Brokers provides travel insurance that covers all the essentials: medical expenses, emergency evacuation, trip cancellation, baggage loss, and personal accident. We offer single-trip policies for one-off journeys and annual multi-trip plans for frequent travellers, with cover that meets the requirements of embassies worldwide.
                </p>
                <p>
                  If you are applying for a Schengen visa at any European embassy in Accra, we issue compliant travel insurance certificates quickly — often on the same day. Our policies are accepted by all Schengen member states and come with the minimum EUR 30,000 medical cover required.
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
            Get Travel Insurance Today
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Travelling soon? Get your travel insurance sorted quickly. Same-day issuance available for urgent trips.
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
