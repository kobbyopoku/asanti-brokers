import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Claims",
  description:
    "Learn how to file an insurance claim with Asanti Brokers. We guide you through every step of the claims process for motor, property, travel, and business insurance in Ghana.",
};

const steps = [
  {
    number: 1,
    title: "Report the Incident",
    description:
      "Contact us immediately via phone, WhatsApp, or email. Provide details of the incident including date, time, and what happened.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Submit Documentation",
    description:
      "We'll guide you on the required documents: police report (for motor), photos of damage, receipts, medical reports, etc.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "We Handle the Process",
    description:
      "Our claims team liaises directly with your insurer, follows up on assessments, and keeps you updated every step of the way.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Receive Your Settlement",
    description:
      "Once approved, the insurer processes your payment. We ensure you receive fair and timely compensation.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const tips = [
  "Report incidents to us within 24 hours for the best chance of a successful claim.",
  "Do not admit fault or liability at the scene of an accident.",
  "Take clear photos and videos of any damage as soon as possible.",
  "Keep all receipts, invoices, and medical reports related to the incident.",
  "Do not authorize any repairs until the insurer has completed their assessment.",
  "Obtain a police report for motor accidents and theft incidents.",
];

const documentsByType = [
  {
    type: "Motor Insurance",
    documents: [
      "Completed claim form",
      "Police accident report",
      "Copy of driver's license",
      "Photos of the damage",
      "Repair estimate from an approved garage",
      "Copy of insurance certificate",
    ],
  },
  {
    type: "Property Insurance",
    documents: [
      "Completed claim form",
      "Photos/videos of the damage",
      "Police report (for theft or vandalism)",
      "Fire service report (for fire incidents)",
      "Proof of ownership or receipts for damaged items",
      "Repair or replacement estimates",
    ],
  },
  {
    type: "Travel Insurance",
    documents: [
      "Completed claim form",
      "Copy of passport and travel documents",
      "Medical reports and hospital receipts",
      "Police report (for theft abroad)",
      "Airline correspondence (for flight delays/cancellations)",
      "Original receipts for emergency purchases",
    ],
  },
];

export default function ClaimsPage() {
  return (
    <>
      <PageHeader
        label="Claims"
        title="How to File an Insurance Claim"
        description="At Asanti Brokers, we support you through every step of the claims process. Our team works directly with insurers to ensure your claim is handled quickly and fairly."
        breadcrumb="Claims"
      />

      {/* Step-by-Step Process */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
              Claims Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Four Simple Steps
            </h2>
            <p className="text-gray-600">
              Filing a claim doesn&apos;t have to be stressful. Here&apos;s how we
              make it easy for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-asanti-green text-white rounded-full flex items-center justify-center text-lg font-bold mb-5">
                    {step.number}
                  </div>
                  <div className="w-10 h-10 bg-asanti-green-light text-asanti-green rounded-lg flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Tips */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
                Important Tips
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Tips for a Successful Claim
              </h2>
              <p className="text-gray-600 mb-8">
                Following these guidelines will help ensure your claim is
                processed smoothly and quickly.
              </p>
              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-asanti-green-light text-asanti-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                What Documents You&apos;ll Need
              </h3>
              <div className="space-y-8">
                {documentsByType.map((category) => (
                  <div key={category.type}>
                    <h4 className="text-base font-semibold text-asanti-green mb-3">
                      {category.type}
                    </h4>
                    <ul className="space-y-2">
                      {category.documents.map((doc, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-asanti-forest text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need to File a Claim?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us now and let our team guide you through the entire claims
            process. We&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+233201961648"
              className="inline-flex items-center justify-center bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold px-8 py-4 rounded-full text-base transition-colors shadow-lg shadow-asanti-green/25 gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
            <a
              href="https://wa.me/233201961648?text=Hello%2C%20I%20need%20to%20file%20an%20insurance%20claim."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors border border-white/20 gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
