import Image from "next/image";

const services = [
  {
    icon: "/slug_steps_1.png",
    title: "Motor Insurance",
    description:
      "Comprehensive and third-party motor insurance for private vehicles, commercial fleets, taxis, and ride-hailing services.",
  },
  {
    icon: "/stepsSelect.png",
    title: "Property Insurance",
    description:
      "Protect your home, office, or commercial property against fire, theft, natural disasters, and other unforeseen events.",
  },
  {
    icon: "/handshake.png",
    title: "Business Insurance",
    description:
      "Tailored coverage for businesses including liability, professional indemnity, goods-in-transit, and employee benefits.",
  },
  {
    icon: "/slug_steps_2.png",
    title: "Travel Insurance",
    description:
      "Stay protected wherever you go with coverage for medical emergencies, trip cancellation, and lost luggage.",
  },
  {
    icon: "/stepsCar.png",
    title: "Fleet Management",
    description:
      "Comprehensive fleet insurance solutions for transport companies, logistics firms, and businesses with multiple vehicles.",
  },
  {
    icon: "/slug_step_3.png",
    title: "Claims Assistance",
    description:
      "Expert support throughout the claims process. We advocate on your behalf to ensure fast and fair settlements.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Insurance Solutions
          </h2>
          <p className="text-gray-600">
            From motor insurance to business coverage, we provide a full range of
            insurance products tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group border border-gray-100"
            >
              <div className="w-14 h-14 bg-asanti-green-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-asanti-green/10 transition-colors">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
