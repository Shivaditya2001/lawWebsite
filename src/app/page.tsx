// src/app/page.tsx
import { ReactNode } from "react";
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "1",
    title: "Corporate Law",
    description: "Expert legal counsel for businesses of all sizes, including contract drafting, compliance, and corporate governance."
  },
  {
    id: "2",
    title: "Family Law",
    description: "Compassionate legal support for divorce, child custody, adoption, and other family matters."
  },
  {
    id: "3",
    title: "Civil Litigation",
    description: "Strong representation in civil disputes, including property matters, contract disputes, and commercial litigation."
  },
  {
    id: "4",
    title: "Criminal Law",
    description: "Experienced defense in criminal cases, protecting your rights throughout the legal process."
  },
  {
    id: "5",
    title: "Real Estate Law",
    description: "Comprehensive legal services for property transactions, landlord-tenant disputes, and real estate litigation."
  },
  {
    id: "6",
    title: "Intellectual Property",
    description: "Protection for your intellectual property through patents, trademarks, and copyright services."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="h-screen relative bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/1080"
            alt="Law Office"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Welcome to Anand Law LLP
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
            Dedicated to providing exceptional legal services with integrity and excellence
          </p>
          <Link
            href="/contact"
            className="mt-8 px-8 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-md text-lg font-semibold transition-colors duration-300 transform hover:scale-105"
          >
            Book Consultation
          </Link>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discuss Your Legal Needs?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Schedule a consultation with our experienced team to discuss your case
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-md text-lg font-semibold transition-colors duration-300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cyan-800 text-gray-300 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Anand Law LLP</h3>
            <p className="text-gray-400">
              Professional legal services with a commitment to excellence
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-yellow-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-600 transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-yellow-600 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-2">123 Law Street</p>
            <p className="text-gray-400 mb-2">City, State 12345</p>
            <p className="text-gray-400 mb-2">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@anandlawllb.com</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Anand Law LLP. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
