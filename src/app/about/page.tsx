import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { InsurerLogoGrid } from "@/components/icons/InsurerLogos";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Asanti Brokers Limited — a licensed NIC-registered insurance broker in Accra, Ghana, led by Managing Director Mark Ofori Boateng.",
};

const values = [
  {
    title: "Integrity",
    description:
      "We act with honesty and transparency in every interaction, ensuring our clients always get fair advice and the right cover.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Customer First",
    description:
      "Every decision we make starts with our customers. We are committed to making insurance easy, accessible, and stress-free.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    description:
      "We leverage technology to simplify insurance — from digital quotes to mobile claims, we are building the future of insurance in Africa.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standard in service delivery, product knowledge, and claims management.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

const partners = [
  "Star Assurance",
  "Enterprise Insurance",
  "SIC Insurance",
  "Hollard Insurance",
  "Allianz Insurance",
  "Unique Insurance",
  "Glico General Insurance",
  "Priority Insurance",
  "Vanguard Assurance",
  "Activa International Insurance",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="Your Trusted Insurance Partner in Ghana"
        description="Asanti Brokers Limited is a licensed insurance brokerage firm connecting individuals and businesses with the best insurance solutions across Ghana."
        breadcrumb="About"
      />

      {/* Company Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-asanti-green-light rounded-3xl p-12 lg:p-16">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
                    <Image
                      src="/handshake.png"
                      alt="Partnership"
                      width={48}
                      height={48}
                      className="mb-3"
                    />
                    <p className="text-sm font-semibold text-gray-800">
                      Trusted Partners
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center">
                    <Image
                      src="/africa.png"
                      alt="West Africa"
                      width={48}
                      height={48}
                      className="mb-3"
                    />
                    <p className="text-sm font-semibold text-gray-800">
                      West Africa
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center text-center col-span-2">
                    <Image
                      src="/NIC_LOGO.png"
                      alt="NIC Registered"
                      width={64}
                      height={64}
                      className="mb-3"
                    />
                    <p className="text-sm font-semibold text-gray-800">
                      NIC Registered
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      National Insurance Commission
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Asanti Brokers Limited is a licensed insurance brokerage firm
                registered with the National Insurance Commission (NIC) of Ghana.
                Based in the heart of Accra, we serve as a bridge between
                individuals, businesses, and Ghana&apos;s leading insurance
                companies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Led by our Managing Director, <strong>Mark Ofori Boateng</strong>,
                our team brings decades of combined experience in insurance
                advisory, risk management, and claims support. We understand the
                unique challenges of the Ghanaian market and tailor our
                solutions to meet the specific needs of our clients.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is simple: make insurance accessible, affordable, and
                hassle-free for every Ghanaian. By leveraging modern technology,
                we have streamlined the entire process — from obtaining a quote
                to purchasing a policy to filing a claim — so it can all be done
                from the comfort of your phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
              Our Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600">
              Our core values guide every decision we make and every policy we
              recommend.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center"
              >
                <div className="w-14 h-14 bg-asanti-green-light text-asanti-green rounded-xl flex items-center justify-center mx-auto mb-5">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
              Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600">
              A dedicated team of insurance professionals committed to finding
              the best coverage for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Mark Ofori Boateng",
                initials: "MO",
                role: "Managing Director",
                bio: "With over 15 years in insurance and risk management, Mark leads Asanti Brokers with a vision to make insurance accessible to every Ghanaian.",
                color: "bg-asanti-green",
              },
              {
                name: "Debora Baidoo",
                initials: "DB",
                role: "Head of Operations",
                bio: "Debora ensures smooth day-to-day operations and oversees our claims management process, delivering exceptional service to every client.",
                color: "bg-asanti-forest",
              },
              {
                name: "Kwesi Appiah",
                initials: "KA",
                role: "Senior Insurance Advisor",
                bio: "Kwesi specializes in commercial and business insurance, helping enterprises find the right coverage for their unique risks.",
                color: "bg-asanti-green-dark",
              },
              {
                name: "Henrietta Botchway",
                initials: "HB",
                role: "Client Relations Manager",
                bio: "Henrietta is the first point of contact for new clients, guiding them through the insurance selection process with care and expertise.",
                color: "bg-asanti-green",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center"
              >
                <div
                  className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-5`}
                >
                  <span className="text-white text-xl font-bold">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-asanti-green mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurer Partners */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
              Our Partners
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              We Work With Ghana&apos;s Best Insurers
            </h2>
            <p className="text-gray-600">
              As an independent broker, we are not tied to any single insurer. We
              compare products across Ghana&apos;s top insurance companies to
              find you the best deal.
            </p>
          </div>

          <InsurerLogoGrid />
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 lg:py-28 bg-asanti-forest text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Track Record
            </h2>
            <p className="text-gray-300">
              Numbers that reflect our commitment to serving Ghanaians with
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "1,000+", label: "Customers Served" },
              { stat: "10+", label: "Insurance Partners" },
              { stat: "98%", label: "Claims Settlement Rate" },
              { stat: "GH₵50M+", label: "Coverage Placed" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
              >
                <p className="text-4xl font-bold text-asanti-green mb-2">
                  {item.stat}
                </p>
                <p className="text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get in touch today and let us find the perfect insurance solution for
            you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold px-10 py-4 rounded-full text-base transition-colors shadow-lg shadow-asanti-green/25"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
