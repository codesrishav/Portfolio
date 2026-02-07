import { Poppins, Dosis } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/common/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dosis = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: {
    default: "Rishav | Creative Full Stack Engineer",
    template: "%s • Rishav | Creative Full Stack Engineer",
  },
  description: "I enjoy creating frontend solutions with solid foundations, scalability, and excellent user experiences.",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "codesrishav.me", "Rishav", "Portfolio", "Creative Full Stack Developer",
    "Frontend Developer", "Software Engineer", "Web Developer", "JavaScript Developer",
    "React Developer", "Next.js Developer", "Rishav Frontend Developer",
    "Rishav Software Engineer", "Rishav Web Developer", "Rishav JavaScript Developer",
    "Rishav React Developer", "Rishav Next.js Developer"
  ],
  authors: [{ name: "Rishav - Creative Full Stack Developer" }],
  openGraph: {
    type: "website",
    siteName: "Rishav",
    description: "I enjoy creating end-to-end solutions with solid foundations, scalability, and excellent user experiences.",
    title: {
      default: "Rishav | Creative Full Stack Engineer",
      template: "%s • Rishav | Creative Full Stack Engineer",
    },
    images: [{ url: "https://ik.imagekit.io/xeylous/Gemini_Generated_Image_3vsqck3vsqck3vsq.png" }],
    url: "https://rishav.xyz",
  },
  twitter: {
    card: "summary_large_image",
    site: "@codesrishav",
    title: {
      default: "Rishav | Creative Full Stack Engineer",
      template: "%s • Rishav | Creative Full Stack Engineer",
    },
    description: "I enjoy creating End-to-end solutions with solid foundations, scalability, and excellent user experiences.",
    images: ["https://ik.imagekit.io/xeylous/Gemini_Generated_Image_3vsqck3vsqck3vsq.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: "https://rishav.xyz",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dosis.variable} antialiased`}>
        <SmoothScroll />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
