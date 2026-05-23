import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Providers } from "@/components/Providers";
import { BALAGH_LOGO_PATH } from "@/lib/brand";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Balagh",
  description: "Smart towing management & owner notification",
  icons: {
    icon: BALAGH_LOGO_PATH,
    apple: BALAGH_LOGO_PATH,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Balagh",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#2563EB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-dvh bg-light font-sans text-dark antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
