import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Getting insured with Asanti Brokers is fast and easy. Choose your cover, fill in your details, and get a quote — all in under 5 minutes.",
};

const steps = [
  {
    number: "01",
    icon: "/stepsSelect.png",
    title: "Choose Your Cover",
    description:
      "Browse our range of insurance products and select the type of cover you need. Whether it is motor, property, travel, or business insurance — we have you covered.",
    details: [
      "Select from 8+ insurance categories",
      "Compare options from multiple insurers",
      "Get tailored recommendations based on your needs",
    ],
  },
  {
    number: "02",
    icon: "/slug_steps_2.png",
    title: "Share Your Details",
    description:
      "Provide a few basic details about yourself and what you want to insure. Our forms are short and simple — it takes just a couple of minutes.",
    details: [
      "Quick digital forms — no paperwork",
      "Secure and encrypted data handling",
      "Only essential information required",
    ],
  },
  {
    number: "03",
    icon: "/slug_step_3.png",
    title: "Get Your Quote & Pay",
    description:
      "Receive competitive quotes from Ghana's top insurers instantly. Choose the best option, pay securely online, and download your policy certificate immediately.",
    details: [
      "Instant quotes from 10+ insurers",
      "Secure mobile money and card payment",
      "Policy certificate delivered digitally",
    ],
  },
];

const faqs = [
  {
    question: "Is motor insurance mandatory in Ghana?",
    answer:
      "Yes. Under Ghana's Motor Vehicles (Third Party Insurance) Act, 1958, every motor vehicle used on public roads must have at least third-party insurance. Driving without insurance is an offence punishable by law.",
  },
  {
    question: "What is the difference between comprehensive and third-party insurance?",
    answer:
      "Third-party insurance covers damage or injury you cause to other people or their property. Comprehensive insurance covers third-party liability PLUS damage to your own vehicle — including accidents, fire, theft, and vandalism.",
  },
  {
    question: "How long does it take to get insured?",
    answer:
      "With Asanti Brokers, you can get a quote and purchase a policy in as little as 5 minutes. Your digital policy certificate is available immediately after payment.",
  },
  {
    question: "Can I pay with mobile money?",
    answer:
      "Yes! We accept payments via MTN Mobile Money, Vodafone Cash, AirtelTigo Money, as well as Visa and Mastercard debit/credit cards.",
  },
  {
    question: "What happens when I need to make a claim?",
    answer:
      "Contact our claims team immediately. We will guide you through the entire process — from filing the claim to liaising with the insurer on your behalf. Our goal is to get your claim settled as quickly as possible.",
  },
  {
    question: "Do you only cover motor insurance?",
    answer:
      "No. While motor insurance is our most popular product, we also offer property, business, travel, marine, fire, personal accident, and group insurance. Visit our Services page for full details.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        label="How It Works"
        title="Get Insured in 3 Easy Steps"
        description="We have simplified the insurance process so you can get covered quickly and confidently — no jargon, no paperwork, no hassle."
        breadcrumb="How It Works"
      />

      {/* Steps */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-bold text-asanti-green/20">
                      {step.number}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 bg-asanti-green rounded-full flex items-center justify-center shrink-0">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-gray-700">{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`flex justify-center ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="relative w-64 h-64 bg-asanti-green-light rounded-full flex items-center justify-center">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={96}
                      height={96}
                    />
                    <div className="absolute top-2 right-2 w-12 h-12 bg-asanti-green text-white text-lg font-bold rounded-full flex items-center justify-center shadow-lg">
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Flexible Payment Options
            </h2>
            <p className="text-gray-600">
              Pay the way that works for you
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "MTN Mobile Money",
              "Vodafone Cash",
              "AirtelTigo Money",
              "Visa / Mastercard",
              "Bank Transfer",
            ].map((method) => (
              <div
                key={method}
                className="bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100 text-sm font-medium text-gray-700"
              >
                {method}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
              FAQs
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Have questions? We have answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-asanti-forest text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            It only takes 5 minutes. Get a free quote from Ghana&apos;s top
            insurers and protect what matters most.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold px-10 py-4 rounded-full text-base transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
