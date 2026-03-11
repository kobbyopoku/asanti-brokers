import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { AccidentIllustration } from "@/components/illustrations/PolicyIllustrations";
import { InsurerLogoGrid } from "@/components/icons/InsurerLogos";

export const metadata: Metadata = {
  title: "Personal Accident Insurance in Ghana | Injury & Disability Cover",
  description:
    "Get personal accident insurance in Ghana covering accidental death, permanent disability, temporary disability, and medical expenses. Individual and group plans available from Asanti Brokers.",
};

export default function PersonalAccidentInsurancePage() {
  const features = [
    "Accidental death benefit paid to beneficiaries",
    "Permanent total disability lump sum payment",
    "Permanent partial disability (scaled benefit)",
    "Temporary total disability — weekly income replacement",
    "Medical expenses arising from accidental injury",
    "Hospital cash benefit for each day of hospitalisation",
    "Broken bones and burns benefit schedule",
    "Funeral expenses cover",
    "Individual and group/family plans available",
    "24/7 worldwide cover — not limited to Ghana",
  ];

  const whoNeeds = [
    "Individuals and breadwinners who want to protect their family's income",
    "Self-employed professionals without employer-provided cover",
    "People in high-risk occupations such as construction, mining, or transport",
    "Sports enthusiasts and active individuals exposed to injury risks",
    "Employers looking to provide accident cover for their workforce",
  ];

  const whyChoose = [
    "We help you choose the right benefit levels based on your income and responsibilities",
    "Affordable premiums — personal accident insurance is one of the most cost-effective covers available",
    "Fast claims settlement — lump sum payments when you need them most",
    "Flexible plans for individuals, families, and corporate groups",
  ];

  return (
    <>
      <PageHeader
        label="Personal Accident Insurance"
        title="Financial Protection When Accidents Happen"
        description="Accidents are unpredictable. Personal accident insurance provides a financial safety net for you and your family in case of injury, disability, or accidental death."
        breadcrumb="Personal Accident Insurance"
      />

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Illustration */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 lg:p-10">
              <AccidentIllustration className="w-full h-48 lg:h-64" />
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                A Safety Net for Life&apos;s Unexpected Moments
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In Ghana, road accidents, workplace injuries, and everyday mishaps can leave you unable to work and facing mounting medical bills. Without personal accident insurance, an unexpected injury could put your family&apos;s financial security at serious risk — especially if you are the primary breadwinner.
                </p>
                <p>
                  Personal accident insurance pays a lump sum or weekly benefit if you suffer an accidental injury that results in death, permanent disability, or temporary disability. It also covers medical expenses arising from the accident, giving you access to the treatment you need without worrying about the cost.
                </p>
                <p>
                  At Asanti Brokers, we offer personal accident plans for individuals, families, and corporate groups. The cover is worldwide and operates 24 hours a day, so you are protected whether the accident happens at work, at home, or while travelling. It is one of the most affordable insurance products available, and one of the most important.
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
            Get a Free Personal Accident Insurance Quote
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Protect yourself and your family with affordable personal accident cover. Get a quote in minutes.
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
