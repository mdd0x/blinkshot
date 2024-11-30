import Providers from "@/app/providers";
import bgPattern from "@/public/bg-pattern-transparent.png";
import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import localFont from "next/font/local";
import "./globals.css";
import { BackpackIcon } from "@radix-ui/react-icons";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

let title = "Chloe AI – Real-Time AI Image Generator";
let description = "Generate images with AI in a milliseconds";
let url = "https://chloesolana.xyz";
let ogimage = "https://chloesolana.xyz/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fs.mkswft.com%2FRmlsZTo1NmQzOGYxYS0wMDRiLTQyMzItODBjMS0yZTc2MjQ0NGE4YjA%3D%2Fjustice1.png&w=3840&q=75";
let sitename = "chloesolana.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta name="color-scheme" content="dark" />
        <PlausibleProvider domain="blinkshot.io" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bodychloe dark h-full min-h-full bg-[length:6px] font-mono text-gray-100 antialiased`}
        style={{ background: `url(https://i.ibb.co.com/DghKKH7/color4bg-2024-12-01-02-35-40.png`}}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
