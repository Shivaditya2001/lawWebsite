// src/app/about/page.tsx
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function about() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/600"
            alt="Law Office"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300">Excellence in Legal Services Since 1995</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Educational Background</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-semibold text-xl text-gray-800">Harvard Law School</h3>
                    <p className="text-gray-600">Juris Doctor, Class of 2005</p>
                    <p className="text-gray-600">Specialized in Corporate Law</p>
                  </li>
                  <li>
                    <h3 className="font-semibold text-xl text-gray-800">Yale University</h3>
                    <p className="text-gray-600">Bachelor of Arts in Political Science</p>
                    <p className="text-gray-600">Graduated Magna Cum Laude, 2002</p>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Professional Experience</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-semibold text-xl text-gray-800">Senior Partner</h3>
                    <p className="text-gray-600">Anand Law LLB (2010 - Present)</p>
                    <p className="text-gray-600">Leading a team of 15+ attorneys</p>
                  </li>
                  <li>
                    <h3 className="font-semibold text-xl text-gray-800">Associate Attorney</h3>
                    <p className="text-gray-600">Johnson & Smith Legal (2005 - 2010)</p>
                    <p className="text-gray-600">Specialized in Corporate Litigation</p>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Team Member Cards */}
                {teamMembers.map((member) => (
                  <div key={member.id} className="bg-white p-6 rounded-lg shadow-md">
                    <img
                      src="/api/placeholder/200/200"
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                    <p className="text-gray-600 text-center mb-2">{member.role}</p>
                    <p className="text-gray-500 text-center text-sm">{member.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Awards & Recognition */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Awards & Recognition</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">🏆</span>
                    <div>
                      <h3 className="font-semibold">Best Law Firm 2023</h3>
                      <p className="text-gray-600">Legal Excellence Awards</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">🏆</span>
                    <div>
                      <h3 className="font-semibold">Top Corporate Law Firm</h3>
                      <p className="text-gray-600">Business Law Review 2022</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you with your legal needs. Our team is ready to provide the expertise you deserve.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-yellow-700 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    role: "Senior Partner",
    description: "20+ years experience in Corporate Law"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Partner",
    description: "Expert in Family Law and Civil Litigation"
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Associate",
    description: "Specialized in Criminal Defense"
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Associate",
    description: "Focus on Real Estate Law"
  }
];
