import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-asanti-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="Asanti Brokers"
                width={140}
                height={40}
                className="h-8 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Licensed insurance broker making coverage accessible, affordable,
              and hassle-free for every Ghanaian.
            </p>
            <div className="flex items-center gap-2">
              <Image
                src="/NIC_LOGO.png"
                alt="NIC"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full"
              />
              <span className="text-xs text-gray-400">
                NIC Registered Broker
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "Claims", href: "/claims" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-asanti-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Services</h4>
            <ul className="space-y-3">
              {[
                "Motor Insurance",
                "Property Insurance",
                "Business Insurance",
                "Travel Insurance",
                "Fleet Management",
                "Claims Assistance",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-asanti-green transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                5th Floor, Assemblies of God-Ghana
                <br />
                Head Office Building, Osu, Accra
              </li>
              <li>
                <a
                  href="tel:+233201961648"
                  className="hover:text-asanti-green"
                >
                  0201 961 648
                </a>
              </li>
              <li>
                <a
                  href="tel:+233242270499"
                  className="hover:text-asanti-green"
                >
                  0242 270 499
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@asanti.insure"
                  className="hover:text-asanti-green"
                >
                  hello@asanti.insure
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Asanti Brokers Limited. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <Link href="#" className="hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
