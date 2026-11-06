import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Building,
  ArrowRight,
  Compass,
  Briefcase,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Laptop,
  Cpu,
  BrainCircuit,
  Plane,
  Layers,
  FileCheck
} from 'lucide-react';
import { getWordPressPosts } from '../lib/wordpress';

export default async function HomePage() {
  const latestPosts = await getWordPressPosts(4);

  const courses = [
    {
      title: "Computer Engineering",
      slug: "computer-engineering",
      type: "ug",
      icon: Laptop,
      desc: "Software development, algorithms, cloud computing, cybersecurity and distributed architectures.",
      intake: "120 Seats"
    },
    {
      title: "Artificial Intelligence & Data Science",
      slug: "artificial-intelligence-data-science",
      type: "ug",
      icon: BrainCircuit,
      desc: "Machine learning, neural networks, computer vision, big data analytics, and modern AI systems.",
      intake: "60 Seats"
    },
    {
      title: "Information Technology",
      slug: "information-technology",
      type: "ug",
      icon: Cpu,
      desc: "Enterprise networking, web engineering, database administration, and software system design.",
      intake: "60 Seats"
    },
    {
      title: "Computer Science & Engineering (IoT)",
      slug: "computer-science-and-engineering",
      type: "ug",
      icon: Layers,
      desc: "Internet of Things, embedded systems, connected sensors, and edge computing architectures.",
      intake: "60 Seats"
    },
    {
      title: "Electrical Engineering",
      slug: "electrical-engineering",
      type: "ug",
      icon: Sparkles,
      desc: "Power electronics, smart grid engineering, renewable energy, and industrial control systems.",
      intake: "60 Seats"
    },
    {
      title: "Electronics & Telecommunication",
      slug: "electronics-telecommunication",
      type: "ug",
      icon: Compass,
      desc: "Wireless communications, 5G signals, embedded VLSI, and digital signal processing.",
      intake: "60 Seats"
    },
    {
      title: "Mechanical Engineering",
      slug: "mechanical-engineering",
      type: "ug",
      icon: Building,
      desc: "Thermodynamics, CAD/CAM automation, robotics, materials science, and automotive systems.",
      intake: "60 Seats"
    },
    {
      title: "Aeronautical Engineering",
      slug: "aeronautical-engineering",
      type: "ug",
      icon: Plane,
      desc: "Aerodynamics, flight mechanics, avionics, propulsion, and aerospace vehicle structures.",
      intake: "60 Seats"
    },
    {
      title: "Master of Management Studies (MMS)",
      slug: "master-of-management-studies",
      type: "pg",
      icon: Briefcase,
      desc: "Comprehensive MBA-equivalent program in Finance, Marketing, HR, and Operations Management.",
      intake: "60 Seats"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-[#07192b] via-[#0f2b48] to-[#1b3a5b] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-amber-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Admissions Open for AY 2026-27 | DTE Code: 3146</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Empowering Tomorrow’s Innovators with <span className="text-amber-400">Engineering Excellence</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                A. C. Patil College of Engineering (ACPCE), Navi Mumbai, provides state-of-the-art technical education,
                industry-backed curriculum, research incubation, and holistic student development affiliated to University of Mumbai.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/admission-enquiry"
                  className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-gray-950 font-bold rounded-xl text-sm transition shadow-lg shadow-amber-500/20 flex items-center"
                >
                  Admission Enquiry 2026-27 <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/ug-pg-courses"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl text-sm transition border border-white/20 flex items-center"
                >
                  Explore All Programs
                </Link>
                <a
                  href="https://acpce.ac.in/wp-content/uploads/2026/04/ACPCE-Broucher.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 bg-transparent hover:bg-white/10 text-gray-300 font-medium rounded-xl text-sm transition flex items-center border border-gray-600"
                >
                  Download Prospectus <FileCheck className="w-4 h-4 ml-2 text-amber-400" />
                </a>
              </div>

              {/* Quick Key Badges */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-gray-300">
                <div>
                  <div className="font-bold text-white text-sm">NAAC Accredited</div>
                  <div className="text-gray-400">Institutional Cycle 2</div>
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Mumbai University</div>
                  <div className="text-gray-400">Permanently Affiliated</div>
                </div>
                <div>
                  <div className="font-bold text-white text-sm">AICTE Approved</div>
                  <div className="text-gray-400">Govt. of Maharashtra</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">
                        Campus at a Glance
                      </span>
                      <h3 className="text-xl font-bold text-white">Kharghar, Navi Mumbai</h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                      <div className="text-2xl font-extrabold text-amber-400">01 : 15</div>
                      <div className="text-xs text-gray-300 font-medium mt-1">Student-Faculty Ratio</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                      <div className="text-2xl font-extrabold text-amber-400">30+ Years</div>
                      <div className="text-xs text-gray-300 font-medium mt-1">Academic Legacy</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                      <div className="text-2xl font-extrabold text-amber-400">100+</div>
                      <div className="text-xs text-gray-300 font-medium mt-1">Corporate Recruiters</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                      <div className="text-2xl font-extrabold text-amber-400">9 Degree</div>
                      <div className="text-xs text-gray-300 font-medium mt-1">UG & PG Programs</div>
                    </div>
                  </div>

                  {/* Notification Bar */}
                  <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center space-x-3 text-xs text-amber-200">
                    <Sparkles className="w-5 h-5 flex-shrink-0 text-amber-400" />
                    <span>
                      Online Fee Approval Proposals for Academic Year 2026-27 are published under FRA section.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Urgent Notices & Circulars Marquee */}
      <section className="bg-amber-500 text-gray-950 py-3 font-medium text-xs sm:text-sm shadow-sm border-y border-amber-600">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-4">
          <span className="font-extrabold uppercase bg-gray-950 text-white px-2.5 py-1 rounded text-xs flex-shrink-0">
            Latest News
          </span>
          <div className="overflow-hidden whitespace-nowrap w-full">
            <span className="inline-block animate-marquee">
              🔔 Direct Second Year & First Year Admissions 2026-27 verification underway &nbsp; | &nbsp;
              🏆 NAAC Cycle 2 Self-Study Report (SSR) & AQAR published online &nbsp; | &nbsp;
              🎓 Campus Placement drives active for 2026 batch: TCS, Infosys, Capgemini & Tech Mahindra.
            </span>
          </div>
        </div>
      </section>

      {/* 3. Discover Academic Programs */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Academic Offerings
          </span>
          <h2 className="text-3xl font-extrabold text-[#0f2b48] mt-3">
            Discover Our Comprehensive Degree Programs
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Curated programs aligned with NEP 2020 and University of Mumbai standards, combining technical theory with rigorous laboratory practice.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 group-hover:bg-amber-500 group-hover:text-gray-950 flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                      {c.intake}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0f2b48] transition">
                    {c.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/${c.slug}`}
                    className="text-xs font-bold text-blue-700 group-hover:text-amber-600 flex items-center transition"
                  >
                    View Curriculum & Labs <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] uppercase font-bold text-gray-400">
                    {c.type.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Live WordPress Updates if present */}
      {latestPosts && latestPosts.length > 0 && (
        <section className="py-12 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                  Live WordPress Feed
                </span>
                <h3 className="text-xl font-bold text-[#0f2b48]">Recent Announcements from WP-Admin</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {latestPosts.map((p) => (
                <div key={p.id} className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-gray-400 font-semibold">{p.date}</span>
                    <h4 className="font-bold text-xs text-gray-900 mt-1 line-clamp-2">{p.title}</h4>
                    <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">{p.excerpt}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-gray-200">
                    <span className="text-[11px] text-blue-600 font-semibold flex items-center">
                      Published via WP-Admin <CheckCircle2 className="w-3 h-3 ml-1 text-emerald-600" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. About Jawahar Education Society & ACPCE */}
      <section className="bg-slate-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                About Our Institution
              </span>
              <h2 className="text-3xl font-extrabold text-[#0f2b48]">
                A Comprehensive Approach to Technical Education
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Founded under the visionary leadership of Late Shri A. C. Patil and managed by Jawahar Education Society,
                ACPCE is located right on the Sion-Panvel Expressway in Kharghar, Navi Mumbai. The college provides
                convenient access to suburban Mumbai and the industrial corridor of Navi Mumbai and Thane-Belapur.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                With accredited degree programs, world-class computer centers, specialized robotics & IoT facilities,
                a rich central library, and distinguished faculty members, ACPCE fosters an environment where innovation meets practical engineering.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Industry Collaborations</h4>
                    <p className="text-[11px] text-gray-500">MoUs with leading IT & Core industrial partners</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Research & Incubation</h4>
                    <p className="text-[11px] text-gray-500">Avishkar, e-Yantra robotics lab & hackathon culture</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Student Mentorship</h4>
                    <p className="text-[11px] text-gray-500">1:15 ratio ensuring personalized guidance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Placement Assistance</h4>
                    <p className="text-[11px] text-gray-500">Dedicated training & career counseling cell</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about-us"
                  className="inline-flex items-center text-xs font-bold text-white bg-[#0f2b48] hover:bg-blue-900 px-5 py-3 rounded-xl transition shadow"
                >
                  Read Complete Institutional Profile <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-video flex items-center justify-center relative">
                  <img
                    src="https://acpce.ac.in/wp-content/uploads/2025/09/Home-page-About-ACPCE.png"
                    alt="ACPCE Campus Infrastructure"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                        Campus Infrastructure
                      </div>
                      <div className="text-base font-bold">
                        Main Academic Complex & Labs, Sector 4, Kharghar
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Placements & Recruiters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              Career & Opportunities
            </span>
            <h2 className="text-3xl font-extrabold text-[#0f2b48] mt-3">
              Training & Placement Cell
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Our graduates are recruited by premier multinational enterprises, consulting firms, and technology leaders across India and overseas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
            {[
              "Tata Consultancy Services",
              "Infosys",
              "Capgemini",
              "L&T Infotech",
              "Reliance Jio",
              "Cognizant",
              "Tech Mahindra",
              "Accenture",
              "Wipro Technologies",
              "Hexaware",
              "Godrej & Boyce",
              "Persistent Systems"
            ].map((company, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-xl p-4 border border-gray-200 shadow-sm flex items-center justify-center text-center font-bold text-xs text-gray-700 hover:border-amber-400 hover:text-blue-900 transition"
              >
                {company}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/placement"
              className="inline-flex items-center text-xs font-bold text-[#0f2b48] hover:text-amber-600 bg-white border border-gray-300 px-6 py-3 rounded-xl shadow-sm hover:shadow transition"
            >
              View Full Placement Reports & Statistics <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
