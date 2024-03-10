import type { Metadata } from "next";
import { Inter, Kanit, Manrope } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const manrope = Manrope({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Sidebar />
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
