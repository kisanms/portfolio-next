import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kisan Majumdar | Portfolio",
  description:
    "Software Engineer & Tech Enthusiast - Portfolio showcasing projects, skills, and achievements",
  keywords: [
    "developer",
    "portfolio",
    "software engineer",
    "web developer",
    "tech",
  ],
  authors: [{ name: "Kisan Majumdar" }],
  creator: "Kisan Majumdar",
  manifest: "/manifest.json",
  openGraph: {
    title: "Kisan Majumdar | Portfolio",
    description:
      "Software Engineer & Tech Enthusiast - Portfolio showcasing projects, skills, and achievements",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-gray-100 min-h-screen touch-manipulation`}
      >
        <div className="bg-grid-pattern bg-fixed min-h-screen">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black z-[-1]"></div>
          <div className="absolute top-0 right-0 bg-cyan-500/5 rounded-full blur-3xl z-[-1] bg-blur-lg"></div>
          <div className="absolute bottom-0 left-0 bg-purple-500/5 rounded-full blur-3xl z-[-1] bg-blur-lg"></div>

          {/* Main content */}
          <Navbar />
          <main className="relative z-10 pt-16">
            <div className="container mx-auto">{children}</div>
          </main>

          {/* Footer */}
          <Footer />

          {/* Back to top button - hidden on large screens, visible on scroll */}
          <a
            href="#"
            className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 p-2 rounded-full shadow-lg opacity-0 invisible md:hidden transition-all duration-300 transform translate-y-4 hover:scale-110 scroll-visible"
            aria-label="Back to top"
            id="back-to-top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </a>
        </div>

        {/* Script for back-to-top button visibility */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const backToTop = document.getElementById('back-to-top');
              if (backToTop) {
                window.addEventListener('scroll', function() {
                  if (window.scrollY > 300) {
                    backToTop.classList.remove('opacity-0', 'invisible', 'translate-y-4');
                    backToTop.classList.add('opacity-100', 'visible', 'translate-y-0');
                  } else {
                    backToTop.classList.add('opacity-0', 'invisible', 'translate-y-4');
                    backToTop.classList.remove('opacity-100', 'visible', 'translate-y-0');
                  }
                });
              }
            });
          `,
          }}
        />
      </body>
    </html>
  );
}
