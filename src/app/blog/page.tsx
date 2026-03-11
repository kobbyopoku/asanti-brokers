import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insurance tips, guides, and resources to help Ghanaians understand insurance and make informed decisions about their coverage.",
};

const articles = [
  {
    title: "Is Third-Party Motor Insurance Enough in Ghana?",
    description:
      "Understanding the difference between third-party and comprehensive motor insurance, and which one is right for you.",
    category: "Motor Insurance",
    readTime: "5 min read",
    gradient: "from-asanti-green to-asanti-green-dark",
  },
  {
    title: "A Complete Guide to Filing Insurance Claims in Ghana",
    description:
      "Step-by-step guide to filing claims with Ghanaian insurers, including required documents and timelines.",
    category: "Claims",
    readTime: "8 min read",
    gradient: "from-asanti-forest to-asanti-green-dark",
  },
  {
    title: "How to Choose the Right Insurance Broker",
    description:
      "What to look for in an insurance broker and why independent brokers offer better value.",
    category: "Insurance Tips",
    readTime: "4 min read",
    gradient: "from-asanti-green-dark to-asanti-green",
  },
  {
    title: "Understanding Fire & Special Perils Insurance",
    description:
      "Why every property owner in Ghana needs fire and special perils coverage.",
    category: "Property Insurance",
    readTime: "6 min read",
    gradient: "from-asanti-green to-asanti-forest",
  },
  {
    title: "Business Insurance Essentials for SMEs in Ghana",
    description:
      "The must-have insurance policies for small and medium businesses operating in Ghana.",
    category: "Business Insurance",
    readTime: "7 min read",
    gradient: "from-asanti-green-dark to-asanti-forest",
  },
  {
    title: "Travel Insurance: What Ghanaians Need to Know",
    description:
      "Everything you need to know about travel insurance for international and domestic trips.",
    category: "Travel Insurance",
    readTime: "5 min read",
    gradient: "from-asanti-forest to-asanti-green",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Resources"
        title="Insurance Tips & Guides"
        description="Helping Ghanaians understand insurance better. Explore our articles, guides, and tips to make informed decisions about your coverage."
        breadcrumb="Blog"
      />

      {/* Articles Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.title}
                href="/contact"
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Gradient accent bar */}
                <div
                  className={`h-2 bg-gradient-to-r ${article.gradient}`}
                />

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-asanti-green bg-asanti-green-light px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center text-xs font-medium text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                      Coming Soon
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-asanti-green transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">
                      {article.readTime}
                    </span>
                    <span className="text-sm font-semibold text-asanti-green group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
            Stay Informed
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            More Articles Coming Soon
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re working on more guides and resources to help you navigate
            insurance in Ghana. In the meantime, feel free to reach out with any
            questions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold px-10 py-4 rounded-full text-base transition-colors shadow-lg shadow-asanti-green/25"
          >
            Ask Us a Question
          </Link>
        </div>
      </section>
    </>
  );
}
