'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  FileCheck,
  Send,
  HelpCircle,
  ArrowLeft
} from 'lucide-react';

export default function AdmissionEnquiryPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Computer Engineering',
    category: 'First Year (FE) B.E.',
    city: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-semibold text-gray-500 hover:text-amber-600 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Home
          </Link>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Academic Year 2026-27
          </span>
          <h1 className="text-3xl font-extrabold text-[#0f2b48] mt-3">
            Admissions Enquiry & Counseling
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            Submit your inquiry to receive program brochures, eligibility criteria, fee structure, and direct counseling support from our admissions desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Enquiry Received Successfully!</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-gray-800">{formData.name}</span>. Our admission counselors will get in touch with you at <span className="font-semibold">{formData.phone}</span> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        course: 'Computer Engineering',
                        category: 'First Year (FE) B.E.',
                        city: '',
                        message: ''
                      });
                    }}
                    className="text-xs font-bold text-[#0f2b48] hover:underline cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      City / Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Navi Mumbai, Thane"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Admission Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent bg-white transition"
                    >
                      <option>First Year (FE) B.E.</option>
                      <option>Direct Second Year (DSE)</option>
                      <option>Master of Management Studies (MMS)</option>
                      <option>Ph.D. Programme</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Course Preference
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent bg-white transition"
                    >
                      <option>Computer Engineering</option>
                      <option>Artificial Intelligence & Data Science</option>
                      <option>Information Technology</option>
                      <option>Computer Science & Engineering (IoT)</option>
                      <option>Electrical Engineering</option>
                      <option>Electronics & Telecommunication</option>
                      <option>Mechanical Engineering</option>
                      <option>Aeronautical Engineering</option>
                      <option>Master of Management Studies (MMS)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Your Question / Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention any queries regarding CET/JEE score eligibility, fees, or hostel facilities..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0f2b48] hover:bg-blue-900 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Submit Admission Enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-bold text-sm text-[#0f2b48] mb-4 flex items-center">
                <HelpCircle className="w-4 h-4 mr-2 text-amber-500" />
                Admission Helpline & Office
              </h3>
              <div className="space-y-3 text-xs text-gray-600">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-800">022 2774 5722 / 32</div>
                    <div className="text-[11px] text-gray-400">Available Mon - Sat (9:30 AM - 5:30 PM)</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-800">principal@acpce.ac.in</div>
                    <div className="text-[11px] text-gray-400">Official Institutional Correspondence</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-gray-800">Campus Address</div>
                    <div className="text-[11px] text-gray-500">
                      Plot No. 17, Sector 4, Kharghar, Navi Mumbai - 410210 (Opposite Kharghar Railway Station)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h4 className="font-bold text-xs uppercase tracking-wider text-amber-800 mb-2">
                Download Official Documents
              </h4>
              <p className="text-xs text-amber-900 mb-4">
                View required certificates, entrance test cutoffs, and prospectus.
              </p>
              <div className="space-y-2">
                <a
                  href="https://acpce.ac.in/wp-content/uploads/2026/04/ACPCE-Broucher.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-amber-200 text-xs font-semibold text-gray-800 hover:text-blue-900 transition"
                >
                  <span>College Prospectus (PDF)</span>
                  <FileCheck className="w-3.5 h-3.5 text-amber-600" />
                </a>
                <Link
                  href="/admission-criteria"
                  className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-amber-200 text-xs font-semibold text-gray-800 hover:text-blue-900 transition"
                >
                  <span>Admission Eligibility Criteria</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                </Link>
                <Link
                  href="/fees-structure"
                  className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-amber-200 text-xs font-semibold text-gray-800 hover:text-blue-900 transition"
                >
                  <span>Approved Fee Structure</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
