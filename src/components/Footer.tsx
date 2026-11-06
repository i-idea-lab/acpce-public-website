import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  ShieldCheck,
  Award,
  ArrowRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1f33] text-gray-300 pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: About & Approvals */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                <img
                  src="https://acpce.ac.in/wp-content/uploads/2025/06/New-Logo-300x151-1.webp"
                  alt="ACPCE Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-base leading-tight">
                  A. C. Patil College of Engineering
                </h3>
                <span className="text-xs text-amber-400 font-medium">Est. 1992</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Jawahar Education Society&apos;s premier engineering institute, committed to academic excellence,
              cutting-edge research, and industry-oriented technical education.
            </p>
            <div className="pt-2 flex flex-col space-y-1.5 text-xs text-gray-300">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>AICTE Approved | DTE Code: 3146</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Affiliated to University of Mumbai</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-blue-400" />
                <span>NAAC Accredited Grade Institute</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
              Explore Institute
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about-us" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  About Us & Governance
                </Link>
              </li>
              <li>
                <Link href="/approvals" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Approvals & Affiliations
                </Link>
              </li>
              <li>
                <Link href="/naac-cycle-2" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  NAAC Accreditation (Cycle 2)
                </Link>
              </li>
              <li>
                <Link href="/ug-pg-courses" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Undergraduate & PG Programs
                </Link>
              </li>
              <li>
                <Link href="/placement" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Training & Placement Cell
                </Link>
              </li>
              <li>
                <Link href="/iqac" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  IQAC Cell & Reports
                </Link>
              </li>
              <li>
                <Link href="/library" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Central Library & E-Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Departments */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
              Engineering Departments
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/computer-engineering" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Computer Engineering
                </Link>
              </li>
              <li>
                <Link href="/artificial-intelligence-data-science" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  AI & Data Science
                </Link>
              </li>
              <li>
                <Link href="/information-technology" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Information Technology
                </Link>
              </li>
              <li>
                <Link href="/electrical-engineering" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Electrical Engineering
                </Link>
              </li>
              <li>
                <Link href="/electronics-telecommunication" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Electronics & Telecommunication
                </Link>
              </li>
              <li>
                <Link href="/mechanical-engineering" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Mechanical Engineering
                </Link>
              </li>
              <li>
                <Link href="/master-of-management-studies" className="hover:text-amber-400 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1.5 text-amber-500" />
                  Master of Management Studies (MMS)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
              Campus Contact
            </h4>
            <div className="flex items-start space-x-3 text-xs">
              <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-300">
                Plot No. 17, Sion-Panvel Expressway, Sector 4, Kharghar, Navi Mumbai, Maharashtra 410210
              </p>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <p className="text-gray-300">022 2774 5722 / 022 2774 5732</p>
            </div>
            <div className="flex items-center space-x-3 text-xs">
              <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <p className="text-gray-300">principal@acpce.ac.in</p>
            </div>

            <div className="pt-3">
              <span className="text-xs font-semibold text-white block mb-1.5">Compliance & Disclosures:</span>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <a
                  href="https://acpce.ac.in/wp-content/uploads/2026/03/Mandatory-Disclosure-pdf.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 px-2.5 py-1 rounded text-gray-300 border border-gray-700 flex items-center"
                >
                  Mandatory Disclosure <ExternalLink className="w-2.5 h-2.5 ml-1" />
                </a>
                <Link
                  href="/grievance-redressal-mechanism"
                  className="bg-gray-800 hover:bg-gray-700 px-2.5 py-1 rounded text-gray-300 border border-gray-700"
                >
                  Grievance Redressal
                </Link>
                <Link
                  href="/aicte-feedback"
                  className="bg-gray-800 hover:bg-gray-700 px-2.5 py-1 rounded text-gray-300 border border-gray-700"
                >
                  AICTE Feedback
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 A. C. Patil College of Engineering (ACPCE). All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy-2" className="hover:text-amber-400 transition">
              Privacy Policy
            </Link>
            <Link href="/acpce-it-policies" className="hover:text-amber-400 transition">
              IT Policy
            </Link>
            <Link href="/standard-operating-procedure" className="hover:text-amber-400 transition">
              SOP
            </Link>
            <Link href="/contact-us" className="hover:text-amber-400 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
