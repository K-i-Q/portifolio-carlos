import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./_components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portifólio Carlos",
  description: "Criado e mantido por Oliveira Sistemas Empresariais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
