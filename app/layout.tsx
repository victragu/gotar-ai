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
  openGraph: {
    title: "gotar.ai — Turn content into products",
    description:
      "AI pipelines turning content into product.",
    url: "https://gotar.ai",
    siteName: "gotar.ai",
    images: [
      {
        url: "https://gotar.ai/og.jpg",
        width: 1456,
        height: 816,
        alt: "gotar — AI pipelines turning content into product",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "gotar.ai — Turn content into products",
    description:
      "AI pipelines turning content into product.",
    images: ["https://gotar.ai/og.jpg"],
  },
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
