import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import { getToken } from "@/actions/decodeToken";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JoinSpot",
  description: "Better Together",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const payload = await getToken();
  console.log(payload);
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
