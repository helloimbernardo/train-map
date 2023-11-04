import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://helloimbernardo.github.io/train-map/'),
  title: "Bernardo's Train Map",
  description: "Map representing every major train trip I've taken",
  openGraph: {
    title: "Bernardo's Train Map",
    description: "Map representing every major train trip I've taken",
    url: "/",
    siteName: "Train Map",
    images: [
      {
        url: "/og.jpg",
        width: 3418,
        height: 1923,
        alt: "Map representing every major train trip I've taken",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bernardo's Train Map",
    description: "Map representing every major train trip I've taken",
    creator: "@helloimbernardo",
    creatorId: "1145366758376841216",
    images: {
      url: "/og.jpg",
      alt: "Map representing every major train trip I've taken", 
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
