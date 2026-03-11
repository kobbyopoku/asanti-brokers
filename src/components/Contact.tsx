"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-asanti-green uppercase tracking-wider mb-3">
                Contact Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                Ready to get covered? Have questions? Reach out and our team will
                get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-asanti-green-light rounded-xl flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-asanti-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Office Address</p>
                  <p className="text-sm text-gray-600 mt-1">
                    5th Floor, Assemblies of God-Ghana Head Office Building,
                    <br />
                    Gamel Abdul Nasser-Ringway Estates-Osu, Accra
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    P.O. Box KD 468, Accra
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-asanti-green-light rounded-xl flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-asanti-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-sm text-gray-600 mt-1">
                    <a href="tel:+233277426580" className="hover:text-asanti-green">
                      0277 426 580
                    </a>
                    {" / "}
                    <a href="tel:+233289538285" className="hover:text-asanti-green">
                      0289 538 285
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-asanti-green-light rounded-xl flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-asanti-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-sm text-gray-600 mt-1">
                    <a
                      href="mailto:hello@asanti.io"
                      className="hover:text-asanti-green"
                    >
                      hello@asanti.io
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-asanti-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Thank you!
                </h3>
                <p className="text-gray-600">
                  We have received your message. Our team will reach out to you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Request a Quote
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Fill out the form below and we will get back to you with a
                  personalized quote.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Kwame Asante"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-asanti-green/30 focus:border-asanti-green"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="024 XXX XXXX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-asanti-green/30 focus:border-asanti-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="kwame@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-asanti-green/30 focus:border-asanti-green"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Insurance Type
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-asanti-green/30 focus:border-asanti-green bg-white"
                  >
                    <option value="">Select insurance type</option>
                    <option value="motor-comprehensive">
                      Motor - Comprehensive
                    </option>
                    <option value="motor-third-party">
                      Motor - Third Party
                    </option>
                    <option value="property">Property Insurance</option>
                    <option value="business">Business Insurance</option>
                    <option value="travel">Travel Insurance</option>
                    <option value="fleet">Fleet Insurance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us more about what you need..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-asanti-green/30 focus:border-asanti-green resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
                >
                  Submit Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
