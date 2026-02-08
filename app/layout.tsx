import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Yanfei Dai | Machine Learning Engineer",
  description:
    "Personal portfolio of Yanfei Dai - Machine Learning Engineer specializing in AI/ML systems, LLMs, and distributed computing.",
  keywords: [
    "Machine Learning",
    "AI",
    "Software Engineer",
    "LLM",
    "Deep Learning",
    "Python",
  ],
  authors: [{ name: "Yanfei Dai" }],
  openGraph: {
    title: "Yanfei Dai | Machine Learning Engineer",
    description:
      "Personal portfolio of Yanfei Dai - Machine Learning Engineer specializing in AI/ML systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
