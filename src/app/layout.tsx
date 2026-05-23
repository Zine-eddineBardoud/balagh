import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import { Providers } from "@/components/Providers";
import { BALAGH_LOGO_PATH } from "@/lib/brand";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
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
    <html
      lang="en"
      className={`${poppins.variable} ${bebasNeue.variable} h-full`}
    >
      <body className="min-h-dvh bg-light font-sans text-dark antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
