import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["200", "400"],
  variable: "--font-source-code",
});

export const metadata: Metadata = {
  title: "gotar.ai — Turn content into products",
  description:
    "AI-powered pipelines that transform your content into scalable, multi-platform IP.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceCodePro.variable}`}>
      <body>{children}</body>
    </html>
  );
}
