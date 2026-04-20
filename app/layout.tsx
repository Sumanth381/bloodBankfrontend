import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/provider";
import Notification from "@/commonComponent/Notification";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blood Bank App",
  description: "Blood Bank Management System",
  icons: {
    icon: "/assets/bloodicon.svg",
  },
  openGraph: {
    title: "Blood Bank App",
    description: "Donate blood, save lives",
    images: [
      {
        url: "/assets/bloodicon.svg",
        width: 1200,
        height: 630,
        alt: "Blood Bank",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
          <Notification />
        </Providers>

      </body>
    </html>
  );
}