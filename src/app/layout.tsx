import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evoluter",
  description: "Hire Expert Software Developers Supported by AI",
  metadataBase: "https://evoluter-clone.vercel.app/",
  openGraph: {
    images: "/Logo.png",
  },
  twitter: {
    card: "summary_large_image",
    images: "Logo.png",
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
