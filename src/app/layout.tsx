import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import Navbar from "@/components/navbar";
import ScrollTopBtn from "@/components/scroll-top-btn";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  applicationName: DATA.name,
  manifest: "/favicons/vivian/site.webmanifest",
  icons: {
    icon: [
      {
        url: "/favicons/vivian/favicon.ico",
        type: "image/x-icon",
        sizes: "any",
      },
      { url: "/favicons/vivian/favicon.svg", type: "image/svg+xml" },
      {
        url: "/favicons/vivian/favicon-96x96.png",
        type: "image/png",
        sizes: "96x96",
      },
    ],
    shortcut: "/favicons/vivian/favicon.ico",
    apple: [
      {
        url: "/favicons/vivian/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar" suppressHydrationWarning>
      <body
        className={cn(
          "relative min-h-screen bg-background font-sans antialiased",
          geist.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-x-0 top-0 z-0 h-25 overflow-hidden">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10 mx-auto max-w-2xl px-6 pt-12 pb-24 sm:py-24">
              {children}
            </div>
            <Navbar />
            <ScrollTopBtn />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
