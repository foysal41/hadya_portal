import type { Metadata } from "next";
import { Amiri, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { GlobalUtilityBar } from "../shared/components/GlobalUtilityBar";
import ReusableHeader from "../shared/components/ReusableHeader";
import Footer from "../shared/components/Footer";

const amiri = Amiri({
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Hadya Portal",
  description: "Hadya Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${amiri.variable} ${plusJakarta.variable}`}
    >
      <body>
        <GlobalUtilityBar/>
        <ReusableHeader />
        {children}</body>
        <Footer></Footer>
    </html>
  );
}