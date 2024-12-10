'use client'
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
    caseType: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Show loading toast
    const loadingToast = toast.loading('Submitting your appointment request...');

    try {
      // Your API call will go here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating API call

      // Show success toast
      toast.success('Appointment request sent! We will contact you shortly.', {
        duration: 5000,
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: '',
        caseType: ''
      });

    } catch (error) {
      // Show error toast
      toast.error('Failed to submit appointment request. Please try again.', {
        duration: 5000,
      });
    } finally {
      // Dismiss loading toast
      toast.dismiss(loadingToast);
    }
  };

  return (
    <div>
      {/* Keep your existing UI code here */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <p>Email: contact@anandlawllp.com</p>
                <p>Phone: +91 XXXXXXXXXX</p>
                <p>Address: [Your address]</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <select
                    name="caseType"
                    value={formData.caseType}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="">Select Case Type</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="family">Family Law</option>
                    <option value="criminal">Criminal Law</option>
                    <option value="civil">Civil Litigation</option>
                    <option value="real-estate">Real Estate Law</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-2 border rounded"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition-colors"
                >
                  Book Appointment
                </button>
              </form>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Online Payment</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <img
                src="/api/placeholder/300/300"
                alt="UPI QR Code"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
