const testimonials = [
  {
    name: "Kwame Mensah",
    role: "Business Owner, Accra",
    quote:
      "Asanti made getting fleet insurance so easy. I got quotes within minutes and the team helped me choose the best cover for my transport business.",
    initials: "KM",
  },
  {
    name: "Ama Serwaa",
    role: "Private Car Owner",
    quote:
      "I was dreading the insurance renewal process until a friend told me about Asanti. It was so simple — I did everything on my phone in under 10 minutes!",
    initials: "AS",
  },
  {
    name: "Daniel Ofori",
    role: "Ride-Hailing Driver",
    quote:
      "As a taxi driver, I need reliable coverage. Asanti gave me affordable comprehensive insurance and when I had a minor accident, they handled the claim fast.",
    initials: "DO",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Real stories from real people who trust Asanti Brokers with their
            insurance needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-asanti-green text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
