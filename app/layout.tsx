import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fast & Reliable Cash Advance Solutions | Quick Approval, No Hidden Fees",
  description: "Need a cash advance? Get quick approval, transparent terms, and flexible repayment options. Secure, confidential, and trusted by thousands. Apply now for fast funds!",
  openGraph:{
    title: "Fast & Reliable Cash Advance Solutions | Quick Approval, No Hidden Fees",
  description: "Need a cash advance? Get quick approval, transparent terms, and flexible repayment options. Secure, confidential, and trusted by thousands. Apply now for fast funds!",
  type:"website",
  locale:"en_US",
  url:""

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
