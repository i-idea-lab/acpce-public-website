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
      {
        title: "Accreditations",
        children: [
          {
            title: "NAAC",
            children: [
              {
                title: "NAAC Cycle 2",
                href: "/naac-cycle-2",
                children: [
                  { title: "AQAR", href: "/aqar" },
                  {
                    title: "NAAC Accreditation Certificate cycle 2",
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
          }
        ]
      },
      {
        title: "Fees Regulating Authority 2026-27",
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
            title: "FRA Faculty",
            href: "https://acpce.ac.in/wp-content/uploads/2025/11/Faculty-Details-With-Salary.pdf",
            isExternal: true
          }
        ]
      },
      { title: "Audited Statements", href: "/audited-statements" },
      {
        title: "Mandatory Disclosure",
        href: "https://acpce.ac.in/wp-content/uploads/2026/03/Mandatory-Disclosure-pdf.pdf",
        isExternal: true
      },
      { title: "Statutory Bodies", href: "/statutory-bodies" }
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
            title: "First Year",
            href: "https://acpce.ac.in/wp-content/uploads/2026/08/FE.jpg",
            isExternal: true
          },
          {
            title: "Direct Second Year",
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
      {
        title: "Fees Structure 2026-27",
        href: "/fees-structure",
        children: [
          {
            title: "First Year Engineering",
            href: "https://acpce.ac.in/wp-content/uploads/2026/08/FE.jpg",
            isExternal: true
          },
          {
            title: "Direct Second Year Engg.",
            href: "https://acpce.ac.in/wp-content/uploads/2026/08/DSE.jpg",
            isExternal: true
          },
          {
            title: "First Year MMS",
            href: "https://acpce.ac.in/wp-content/uploads/2026/08/MMS.jpg",
            isExternal: true
          }
        ]
      }
    ]
  },
  {
    title: "Academics",
    children: [
      {
        title: "UG",
        children: [
          { title: "Electrical Engineering", href: "/electrical-engineering" },
          { title: "Electronics & Telecommunication Engg", href: "/electronics-telecommunication" },
          { title: "Computer Engineering", href: "/computer-engineering" },
          { title: "Mechanical Engineering", href: "/mechanical-engineering" },
          { title: "Information Technology", href: "/information-technology" },
          { title: "Artificial Intelligence & Data Science", href: "/artificial-intelligence-data-science" },
          { title: "Computer Science and Engineering", href: "/computer-science-and-engineering" },
          { title: "Aeronautical Engineering", href: "/aeronautical-engineering" },
          { title: "Humanity and Science", href: "/humanity-and-science" }
        ]
      },
      {
        title: "PG",
        children: [
          { title: "Master of Management Studies", href: "/master-of-management-studies" }
        ]
      },
      { title: "Foreign Language Learning", href: "/foreign-language-learning" },
      { title: "Doctoral", href: "/doctoral" },
      { title: "Library", href: "/library" },
      { title: "Research & Development", href: "/research-developments" },
      { title: "Academic Calendar", href: "/academic-calendar" },
      {
        title: "ERP Portal",
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
          { title: "Rhythms (Cultural Festival)", href: "/rhythms" },
          { title: "Vector (Technical Festival)", href: "https://www.vectors2026-27.in/", isExternal: true },
          { title: "Kurukshetra", href: "/kurukshetra" },
          { title: "Freshers", href: "/freshers" },
          {
            title: "Sports / Cultural Activities",
            href: "https://acpce.ac.in/wp-content/uploads/2025/08/outstanding-awards.pdf",
            isExternal: true
          }
        ]
      },
      {
        title: "Co-Curricular",
        children: [
          { title: "E-Yantra", href: "/e-yantra" },
          { title: "Hackathon", href: "/hackathon" },
          { title: "Avishkar", href: "/avishkar" },
          { title: "Robocon", href: "/robocon" }
        ]
      },
      {
        title: "Social Services",
        children: [
          { title: "NSS", href: "/nss" },
          { title: "UBA", href: "/uba" }
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
      { title: "Convocation", href: "/convocation" }
    ]
  },
  {
    title: "Important Links",
    children: [
      { title: "AICTE Feedback", href: "/aicte-feedback" },
      { title: "Grievance Redressal Mechanism", href: "/grievance-redressal-mechanism" },
      { title: "Application for Transcript", href: "/application-for-transcript" },
      { title: "All Results AY 2025-26", href: "/all-results-ay-2025-26" },
      { title: "AICTE", href: "https://www.aicte.gov.in/", isExternal: true },
      {
        title: "NIRF",
        href: "https://acpce.ac.in/wp-content/uploads/2026/04/ACPCE_NIRF.pdf",
        isExternal: true
      },
      { title: "NPTEL", href: "https://nptel.ac.in/localchapter", isExternal: true },
      {
        title: "Service Rules and Regulations",
        href: "https://acpce.ac.in/wp-content/uploads/2026/04/ACPCOE-Service-rules.pdf",
        isExternal: true
      },
      { title: "Standard Operating Procedure", href: "/standard-operating-procedure" },
      { title: "ACPCE IT Policies", href: "/acpce-it-policies" },
      { title: "Privacy Policy", href: "/privacy-policy-2" }
    ]
  },
  {
    title: "Contact Us",
    href: "/contact-us"
  }
];
