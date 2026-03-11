"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader
        label="Contact Us"
        title="Get in Touch With Our Team"
        description="Ready to get covered? Have questions? Our insurance advisors are here to help you find the right solution."
        breadcrumb="Contact"
      />

      {/* Contact Info + Form */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left - Contact Details */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Reach us by phone, email, or visit our office in Accra. We
                  respond to all enquiries within 24 hours.
                </p>
              </div>

              {/* Office Address */}
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
                    5th Floor, Assemblies of God-Ghana
                    <br />
                    Head Office Building
                    <br />
                    Gamel Abdul Nasser-Ringway Estates
                    <br />
                    Osu, Accra
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
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
                    <a
                      href="tel:+233201961648"
                      className="hover:text-asanti-green transition-colors"
                    >
                      +233 20 196 1648
                    </a>
                  </p>
                  <p className="text-sm text-gray-600">
                    <a
                      href="tel:+233242270499"
                      className="hover:text-asanti-green transition-colors"
                    >
                      +233 24 227 0499
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
                      className="hover:text-asanti-green transition-colors"
                    >
                      hello@asanti.io
                    </a>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Working Hours</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Monday - Friday: 8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

              {/* NIC Badge */}
              <div className="bg-asanti-green-light rounded-2xl p-6 flex items-center gap-4">
                <Image
                  src="/NIC_LOGO.png"
                  alt="NIC"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    NIC Registered Broker
                  </p>
                  <p className="text-xs text-gray-600">
                    Licensed by the National Insurance Commission of Ghana
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-asanti-green rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-10 h-10 text-white"
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 max-w-md mx-auto">
                      We have received your message. Our insurance advisor will
                      get back to you within 24 hours with a personalized quote.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-asanti-green font-semibold hover:text-asanti-green-dark transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Request a Quote
                      </h3>
                      <p className="text-sm text-gray-600">
                        Fill out the form and we will get back to you with a
                        personalized insurance quote.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Kwame Asante"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-asanti-green/30 focus:border-asanti-green bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="024 XXX XXXX"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-asanti-green/30 focus:border-asanti-green bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="kwame@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-asanti-green/30 focus:border-asanti-green bg-white"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Insurance Type *
                        </label>
                        <select
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-asanti-green/30 focus:border-asanti-green bg-white"
                        >
                          <option value="">Select type</option>
                          <option value="motor-comprehensive">
                            Motor - Comprehensive
                          </option>
                          <option value="motor-third-party">
                            Motor - Third Party
                          </option>
                          <option value="motor-third-party-fire-theft">
                            Motor - Third Party, Fire &amp; Theft
                          </option>
                          <option value="property">Property Insurance</option>
                          <option value="business">
                            Business &amp; Liability
                          </option>
                          <option value="travel">Travel Insurance</option>
                          <option value="fire">
                            Fire &amp; Special Perils
                          </option>
                          <option value="marine">Marine &amp; Cargo</option>
                          <option value="personal-accident">
                            Personal Accident
                          </option>
                          <option value="group">
                            Group &amp; Employee Benefits
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Preferred Insurer (Optional)
                        </label>
                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-asanti-green/30 focus:border-asanti-green bg-white">
                          <option value="">No preference</option>
                          <option value="star">Star Assurance</option>
                          <option value="enterprise">
                            Enterprise Insurance
                          </option>
                          <option value="sic">SIC Insurance</option>
                          <option value="hollard">Hollard Insurance</option>
                          <option value="allianz">Allianz Insurance</option>
                          <option value="unique">Unique Insurance</option>
                          <option value="glico">Glico General</option>
                          <option value="priority">Priority Insurance</option>
                          <option value="vanguard">Vanguard Assurance</option>
                          <option value="activa">Activa International</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Tell Us About Your Needs
                      </label>
                      <textarea
                        rows={4}
                        placeholder="E.g. I need comprehensive cover for my 2022 Toyota Corolla, registered in Accra..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-asanti-green/30 focus:border-asanti-green resize-none bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold py-4 rounded-xl transition-colors text-base"
                    >
                      Submit Quote Request
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to be contacted by
                      Asanti Brokers regarding your insurance enquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-asanti-forest rounded-3xl p-12 lg:p-16 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Visit Our Office</h2>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              5th Floor, Assemblies of God-Ghana Head Office Building, Gamel
              Abdul Nasser-Ringway Estates, Osu, Accra
            </p>
            <a
              href="https://maps.google.com/?q=Assemblies+of+God+Ghana+Head+Office+Osu+Accra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-asanti-green hover:bg-asanti-green-dark text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors"
            >
              Open in Google Maps
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
