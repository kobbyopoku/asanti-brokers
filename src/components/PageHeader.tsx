import Link from "next/link";

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
  breadcrumb: string;
}

export default function PageHeader({
  label,
  title,
  description,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-asanti-green-light/50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-asanti-green transition-colors">
            Home
          </Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 font-medium">{breadcrumb}</span>
        </nav>

        <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
          {label}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4 max-w-3xl">
          {title}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">{description}</p>
      </div>
    </section>
  );
}
