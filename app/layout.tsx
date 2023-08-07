import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToasterContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";
import ActiveStatus from "./components/ActiveStatus";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Messenger",
  description: "Message your friends and family with Messenger!",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://messenger.seangjr.tech",
    title: "Messenger",
    description: "Message your friends and family with Messenger!",
    images: [
      {
        url: "/images/maxresdefault.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Messenger",
    description: "Message your friends and family with Messenger!",
    images: [
      {
        url: "/images/maxresdefault.jpg",
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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
