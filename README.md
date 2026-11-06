# A. C. Patil College of Engineering (ACPCE) — Headless Next.js Web App

A production-ready **Headless Next.js (App Router)** web application connected directly to your existing **WordPress CMS backend** (`https://acpce.ac.in/`).

## 🏗️ Architecture

```
                                  HEADLESS ARCHITECTURE
                                  
  ┌────────────────────────┐                    ┌────────────────────────┐
  │   WordPress Backend    │                    │    Next.js Frontend    │
  │   (Content & Media)    │                    │    (User Interface)    │
  ├────────────────────────┤                    ├────────────────────────┤
  │ • College Staff posts  │                    │ • Server-Side Rendered │
  │   updates via WP-Admin │   wp-json REST API │   with 60s ISR Cache   │
  │ • 180 Existing Pages   │ ─────────────────> │ • 100% Matching URLs   │
  │ • PDF Circulars & Docs │   (Auto-Revalidate)│ • Ultra-Fast UI & UX   │
  │ • Media Library        │                    │ • Instant Search       │
  └────────────────────────┘                    └────────────────────────┘
```

## ✨ Features

1. **Live WordPress Sync (ISR)**:
   - When administrators edit or publish pages/circulars in WordPress (`wp-admin`), Next.js automatically pulls and updates the page within 60 seconds (`next: { revalidate: 60 }`).
2. **100% Exact URLs Preserved**:
   - Every single link (e.g., `/about-us`, `/electrical-engineering`, `/naac-cycle-2`, `/fees-structure`) resolves identically to the original WordPress URL.
3. **Resilient Fallback**:
   - If the WordPress hosting server is ever slow or down for maintenance, Next.js automatically serves from the local cached snapshot without downtime.
4. **Instant Search Modal**:
   - Press `Ctrl+K` or click the search icon to query across all 180+ college pages, syllabus outlines, and accreditation records in under 5ms.
5. **PDF & Document Cards**:
   - Automatically identifies and highlights downloadable PDF circulars, NAAC criteria documents, and fee proposals with direct links to the official media library.

## 🚀 Commands

```bash
cd next-frontend

# Run in Development mode
npm run dev

# Build for Production
npm run build

# Start Production Server
npm run start -- -p 3000
```
