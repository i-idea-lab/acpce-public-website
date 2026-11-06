export interface NavItem {
  title: string;
  href?: string;
  isExternal?: boolean;
  children?: NavItem[];
}

export const navigationData: NavItem[] = [
  {
    title: "Institute",
    children: [
      { title: "About Us", href: "/about-us" },
      { title: "Approvals", href: "/approvals" },
      { title: "Statutory Bodies", href: "/statutory-bodies" },
      { title: "Audited Statements", href: "/audited-statements" },
      {
        title: "Mandatory Disclosure",
        href: "https://acpce.ac.in/wp-content/uploads/2026/03/Mandatory-Disclosure-pdf.pdf",
        isExternal: true
      }
    ]
  },
  {
    title: "Accreditations",
    children: [
      {
        title: "NAAC Cycle 2",
        href: "/naac-cycle-2",
        children: [
          { title: "AQAR", href: "/aqar" },
          {
            title: "NAAC Accreditation Certificate Cycle 2",
            href: "https://acpce.ac.in/wp-content/uploads/2025/12/NAAC-Accreditation-Certificate-Cycle-2.pdf",
            isExternal: true
          },
          {
            title: "Grade Sheet",
            href: "https://acpce.ac.in/wp-content/uploads/2025/08/Institutional_Grade_Sheet.pdf",
            isExternal: true
          },
          {
            title: "Pre Qualified SSR",
            href: "https://acpce.ac.in/wp-content/uploads/2025/08/Pre-Qualified-SSR.pdf",
            isExternal: true
          },
          {
            title: "SSR Cycle 2",
            href: "https://acpce.ac.in/wp-content/uploads/2025/08/SSR-Cycle-2.pdf",
            isExternal: true
          },
          { title: "Criterion 1", href: "/criterion-1" },
          { title: "Criterion 2", href: "/criterion-2-links" },
          { title: "Criterion 3", href: "/criterion-3-links" },
          { title: "Criterion 4", href: "/criterion-4-links" },
          { title: "Criterion 5", href: "/criterion-5-links" },
          { title: "Criterion 6", href: "/criterion-6-links" },
          { title: "Criterion 7", href: "/criterion-7-links" }
        ]
      },
      {
        title: "NAAC Cycle 1",
        children: [
          {
            title: "NAAC Accreditation Certificate",
            href: "https://acpce.ac.in/wp-content/uploads/2025/08/NAAC-Accreditation_Certificate.pdf",
            isExternal: true
          },
          {
            title: "Self Study Report",
            href: "https://acpce.ac.in/wp-content/uploads/2025/08/SSR_ACPCE.pdf",
            isExternal: true
          },
          { title: "NAAC Extended Templates", href: "/naac-extended-templates" },
          { title: "AQAR Yearly", href: "/aqar-yearly" }
        ]
      }
    ]
  },
  {
    title: "Fees Regulating Authority",
    children: [
      {
        title: "Online Fee Approval Proposal for AY 2026-27",
        href: "https://acpce.ac.in/wp-content/uploads/2025/11/Institute-Information-Print-1.pdf",
        isExternal: true
      },
      {
        title: "FRA Engineering",
        href: "https://acpce.ac.in/wp-content/uploads/2025/11/ENGG.pdf",
        isExternal: true
      },
      {
        title: "FRA MMS",
        href: "https://acpce.ac.in/wp-content/uploads/2025/11/MBA.pdf",
        isExternal: true
      },
      {
        title: "Income and Expenses",
        href: "https://acpce.ac.in/wp-content/uploads/2025/11/Income-And-Expenses-Details.pdf",
        isExternal: true
      },
      {
        title: "FRA Faculty Details",
        href: "https://acpce.ac.in/wp-content/uploads/2025/11/Faculty-Details-With-Salary.pdf",
        isExternal: true
      }
    ]
  },
  {
    title: "Admissions",
    children: [
      {
        title: "Prospectus",
        href: "https://acpce.ac.in/wp-content/uploads/2026/04/ACPCE-Broucher.pdf",
        isExternal: true
      },
      { title: "UG & PG Courses", href: "/ug-pg-courses" },
      { title: "Ph.D. Programme", href: "/ph-d-programme" },
      { title: "Admission Criteria", href: "/admission-criteria" },
      { title: "Admission Notification", href: "/admission-notification" },
      {
        title: "Documents Required",
        href: "/documents-required",
        children: [
          {
            title: "First Year Engineering (FE)",
            href: "https://acpce.ac.in/wp-content/uploads/2026/08/FE.jpg",
            isExternal: true
          },
          {
            title: "Direct Second Year (DSE)",
            href: "https://acpce.ac.in/wp-content/uploads/2026/08/DSE.jpg",
            isExternal: true
          },
          {
            title: "First Year MMS",
            href: "https://acpce.ac.in/wp-content/uploads/2026/08/MMS.jpg",
            isExternal: true
          }
        ]
      },
      { title: "Fee Structure", href: "/fees-structure" }
    ]
  },
  {
    title: "Academics",
    children: [
      {
        title: "Undergraduate (UG)",
        children: [
          { title: "Computer Engineering", href: "/computer-engineering" },
          { title: "Artificial Intelligence & Data Science", href: "/artificial-intelligence-data-science" },
          { title: "Information Technology", href: "/information-technology" },
          { title: "Computer Science & Engineering", href: "/computer-science-and-engineering" },
          { title: "Electrical Engineering", href: "/electrical-engineering" },
          { title: "Electronics & Telecommunication", href: "/electronics-telecommunication" },
          { title: "Mechanical Engineering", href: "/mechanical-engineering" },
          { title: "Aeronautical Engineering", href: "/aeronautical-engineering" },
          { title: "Applied Sciences & Humanities", href: "/humanity-and-science" }
        ]
      },
      {
        title: "Postgraduate (PG)",
        children: [
          { title: "Master of Management Studies (MMS)", href: "/master-of-management-studies" },
          { title: "Foreign Language Learning", href: "/foreign-language-learning" }
        ]
      },
      { title: "Doctoral Program", href: "/doctoral" },
      { title: "Central Library", href: "/library" },
      { title: "Research & Development", href: "/research-developments" },
      { title: "Academic Calendar", href: "/academic-calendar" },
      {
        title: "ERP Portal (vmedulife)",
        href: "https://portal.vmedulife.com/public/auth/#/login/acpcoe-navi-mumbai",
        isExternal: true
      }
    ]
  },
  {
    title: "Life at ACPCE",
    children: [
      {
        title: "Extra Curricular",
        children: [
          { title: "Student Council", href: "/student-council" },
          { title: "Rhythms (Cultural Fest)", href: "/rhythms" },
          { title: "Vector (Tech Fest)", href: "https://www.vectors2026-27.in/", isExternal: true },
          { title: "Kurukshetra Sports", href: "/kurukshetra" },
          { title: "Freshers Welcome", href: "/freshers" },
          {
            title: "Outstanding Awards",
            href: "https://acpce.ac.in/wp-content/uploads/2025/08/outstanding-awards.pdf",
            isExternal: true
          }
        ]
      },
      {
        title: "Co-Curricular & Tech Clubs",
        children: [
          { title: "e-Yantra Robotics", href: "/e-yantra" },
          { title: "Smart India Hackathon", href: "/hackathon" },
          { title: "Avishkar Research", href: "/avishkar" },
          { title: "Robocon", href: "/robocon" }
        ]
      },
      {
        title: "Social Outreach",
        children: [
          { title: "NSS Cell", href: "/nss" },
          { title: "Unnat Bharat Abhiyan (UBA)", href: "/uba" }
        ]
      }
    ]
  },
  {
    title: "Placement",
    href: "/placement"
  },
  {
    title: "IQAC",
    href: "/iqac"
  },
  {
    title: "Alumni",
    children: [
      { title: "Alumni Meet 'RELIVE'", href: "/alumni-meet-relive" },
      { title: "Annual Convocation", href: "/convocation" }
    ]
  },
  {
    title: "Important Links",
    children: [
      { title: "AICTE Feedback", href: "/aicte-feedback" },
      { title: "Grievance Redressal", href: "/grievance-redressal-mechanism" },
      { title: "Transcript Application", href: "/application-for-transcript" },
      { title: "University Results", href: "/all-results-ay-2025-26" },
      { title: "Standard Operating Procedure", href: "/standard-operating-procedure" },
      { title: "IT & Computing Policies", href: "/acpce-it-policies" },
      { title: "NIRF Ranking Report", href: "https://acpce.ac.in/wp-content/uploads/2026/04/ACPCE_NIRF.pdf", isExternal: true },
      { title: "NPTEL Local Chapter", href: "https://nptel.ac.in/localchapter", isExternal: true },
      { title: "AICTE Official Portal", href: "https://www.aicte.gov.in/", isExternal: true },
      { title: "Contact Us", href: "/contact-us" }
    ]
  }
];
