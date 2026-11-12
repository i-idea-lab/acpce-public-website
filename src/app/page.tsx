import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Calendar,
  FileCheck,
  ChevronRight,
  Sparkles,
  BookOpen,
  Award
} from 'lucide-react';
import { getParsedHomePage, getWordPressPosts } from '../lib/wordpress';

export default async function HomePage() {
  const home = await getParsedHomePage();
  const latestPosts = await getWordPressPosts(4);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Section - Exact WordPress copy: Everything plus imagination */}
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

              {/* Exact WordPress Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Everything <span className="text-amber-400 italic">plus</span> imagination
              </h1>

              {/* Exact WordPress Subheading */}
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                {home.heroSub}
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
                  Discover Courses
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

              {/* Badges */}
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

            {/* Right Column: Key Stats Card from WordPress */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block">
                        Jawahar Education Society&apos;s
                      </span>
                      <h3 className="text-xl font-bold text-white">A. C. Patil College of Engg.</h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Highlights Grid matching WordPress home counters */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                      <div className="text-2xl font-extrabold text-amber-400">{home.ratio}</div>
                      <div className="text-xs text-gray-300 font-medium mt-1">Student-Faculty Ratio</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                      <div className="text-2xl font-extrabold text-amber-400">30+ Years</div>
                      <div className="text-xs text-gray-300 font-medium mt-1">Academic Legacy</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                      <div className="text-2xl font-extrabold text-amber-400">Strong</div>
                      <div className="text-xs text-gray-300 font-medium mt-1">Alumni Network</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                      <div className="text-2xl font-extrabold text-amber-400">Active</div>
                      <div className="text-xs text-gray-300 font-medium mt-1">Placement Partners</div>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center space-x-3 text-xs text-amber-200">
                    <Sparkles className="w-5 h-5 flex-shrink-0 text-amber-400" />
                    <span>
                      DTE Code 3146 | NAAC Cycle 2 Accredited Institution
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About ACPCE Section (Direct from WordPress) */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                Institutional Overview
              </span>
              <h2 className="text-3xl font-extrabold text-[#0f2b48]">
                About ACPCE
              </h2>
              {/* Exact paragraph from WordPress */}
              <p className="text-base text-gray-700 leading-relaxed font-normal">
                {home.aboutText}
              </p>

              <div className="pt-2">
                <Link
                  href="/about-us"
                  className="inline-flex items-center text-xs font-bold text-white bg-[#0f2b48] hover:bg-blue-900 px-5 py-3 rounded-xl transition shadow"
                >
                  Read More About Us <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 aspect-video flex items-center justify-center relative">
                  <img
                    src="https://acpce.ac.in/wp-content/uploads/2025/09/Home-page-About-ACPCE.png"
                    alt="About ACPCE"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Discover the Range of Courses we offer (With images from WordPress) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
            Degree Programs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2b48] mt-3">
            Discover the Range of Courses we offer
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Approved by AICTE and Affiliated to the University of Mumbai
          </p>
        </div>

        {/* 9 Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {home.courses.map((course, idx) => (
            <Link
              key={idx}
              href={`/${course.slug}`}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-[#0f2b48]/90 backdrop-blur-md text-amber-400 text-[11px] font-bold px-3 py-1 rounded-full">
                    {course.level}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#0f2b48] transition">
                    {course.title}
                  </h3>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-blue-700 group-hover:text-amber-600">
                <span>View Syllabus & Labs</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Our Vision & Mission (Exact copy from WordPress) */}
      <section className="bg-gradient-to-br from-[#0f2b48] to-[#153e68] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Institutional Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Our Vision &amp; Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Vision Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-gray-950 flex items-center justify-center font-bold flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-base text-gray-200 leading-relaxed">
                  {home.vision}
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-gray-950 flex items-center justify-center font-bold flex-shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <ul className="space-y-4 text-sm text-gray-200">
                  {home.missions.map((mission, mIdx) => (
                    <li key={mIdx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Institutional Pillars from WordPress Homepage */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Pillar 1: Innovation Cell */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                Practical Innovation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b48]">
                {home.innovTitle}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {home.innovText}
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 aspect-video">
                <img
                  src={home.innovImage}
                  alt={home.innovTitle}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Pillar 2: Faculty Community */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 aspect-video">
                <img
                  src={home.facultyImage}
                  alt={home.facultyTitle}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                Academic Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b48]">
                {home.facultyTitle}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {home.facultyText}
              </p>
            </div>
          </div>

          {/* Pillar 3: Celebration & Campus Life */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                Vibrant Culture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2b48]">
                {home.hubTitle}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {home.hubText}
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-gray-100 aspect-video">
                <img
                  src={home.hubImage}
                  alt={home.hubTitle}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Latest News (Live from WordPress Posts) */}
      {latestPosts && latestPosts.length > 0 && (
        <section className="py-20 bg-slate-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                  Circulars &amp; Updates
                </span>
                <h2 className="text-3xl font-extrabold text-[#0f2b48] mt-1">Latest News</h2>
                <p className="text-gray-500 text-xs mt-1">
                  Live announcements published directly via WordPress
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center text-[11px] text-gray-400 font-semibold mb-2">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-amber-500" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-bold text-sm text-gray-900 line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-blue-700">
                    <span>Read Notice</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
