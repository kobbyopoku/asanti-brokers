import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: "/stepsSelect.png",
    title: "Choose Your Cover",
    description:
      "Select the type of insurance you need — motor, property, travel, or business. Tell us what you want to protect.",
  },
  {
    number: "02",
    icon: "/slug_steps_2.png",
    title: "Fill Your Details",
    description:
      "Provide a few details about yourself and what you are insuring. It only takes a couple of minutes.",
  },
  {
    number: "03",
    icon: "/slug_step_3.png",
    title: "Get Your Quote & Pay",
    description:
      "Receive competitive quotes from top insurers instantly. Choose the best option and pay securely online.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Insured in 3 Easy Steps
          </h2>
          <p className="text-gray-600">
            We have made the process as simple as possible so you can get covered
            quickly and move on with your life.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px border-t-2 border-dashed border-asanti-green/30" />
              )}

              {/* Step card */}
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-asanti-green-light rounded-full flex items-center justify-center mb-6">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={56}
                    height={56}
                  />
                </div>
                {/* Step number badge */}
                <div className="absolute top-0 right-1/2 translate-x-16 -translate-y-1 w-8 h-8 bg-asanti-green text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold px-10 py-4 rounded-full text-base transition-colors shadow-lg shadow-asanti-green/25"
          >
            Start Your Quote Today
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
