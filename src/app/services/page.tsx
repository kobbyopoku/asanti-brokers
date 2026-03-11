import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import {
  MotorIllustration,
  PropertyIllustration,
  BusinessIllustration,
  TravelIllustration,
  FirePerilsIllustration,
  MarineIllustration,
  AccidentIllustration,
  GroupBenefitsIllustration,
} from "@/components/illustrations/PolicyIllustrations";
import { InsurerLogoGrid } from "@/components/icons/InsurerLogos";
import { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of insurance services — motor, property, business, travel, marine, fire, and more. Asanti Brokers covers it all in Ghana.",
};

const services: {
  Illustration: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  features: string[];
}[] = [
  {
    Illustration: MotorIllustration,
    title: "Motor Insurance",
    color: "from-emerald-50 to-green-50",
    description:
      "Protect your vehicle with comprehensive or third-party motor insurance. We cover private cars, commercial vehicles, taxis, ride-hailing cars, trucks, motorbikes, and fleet vehicles.",
    features: [
      "Comprehensive cover (own damage + third party)",
      "Third party, fire & theft",
      "Third party only (mandatory in Ghana)",
      "Covers private, commercial & fleet vehicles",
      "Ride-hailing & taxi cover available",
      "Windscreen and accessories cover",
    ],
  },
  {
    Illustration: PropertyIllustration,
    title: "Property Insurance",
    color: "from-amber-50 to-yellow-50",
    description:
      "Safeguard your home, office, or commercial property against fire, flooding, burglary, and natural disasters with tailored property insurance plans.",
    features: [
      "Homeowner and tenant insurance",
      "Commercial property cover",
      "Fire and allied perils",
      "Burglary and theft protection",
      "Flood and natural disaster cover",
      "Landlord liability protection",
    ],
  },
  {
    Illustration: BusinessIllustration,
    title: "Business & Liability Insurance",
    color: "from-teal-50 to-emerald-50",
    description:
      "Comprehensive business insurance to protect your enterprise from operational risks, employee claims, and third-party liabilities.",
    features: [
      "Public liability insurance",
      "Professional indemnity",
      "Employers liability (Workmen's Compensation)",
      "Business interruption cover",
      "Goods-in-transit insurance",
      "Fidelity guarantee",
    ],
  },
  {
    Illustration: TravelIllustration,
    title: "Travel Insurance",
    color: "from-sky-50 to-blue-50",
    description:
      "Travel with confidence. Our travel insurance covers medical emergencies, trip cancellation, lost luggage, and more — for both local and international trips.",
    features: [
      "Overseas medical expenses",
      "Trip cancellation & curtailment",
      "Lost or delayed baggage",
      "Personal accident abroad",
      "Emergency evacuation & repatriation",
      "Single trip and annual multi-trip plans",
    ],
  },
  {
    Illustration: FirePerilsIllustration,
    title: "Fire & Special Perils",
    color: "from-orange-50 to-red-50",
    description:
      "Protection against fire damage, lightning, explosions, and special perils like storms, floods, and earthquakes for both residential and commercial properties.",
    features: [
      "Fire, lightning, and explosion cover",
      "Storm and tempest damage",
      "Flood and water damage",
      "Earthquake cover",
      "Damage by aircraft or vehicles",
      "Consequential loss / business interruption",
    ],
  },
  {
    Illustration: MarineIllustration,
    title: "Marine & Cargo Insurance",
    color: "from-cyan-50 to-teal-50",
    description:
      "Protect your goods in transit — by sea, air, or road. Essential for importers, exporters, and trading companies operating in Ghana and across West Africa.",
    features: [
      "Marine cargo (imports & exports)",
      "Inland transit cover",
      "Marine hull insurance",
      "Warehouse-to-warehouse cover",
      "All risks or named perils options",
      "Open cover for regular shipments",
    ],
  },
  {
    Illustration: AccidentIllustration,
    title: "Personal Accident Insurance",
    color: "from-rose-50 to-pink-50",
    description:
      "Financial protection in case of accidental injury or death. Covers medical bills, disability, and loss of income resulting from accidents.",
    features: [
      "Accidental death benefit",
      "Permanent total disability",
      "Temporary total disability",
      "Medical expenses cover",
      "Individual and group plans",
      "24/7 worldwide cover",
    ],
  },
  {
    Illustration: GroupBenefitsIllustration,
    title: "Group & Employee Benefits",
    color: "from-indigo-50 to-purple-50",
    description:
      "Attract and retain talent with group insurance plans for your employees — including health, life, and personal accident cover.",
    features: [
      "Group health insurance",
      "Group life assurance",
      "Group personal accident",
      "Pension scheme advisory",
      "Key person insurance",
      "Custom packages for SMEs",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Our Services"
        title="Insurance Solutions for Every Need"
        description="From mandatory motor insurance to comprehensive business cover, we offer a full spectrum of insurance products designed for the Ghanaian market."
        breadcrumb="Services"
      />

      {/* Services List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                id={service.title.toLowerCase().replace(/[&\s]+/g, "-")}
                className="grid lg:grid-cols-2 gap-10 items-center"
              >
                {/* Illustration */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`bg-gradient-to-br ${service.color} rounded-3xl p-8 lg:p-10`}>
                    <service.Illustration className="w-full h-48 lg:h-56" />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                      What&apos;s Covered
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
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

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors shadow-md shadow-asanti-green/20"
                  >
                    Get a Quote
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurers with Logos */}
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
            Not Sure What Cover You Need?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our insurance advisors are here to help. Get in touch and we will
            recommend the right products for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold px-10 py-4 rounded-full text-base transition-colors"
            >
              Speak to an Advisor
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
