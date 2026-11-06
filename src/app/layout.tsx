import type { Metadata } from 'next';
import './globals.css';
import { ClientLayoutWrapper } from '../components/ClientLayoutWrapper';

export const metadata: Metadata = {
  title: 'A. C. Patil College of Engineering | Navi Mumbai',
  description: 'A. C. Patil College of Engineering (ACPCE), Navi Mumbai. Approved by AICTE, Affiliated to University of Mumbai, NAAC Accredited. DTE Code: 3146.',
  icons: {
    icon: 'https://acpce.ac.in/wp-content/uploads/2025/06/New-Logo-300x151-1.webp'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-800 antialiased">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
