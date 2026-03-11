import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { GroupBenefitsIllustration } from "@/components/illustrations/PolicyIllustrations";
import { InsurerLogoGrid } from "@/components/icons/InsurerLogos";

export const metadata: Metadata = {
  title: "Group & Employee Benefits Insurance in Ghana | Health, Life & Pension",
  description:
    "Attract and retain top talent in Ghana with group health insurance, group life assurance, personal accident, and pension advisory. Custom employee benefits packages from Asanti Brokers.",
};

export default function GroupEmployeeBenefitsPage() {
  const features = [
    "Group health insurance with outpatient and inpatient cover",
    "Group life assurance for death-in-service benefits",
    "Group personal accident insurance",
    "Key person insurance for critical employees",
    "Pension scheme advisory and setup",
    "Maternity and dental cover extensions",
    "Optical and specialist consultation benefits",
    "Emergency evacuation for senior staff",
    "Custom benefit tiers (management, senior staff, general staff)",
    "Annual review and scheme optimisation",
  ];

  const whoNeeds = [
    "Employers looking to attract and retain talented professionals in Ghana",
    "Companies required to provide NHIS top-up or private health cover",
    "Multinational organisations setting up operations in Ghana",
    "SMEs that want to offer competitive benefits without overspending",
    "HR managers seeking a single broker to manage all employee insurance needs",
  ];

  const whyChoose = [
    "We design benefit packages that balance employee needs with your budget",
    "Access to multiple health and life insurers for the most competitive group rates",
    "Dedicated account management with regular utilisation reports and scheme reviews",
    "We handle member additions, deletions, claims escalation, and annual renewals",
  ];

  return (
    <>
      <PageHeader
        label="Group & Employee Benefits"
        title="Build a Benefits Package That Attracts Top Talent"
        description="From group health insurance to life assurance and pension advisory, we help Ghanaian employers design employee benefits programmes that make a difference."
        breadcrumb="Group & Employee Benefits"
      />

      {/* Main Content */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Illustration */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-10">
              <GroupBenefitsIllustration className="w-full h-48 lg:h-64" />
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Employee Benefits That Drive Retention and Productivity
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  In Ghana&apos;s competitive job market, a strong employee benefits package is no longer optional — it is a key differentiator. Companies that invest in their employees&apos; health and financial wellbeing see lower turnover, higher productivity, and stronger morale.
                </p>
                <p>
                  Asanti Brokers works with employers across Ghana to design and manage group insurance programmes that include health insurance (with both outpatient and inpatient cover), group life assurance, personal accident cover, and pension scheme advisory. We create tiered benefit structures so you can offer appropriate cover levels for management, senior staff, and general employees.
                </p>
                <p>
                  Our role goes beyond placing the policy. We provide ongoing scheme administration, handle member additions and deletions, escalate difficult claims on your behalf, and conduct annual reviews to ensure the scheme remains cost-effective and fit for purpose. Whether you have 10 employees or 10,000, we tailor the programme to your needs and budget.
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
            Design Your Employee Benefits Package
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you build a benefits programme that your employees will value. Get a tailored proposal for your company.
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
