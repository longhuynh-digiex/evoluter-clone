import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evoluter Clone | Expert Software Developers Hiring",
  keywords: ["Hiring", "Developer Hiring", "AI Hiring", "Tech", "Evoluter", "Evoluter Clone", "evoluter-clone"],
  description:
    "At Evoluter Clone, we offer the world's leading companies and startups access to top-tier software developers",
  metadataBase: "https://evoluter-clone.vercel.app/",
  openGraph: {
    title: "Evoluter",
    images: "/Logo.png",
    description: "Expert Software Developers Hiring",
  },
  twitter: {
    card: "summary_large_image",
    images: "/Logo.png",
  },
  
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="block lg:hidden">
          <MobileNav />
        </div>

        <div className="flex-center">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
